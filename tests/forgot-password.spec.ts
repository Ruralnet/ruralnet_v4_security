import test from "playwright/test";
import { LoginPage, ForgotPasswordPage } from "../pages";

const LOGIN_ANSWER = {
    'LOGIN_Q1_ANSWER': '',
    'LOGIN_Q2_ANSWER': '',
    'LOGIN_Q3_ANSWER': ''
}

const VALID_USER = {
    'LOGIN_NAME': 'qa_marvin',
    'MOTHERS_MAIDEN_NAME': '',
    'DATE_OF_BIRTH': '',
    'NEW_PASSWORD': '',
    'RECONFIRM_PASSWORD': ''
}

test.describe('VERIFY FORGOT-PASSWORD PAGE', () => {
    test('this should verify the forgot password page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const forgotPasswordPage = new ForgotPasswordPage(page)

        await loginPage.goto()
        await loginPage.enterUsername(VALID_USER.LOGIN_NAME)
        await loginPage.clickForgotPassword()

        await forgotPasswordPage.verifyForgotPasswordPage(VALID_USER.LOGIN_NAME)

})

test.describe('VALID USER INFORMATION/MATCHED PASSWORD', () => {
    test('', ({ page }) => {

    })

})

test.describe('VALID USER INFORMATION/UNMATCHED PASSWORD', () => {
    test('', ({ page }) => {

    })

})

test.describe('INVALID USER INFORMATION/MATCHED PASSWORD', () => {
    test('', ({ page }) => {

    })
})

test.describe('INVALID USER INFORMATION/UNMATCHED PASSWORD', () => {
    test('', ({ page }) => {
        
    })
})
