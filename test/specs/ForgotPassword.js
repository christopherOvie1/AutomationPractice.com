//
//  const expectChai = require('chai').expect;
//  describe('Forgot Password', () => {
//     it('user can verify password successfully', () => {
//
//        browser.url('/index.php')
//        const logobuttonisDisplayed = $('#header_logo > a > img').isDisplayed()
//        console.log("The name of my logo is "+logobuttonisDisplayed);
//        expectChai(logobuttonisDisplayed).to.equal(true);
//
//        //$(signInLink='#header > div.nav > div > div > nav > div.header_user_info > a').click();
//         $(signInLink='=Sign in').click();
//
//        $(forgotYourPasswordlink ='#login_form > div > p.lost_password.form-group > a').click();
//        $(emailTextField ='#email').setValue('davin.riches@gmail.com ');
//        $(retrievePasswordBtn ='#form_forgotpassword > fieldset > p > button > span').click();
//       const confirmationMessageReceived = $('#center_column > div > p').getText();
//       console.log('I confirmed forgot password link as '+confirmationMessageReceived);
//       expectChai('A confirmation email has been sent to your address: davin.riches@gmail.com',confirmationMessageReceived,'error message is displayed');
//
//     })
// })