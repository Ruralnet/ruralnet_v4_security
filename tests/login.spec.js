const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

const VALID_LOGIN = {
    'USERNAME': 'qa-marvin',
    'PASSWORD': 'password1*'
}

const INVALID_LOGIN = {
    'USERNAME': '',
    'PASSWORD': ''
}

test.describe('Logging In with Valid Credential', () => {
    test('should allow me to be logged with valid credential', async ({ page }) => {
        
    })
})


test.afterAll('Teardown', async () => {
    console.log('Done with tests');
  })