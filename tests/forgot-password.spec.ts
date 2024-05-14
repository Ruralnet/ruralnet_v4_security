import test from "playwright/test";
import { LoginPage, ForgotPasswordPage } from "../pages";

const LOGIN_ANSWER = {
    'Q01': 'test',
    'Q02': 'test',
    'Q03': 'test'
}

const VALID_USER = {
    'LOGIN_NAME': 'rnt-marvin',
    'MOTHERS_MAIDEN_NAME': 'Test Maiden Name',
    'DATE_OF_BIRTH': '01/11/2024',
    'NEW_PASSWORD': 'windows1*',
    'RECONFIRM_PASSWORD': 'windows1*',
}

// test.describe('VERIFY FORGOT-PASSWORD PAGE', () => {
//     test('this should verify the forgot password page', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const forgotPasswordPage = new ForgotPasswordPage(page)

//         await loginPage.goto()
//         await loginPage.closeBanner()
//         await loginPage.enterUsername(VALID_USER.LOGIN_NAME)
//         await loginPage.clickForgotPassword()
//         await forgotPasswordPage.verifyForgotPasswordPage(VALID_USER.LOGIN_NAME)
//     })
// })

test.describe('VALID USER INFORMATION/MATCHED PASSWORD', () => {
    test('this should ', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const forgotPasswordPage = new ForgotPasswordPage(page)

        await loginPage.goto()
        await loginPage.closeBanner()
        await loginPage.enterUsername(VALID_USER.LOGIN_NAME)
        await loginPage.clickForgotPassword()
        // await forgotPasswordPage.forgotPassword(VALID_USER)
        const loginQuestion = page.locator('input[name="loginQuestionCode"][value^="Q"]')
        const loginQuestionValue = await loginQuestion.inputValue()
        console.log(loginQuestionValue)
        const FORGOT_PASSWORD = { ...VALID_USER, 'LOGIN_ANSWER': LOGIN_ANSWER[loginQuestionValue] }
        console.log(FORGOT_PASSWORD)
    })

})

// test.describe('VALID USER INFORMATION/UNMATCHED PASSWORD', () => {
//     test('', ({ page }) => {

//     })

// })

// test.describe('INVALID USER INFORMATION/MATCHED PASSWORD', () => {
//     test('', ({ page }) => {

//     })
// })

// test.describe('INVALID USER INFORMATION/UNMATCHED PASSWORD', () => {
//     test('', ({ page }) => {

//     })
// })