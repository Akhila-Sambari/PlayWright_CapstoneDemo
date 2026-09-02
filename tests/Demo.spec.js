import { test, expect } from '@playwright/test';
test('Demo Test', async ({ page }) => {
    await page.goto('https://smarterp-wgaw.onrender.com/');
    await expect(page).toHaveTitle('SmarterP');

});