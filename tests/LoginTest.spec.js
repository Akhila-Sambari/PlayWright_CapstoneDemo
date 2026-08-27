import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
  override: true
});

test('Login Test', async ({ page }) => {
    await page.goto('https://smarterp-wgaw.onrender.com/');
    await page.fill('#username', process.env.USERNAME);
    console.log("uname =", process.env.USERNAME);
    await page.fill('#password', process.env.PASSWORD);
    console.log("pwd =", process.env.PASSWORD);
    await page.click('#loginBtn');
    console.log("Logged in successful");

});