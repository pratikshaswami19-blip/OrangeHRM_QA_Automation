const { test, expect } = require('@playwright/test');

const username = 'Admin';
const password = 'admin123';

async function login(page) {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);

    await page.getByRole('button', { name: 'Login' }).click();
}


// TC-001
test('@smoke @regression Valid Login', async ({ page }) => {

    await login(page);

    await expect(page).toHaveURL(/dashboard/);

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

});


// TC-002
test('@regression Invalid Login', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('wrongpassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
        page.getByText('Invalid credentials')
    ).toBeVisible();

});


// TC-003
test('@smoke @regression Dashboard Validation', async ({ page }) => {

    await login(page);

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    await expect(
        page.getByText('Time at Work')
    ).toBeVisible();

});


// TC-004
test('@regression Admin Module Navigation', async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Admin' }).click();

    await expect(page).toHaveURL(/admin/);

    await expect(
    page.getByRole('heading', { name: /User Management/ })
).toBeVisible();

});


// TC-005
test('@regression Logout', async ({ page }) => {

    await login(page);

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    await page.locator('.oxd-userdropdown-tab').click();

    await page.getByText('Logout', { exact: true }).click();

    await expect(
        page.getByPlaceholder('Username')
    ).toBeVisible();

});