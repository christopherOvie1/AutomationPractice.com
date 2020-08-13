
const  homePage = require('..\\PageObjects\\homePage')
const  loginPage = require('..\\PageObjects\\loginPage')
//const expectChai = require('chai').expect;
describe('loginTest', () => {
    it('check that user login successfully', () => {

        browser.url('/index.php')
        browser.maximizeWindow();
        expect(browser).toHaveTitle('My Store');
        homePage.sign();
        loginPage.login('maxtest433@gmail.com', 'Friday24');
        browser.pause(5000);
        //const message=   this.messageText.getText();
         //console.log(message);
      //  expectChai('Welcome to your account. Here you can manage all of your personal information and orders.',message);
      //  expectChai(message).to.equals('Welcome to your account. Here you can manage all of your personal information and orders.');
    })


})