import { expect, type Locator, type Page } from '@playwright/test'

class LoginPage {
    readonly page: Page;
    readonly loginToRnetLabel: Locator;
    readonly closeBannerButton: Locator;
    readonly nextBannerButton: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly forgotPasswordButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.closeBannerButton = page.getByRole('button', { name: 'Close →'});
        this.nextBannerButton = page.getByRole('button', { name: 'Next →' });
        this.usernameField = page.locator('input[name="username"]');
        this.passwordField = page.getByLabel("Password");
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPasswordButton = page.getByRole('link', { name: 'Forgot your password?' });
    }

    async goto() {
        await this.page.goto('http://172.30.1.224:8880');
    }

    async closeBanner() {
        await this.closeBannerButton.click();
        await this.nextBannerButton.click();
    }

    async enterUsername(username: string) {
        console.log(username);
        await this.usernameField.click();
        await this.usernameField.fill(username);
        await this.usernameField.press('Tab');
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    async clickForgotPassword() {
        this.forgotPasswordButton.click()
    }
}

export default LoginPage