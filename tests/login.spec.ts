import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

const VALID_CREDENTIAL = {
    'USERNAME': 'qa_marvin',
    'PASSWORD': 'password1*'
}

const INVALID_CREDENTIAL = {
    'USERNAME': 'yaddaa',
    'PASSWORD': 'something12'
}

test.describe('VERIFY LOGIN PAGE', () => {
    test('should verify the login page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.goto();
        await expect(page.locator('div.container'))
        .toHaveText([
            "LOGIN TO RURALNETUsernamePasswordYearForgot your password?Login"
        ])
    })
})

test.describe('LOGIN WITH VALID CREDENTIAL', () => {
    test('should allow me to login with valid username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.closeBanner();
        await loginPage.login(VALID_CREDENTIAL.USERNAME, VALID_CREDENTIAL.PASSWORD);
        await expect(page.getByText('RuralNetDashboard')).toBeVisible();
    })

    test.fail('should fail me to login without username', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.goto();
        loginPage.closeBanner();
        loginPage.enterPassword(VALID_CREDENTIAL.PASSWORD);
        loginPage.clickLogin();
        await expect(page.getByText('RuralNetDashboard')).toBeVisible();
    })

    test.fail('should fail me to logged without password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.goto();
        loginPage.closeBanner();
        loginPage.enterUsername(VALID_CREDENTIAL.USERNAME);
        loginPage.clickLogin()
        await expect(page.getByText('RuralNetDashboard')).toBeVisible();
    })
})

test.describe('LOGIN WITH INVALID CREDENTIAL', async () => {
    test.fail('should fail me to logged in with invalid credential', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.goto();
        loginPage.closeBanner();
        loginPage.login(INVALID_CREDENTIAL.USERNAME, INVALID_CREDENTIAL.PASSWORD);
        await expect(page.getByText('RuralNetDashboard')).toBeVisible();
    })
})
