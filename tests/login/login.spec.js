// Adding Login feature to the Ticket
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://172.30.1.224:8880', { timeout: 60000 });
  await page.getByRole('button', { name: 'Close →' }).click();
  await page.getByRole('button', { name: 'Next →' }).click();
});

const VALID_USER = {
    'username': 'qa-marvin',
    'password': 'password1*'
}

const INVALID_USER = {
    'username': 'yadaaa',
    'password': 'swingme14'
}


test.describe('Valid User Login', () => {
    test('should verify the Login page', async ({ page }) => {
        const loginTitle = page.getByText('LOGIN TO RURALNET');
        const usernameLabel = page.getByText('Username');
        const passwordLabel = page.getByText('Password', { exact: true });
        const loginButton = page.getByRole('button', { name: 'Login' });

        // Verify that I am in the Login page
        await expect(loginTitle).toBeVisible();
        await expect(usernameLabel).toBeVisible();
        await expect(passwordLabel).toBeVisible();
        await expect(loginButton).toBeVisible();

    })

    test('should allow to me to login', async ({ page }) => {
        const usernameField = page.locator('input[name="username"]');
        const passwordField = page.getByLabel('Password');
        const passwordButton = page.getByRole('button', { name: 'Login' });

        // Input username
        await usernameField.fill(VALID_USER.username);
        await usernameField.press('Tab');

        // Input Password
        await passwordField.fill(VALID_USER.password);
        await usernameField.press('Tab');

        await passwordButton.click();

    })

    test('should not allow me login without password', async ({ page }) => {
        const usernameField = page.locator('input[name="username"]');
        const passwordButton = page.getByRole('button', { name: 'Login' });

        await usernameField.fill(VALID_USER.username);
        await usernameField.press('Tab');

        await passwordButton.click();

    })
})

