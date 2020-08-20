//const expectChai = require('chai').expect;

class ForgotPasswordPage {
    get emailfield() {return $('#email')}
    get ForgotPasswordLink() {return $('#login_form > div > p.lost_password.form-group > a')}
   // get ForgotPasswordText() { return $('#login_form > div > p.lost_password.form-group > a') }


    loginForgotPasswdPage(){
        this.emailfield.setValue('abc@gmail.com');
        browser.pause(4000);
        this.ForgotPasswordLink.click();

     // const  messageConfirmationText = this.ForgotPasswordText.getText();
//     expectChai(messageConfirmationText).to.equals('Please enter the email address you used to register. We will then send you a new password.');
    }

}
module.exports= new ForgotPasswordPage();