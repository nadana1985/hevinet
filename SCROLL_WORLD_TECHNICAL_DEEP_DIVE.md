# 📜 Technical Deep-Dive: 3D Scroll-World Engine & AI Asset Pipeline

This document provides a comprehensive technical breakdown of the **3D Scroll-World** architecture, mathematical formulas, video decoding physics, and AI asset creation pipeline referenced from [`oso95/scroll-world`](https://github.com/oso95/scroll-world) by Peter ([@the_cyw](https://x.com/the_cyw)).

---

## 1. Executive Summary & Core Engineering Paradigm

### Why Scroll-Scrubbed Video Beats WebGL

| Metric | Real-Time WebGL (Three.js / R3F) | Scroll-World Video Scrubbing |
|---|---|---|
| **Asset Download Size** | 20MB–60MB (`.glb` 3D meshes + 4K PBR textures) | 5MB–15MB (H.264/HEVC optimized video clips) |
| **GPU Memory Usage** | High (VRAM allocation for shaders & buffers) | Ultra-Low (standard hardware video decoder) |
| **Frame Rate Performance** | Drops to 15–30 FPS on low-power phones | Locked **60 FPS** across all devices |
| **Visual Realism** | Limited by real-time mobile shader budget | Unlimited (photorealistic ray-traced AI dioramas) |
| **Development Complexity** | Complex 3D camera paths & lighting math | Portable Vanilla JS engine (`~29KB`) |

---

## 2. GitHub Reference Architecture (`oso95/scroll-world`)

### Project Lineage & File Hierarchy

```
scroll-world/
├── skills/
│   └── scroll-world/
│       ├── SKILL.md              <-- AI Agent workflow instructions
│       └── references/
│           ├── index-template.html <-- HTML boilerplate
│           ├── scrub-engine.js    <-- Portable Vanilla JS scroll engine
│           ├── pipeline.md        <-- FFmpeg video encoding specification
│           ├── prompts.md         <-- AI image & camera motion prompt templates
│           └── knockout.py        <-- Background removal & asset utility
```

---

## 3. Mathematical Foundations of the Scrub Engine

### A. Normalized Scroll Progress Calculation
For a given viewport scroll position $y = \text{window.scrollY}$ and a segment $s$ with scroll bounds $[s_{\text{start}}, s_{\text{end}}]$:

$$\text{localProgress}(x) = \text{clamp}\left(\frac{y - s_{\text{start}}}{s_{\text{end}} - s_{\text{start}}}, 0, 1\right)$$

Where the clamping function is defined as:
$$\text{clamp}(v, a, b) = \min(b, \max(a, v))$$

---

### B. Non-Linear Linger Curve (`lingerEase`)
To allow the camera to **dwell and settle mid-scene** (where the text card peaks) and move faster at the transition seams, the linear progress $x$ is remapped using a cubic curve:

$$f(x, L) = (1 - L) \cdot x + L \cdot \left(4 \cdot (x - 0.5)^3 + 0.5\right)$$

- $L \in [0.0, 0.6]$: Linger factor ($L=0$ is linear, $L=0.6$ creates a pronounced mid-scene dwell).
- Satisfies boundary conditions: $f(0, L) = 0$ and $f(1, L) = 1$, ensuring seam keyframes are untouched.

---

### C. Hermite Smoothstep Interpolation (`smooth`)
Used for seamless opacity crossfades between diorama stills and video layers:

$$\text{smooth}(x) = 3x^2 - 2x^3 \quad \text{for } x \in [0, 1]$$

---

### D. Linear Interpolation (`lerp`) for Video Seeking
To eliminate abrupt playhead jumping during fast mousewheel scrolling:

$$t_{\text{current}} = t_{\text{current}} + (t_{\text{target}} - t_{\text{current}}) \times \alpha$$

Where $\alpha \approx 0.18$ on desktop for silky-smooth motion.

---

## 4. Video Decoding & Performance Physics

### Keyframe (GOP) Distance & Decode Latency

Standard web streaming videos use long **GOP (Group of Pictures)** sizes of 60–120 frames (a keyframe every 2–4 seconds).

> [!WARNING]
> **Why Long GOP Fails for Scrubbing**:
> When setting `video.currentTime = 1.45s`, the browser decoder cannot seek directly to $1.45\text{s}$. It must jump back to the preceding I-frame at $0.0\text{s}$ and decode all intermediate P-frames and B-frames up to $1.45\text{s}$. This causes visible stuttering and frame drop during fast scrolling.

### Scroll-World FFmpeg Specification

To guarantee instant seeking without decode lag:

```bash
# Desktop Master Encode (1080p, 60fps, -g 8 keyframe interval)
ffmpeg -i scene.mov -c:v libx264 -preset slow -crf 20 \
  -g 8 -keyint_min 8 -sc_threshold 0 \
  -an -movflags +faststart scene_desktop.mp4

# Mobile Light Encode (720p, 30fps, -g 4 keyframe interval)
ffmpeg -i scene.mov -c:v libx264 -preset slow -crf 22 \
  -vf "scale=720:-2" -g 4 -keyint_min 4 -sc_threshold 0 \
  -an -movflags +faststart scene_mobile.mp4
```

- `-g 4` / `-g 8`: Places an I-frame every 4 to 8 frames (0.13s to 0.26s interval).
- `-movflags +faststart`: Places the `moov` atom header at the front of the file.
- `-an`: Strips audio tracks completely to conserve memory.

---

### Blob Memory Caching & Seeking Coalescing

```javascript
// Fetch clip as Blob to enable memory-based seeking without HTTP range request overhead
fetch(clipUrl)
  .then(res => res.blob())
  .then(blob => {
    const video = document.createElement('video');
    video.src = URL.createObjectURL(blob);
    
    // Coalesce seeks: Never issue a new currentTime assignment while decoder is busy
    if (!video.seeking) {
      video.currentTime = targetTime;
    }
  });
```

---

## 5. Frame-Locking Seam Pipeline ($F_{\text{last}} \to F_{\text{first}}$)

To create a continuous 3D camera flight through $N$ scenes with **zero visual jump-cuts**:

```
┌────────────────────────┐             ┌────────────────────────┐
│     Scene N Clip       │             │     Scene N+1 Clip     │
│ (End Frame: F_last)    │             │ (Start Frame: F_first) │
└───────────┬────────────┘             └───────────▲────────────┘
            │                                      │
            └─────────►  Connector Clip  ──────────┘
                      (Frame-Locked Transition)
```

1. **Extract Reference Still**: Export $F_{\text{last}}$ (the exact final frame of Scene $N$).
2. **AI Seed Conditioning**: Pass $F_{\text{last}}$ as the initial seed image into the AI video generator (*Kling 3.0*, *Runway Gen-3*, *Seedance 2.0*).
3. **Frame-Locked Connector**: Render a 1.5-second transition connector (`connN.mp4`) that flies from $F_{\text{last}}$ to $F_{\text{first}}$ of Scene $N+1$.

---

## 6. Mobile Optimization & Gesture Handling

1. **Touch Pointer Detection**:
   ```javascript
   const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
   ```
2. **iOS Safari Video Priming**:
   Mobile Safari requires an initial user interaction before hardware video decoding is permitted. On the first `touchstart` or `pointerdown` event, the engine calls `.play()` then `.pause()` on muted video elements:
   ```javascript
   function primeVideo(v) {
     if (!v) return;
     const p = v.play();
     if (p && p.then) p.then(() => v.pause()).catch(() => {});
   }
   ```
3. **Reduced Motion Accessibility**:
   If `prefers-reduced-motion: reduce` is enabled, video playback and rAF seeking loops are bypassed entirely. The engine smoothly crossfades static diorama stills without decode overhead.

---

## 7. Glassmorphic UI Sync & Exit Layer Unpinning

- **Active Navigation Sync**: Converts progress $y \in [0, \text{totalHeight}]$ to discrete chapter index `near`, highlighting active header pills and timeline dots.
- **Scroll Exit Unpinning**: As scroll position passes the final chapter ($y > \text{totalHeight}$), all fixed elements (`.sw-stage`, `.sw-copylayer`, `.sw-route`, `.sw-sky`) smoothly fade to `opacity: 0` and `pointer-events: none`, allowing standard page content (`ValueProps`, `Footer`) to scroll into view cleanly.

---

*Document generated for HeviNet Trading 3D Scroll-World Architecture.*
