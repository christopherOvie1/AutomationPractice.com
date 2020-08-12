

       var faker = require('faker');
      const expectChai = require('chai').expect;
describe('contact us Test', () => {

    it('user should be able to receive a confirmation message verify', () => {

        browser.url('/index.php')
        expectChai(browser.getUrl()).to.include('/index.php');
        browser.maximizeWindow();
        $(contactUsLink ='#contact-link > a').click();
        const isDisplayed = $('#center_column > h1').isDisplayed()
        expectChai(isDisplayed).to.equal(true);
        $(customerServiceDropdown ='#id_contact').selectByIndex(1);
        $(emailField ='#email').setValue(randomEmail);
        $(orderRefField ='#id_order').setValue('245');
        $(messageField ='#message').setValue('Not ready');
        $(sendButton ='#submitMessage > span').click();
       const messageReceived = $('#center_column > p').getText();
       console.log(messageReceived);
        expectChai('Your message has been successfully sent to our team.',messageReceived,'error message is displayed');

    })
})