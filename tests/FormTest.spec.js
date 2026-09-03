const { test, expect } = require('@playwright/test');
const FormData = require('../test-data/FormData.json');

test('DemoQA Student Registration Form', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Remove ads that may block elements
    await page.evaluate(() => {
        document.querySelector('#fixedban')?.remove();
        document.querySelector('footer')?.remove();
    });

    // Name
    await page.fill('#firstName', FormData.firstName);
    await page.fill('#lastName', FormData.lastName);

    // Email
    await page.fill('#userEmail', FormData.email);

    // Gender
    await page.getByText(FormData.gender, { exact: true }).click();

    // Mobile
    await page.fill('#userNumber', FormData.mobile);

    // Date of Birth
    const [day, month, year] = FormData.dob.split(' ');

    await page.locator('#dateOfBirthInput').click();

    await page.locator('.react-datepicker__year-select')
        .selectOption(year);

    await page.locator('.react-datepicker__month-select')
        .selectOption(month);

    await page.locator(
        `.react-datepicker__day--0${day.padStart(2, '0')}:not(.react-datepicker__day--outside-month)`
    ).click();

    // Subjects
    await page.locator('#subjectsInput').fill(FormData.subject);
    await page.keyboard.press('Enter');

    // Address
    await page.fill('#currentAddress', FormData.address);

    // State
    await page.locator('#state').click();
    await page.getByText(FormData.state, { exact: true }).click();

    // City
    await page.locator('#city').click();
    await page.getByText(FormData.city, { exact: true }).click();

    // Submit
    await page.locator('#submit').click();

    // Validation
    await expect(
        page.locator('#example-modal-sizes-title-lg')
    ).toHaveText('Thanks for submitting the form');

    await expect(
        page.getByText(`${FormData.firstName} ${FormData.lastName}`)
    ).toBeVisible();

    await expect(
        page.getByText(FormData.email)
    ).toBeVisible();

    await expect(
        page.getByText(FormData.mobile)
    ).toBeVisible();

    // Close modal
    await page.getByRole('button', { name: 'Close' }).click();
});
