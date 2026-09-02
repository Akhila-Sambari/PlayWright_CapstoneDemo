const { test, expect } = require('@playwright/test');
const formData = require('../test-data/formData.json');
 
test('DemoQA Student Registration Form', async ({ page }) => {
 
    await page.goto('https://demoqa.com/automation-practice-form');
 
    // Remove ads that may block elements
    await page.evaluate(() => {
    document.querySelector('#RightSide_Advertisement')?.remove();
    document.querySelector('footer')?.remove();
});
 
    // Name
    await page.fill('#firstName', formData.firstName);
    await page.fill('#lastName', formData.lastName);
 
    // Email
    await page.fill('#userEmail', formData.email);
 
    // Gender
    await page.getByText(formData.gender, { exact: true }).click();
 
    // Mobile
    await page.fill('#userNumber', formData.mobile);
 
    // Subjects
    await page.locator('#subjectsInput').fill(formData.subject);
    await page.keyboard.press('Enter');
 
 
    // Address
    await page.fill('#currentAddress', formData.address);
 
    // State
    await page.locator('#state').click();
    await page.getByText(formData.state, { exact: true }).click();
 
    // City
    
    await page.locator('#city').click();
    await page.getByText(formData.city, { exact: true }).click();
 
    // Submit
    await page.locator('#submit').click();
 
    //Validation
    await expect(page.locator('#example-modal-sizes-title-lg'))
        .toHaveText('Thanks for submitting the form');

});