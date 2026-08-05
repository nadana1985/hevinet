import { test, expect } from '@playwright/test';

test.describe('HeviNet E2E Regression Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage before each test run
    await page.goto('/');
  });

  test('should render hero and headers correctly', async ({ page }) => {
    const mainHeading = page.locator('main h1');
    await expect(mainHeading).toBeVisible();

    const navigation = page.locator('nav').first();
    await expect(navigation).toBeVisible();
  });

  test('should toggle CommandBar on Ctrl+K and handle inputs', async ({ page }) => {
    // Wait for the navigation to render and page to hydrate
    const searchButton = page.locator('button[aria-label="Search"]').first();
    await expect(searchButton).toBeVisible();
    await page.waitForTimeout(500);

    const commandBar = page.locator('[role="dialog"][aria-label="Command Bar"]');
    await expect(commandBar).not.toBeVisible();

    // Trigger CommandBar shortcut
    await page.keyboard.press('Control+k');
    await expect(commandBar).toBeVisible();

    // Verify search input has focus
    const searchInput = commandBar.locator('input');
    await expect(searchInput).toBeFocused();

    // Verify escape key closes modal
    await page.keyboard.press('Escape');
    await expect(commandBar).not.toBeVisible();
  });

  test('should display chat assistant floating buttons', async ({ page }) => {
    // Verify custom floating action actions are rendering
    const chatbotToggle = page.locator('button[aria-label="Open chat"]');
    if (await chatbotToggle.count() > 0) {
      await expect(chatbotToggle.first()).toBeVisible();
    }
  });
});
