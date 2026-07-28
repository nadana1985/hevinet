# Deploying to Vercel (Free Hosting Guide)

This guide provides step-by-step instructions on how to host this Next.js repository on Vercel's free hobby tier.

## Prerequisites
1. A [GitHub](https://github.com/) account.
2. A free [Vercel Account](https://vercel.com/signup) (you can sign up using your GitHub account).

---

## Step 1: Push Code to GitHub

Since a local Git repository has already been initialized, follow these commands to publish your code to GitHub:

1. **Create a new repository** on [GitHub](https://github.com/new). Leave it empty (do not initialize with README, license, or gitignore).
2. Run the following commands in your project terminal:
   ```bash
   # Add all files to staging
   git add .

   # Commit the files
   git commit -m "Initial commit: Ready for Vercel deployment"

   # Rename branch to main (standard default)
   git branch -M main

   # Link your local repo to GitHub (replace URL with your repository URL)
   git remote add origin https://github.com/your-username/your-repo-name.git

   # Push to GitHub
   git push -u origin main
   ```

---

## Step 2: Import Project to Vercel

Once your code is pushed to GitHub, deploy it to Vercel in a few clicks:

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** and select **Project**.
3. Choose your Git provider and authorize Vercel if prompted.
4. Find your repository in the list and click **Import**.

---

## Step 3: Configure and Deploy

Vercel detects Next.js automatically and pre-configures all settings:

- **Framework Preset:** `Next.js` (detected automatically)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Environment Variables:** Not required (the application does not use any server environment variables or external databases).

Click **Deploy**! 

Vercel will build your application and deploy it within 1-2 minutes. You will receive a production URL (e.g. `https://your-repo-name.vercel.app`) for free.

---

## Features Ready on Vercel
- **Automatic SSL certificates** provided out-of-the-box.
- **Fast Global CDN** for serving pages.
- **Vercel Web Analytics & Speed Insights** are pre-installed in the app and will begin gathering data once deployed.
- **Automatic deployments** on every `git push` to the `main` branch.
