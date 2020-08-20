const  forgotPasswordPage = require('..\\PageObjects\\ForgotPasswordPage');
const  homePage = require('..\\PageObjects\\homePage')
const  loginPage = require('..\\PageObjects\\loginPage')
describe('New ForgotPasswordTest', () => {
    it('check that user can retreive password if it is forgotten', () => {

        browser.url('/index.php?controller=authentication&back=my-account');
        // homePage.sign();
       // loginPage.clickmyForgotPasswordLink();

        forgotPasswordPage.loginForgotPasswdPage();


    })
})