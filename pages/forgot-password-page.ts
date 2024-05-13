import { expect, type Locator, type Page } from '@playwright/test'

class ForgotPasswordPage {
    readonly page: Page;
    readonly loginNameLabel: Locator
    readonly mothersMaidenNameField: Locator;
    readonly birthDateField: Locator;
    readonly loginAnswerField: Locator;
    readonly newPasswordField: Locator;
    readonly reconfirmPasswordField: Locator;
    readonly sendButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginNameLabel = page.getByLabel('Login Name');
        this.mothersMaidenNameField = page.getByLabel('Mother\'s Maiden Name *');
        this.birthDateField = page.getByPlaceholder('mm/dd/YYYY');
        this.loginAnswerField = page.locator('#loginAnswer');
        this.newPasswordField = page.getByLabel('New Password');
        this.reconfirmPasswordField = page.getByLabel('Reconfirm Password');
        this.sendButton = page.getByRole('button', { name: 'Send' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    }

    async goto() {
        this.page.goto('/forgot_password')
    }

    async verifyForgotPasswordPage(username) {
        await expect(this.loginNameLabel).toHaveText(username)
    }

    async enterMothersMaidenName(mothersMaidenName) {
        this.mothersMaidenNameField.fill(mothersMaidenName)
        this.mothersMaidenNameField.press('Tab')
    }

    async enterDateOfBirth(dateOfBirth) {
        this.birthDateField.fill(dateOfBirth)
        this.birthDateField.press('Tab')
    }

    async enterLoginAnswer(loginAnswer) {
        this.loginAnswerField.fill(loginAnswer)
        this.loginAnswerField.press('Tab')
    }

    async enterNewPassword(newPassword) {
        this.newPasswordField.fill(newPassword)
        this.newPasswordField.press('Tab')
    }

    async enterReconfirmPassword(reconfirmPassword) {
        this.reconfirmPasswordField.fill(reconfirmPassword)
        this.reconfirmPasswordField.press('Tab')
    }

    async clickSave() {
        this.sendButton.click()
    }

    async forgotPassword(forgotPassword) {
        this.enterMothersMaidenName(forgotPassword.MOTHERS_MAIDEN_NAME)
        this.enterDateOfBirth(forgotPassword.DATE_OF_BIRTH)
        this.enterLoginAnswer(forgotPassword.LOGIN_ANSWER)
        this.enterNewPassword(forgotPassword.NEW_PASSWORD)
        this.enterReconfirmPassword(forgotPassword.RECONFIRM_PASSWORD)
        this.clickSave()
    }
}

export default ForgotPasswordPage;