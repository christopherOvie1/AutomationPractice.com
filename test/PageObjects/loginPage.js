
const expectChai = require('chai').expect;
class loginPage {

    get myEmail() {return $('#email')}
    get myPassword() {return $('#passwd')}
    get loginBtn() {return $('#SubmitLogin > span')}
    get messageText() {return $('#center_column > p')}
//  get signOut() {return $('#header > div.nav > div > div > nav > div:nth-child(2) > a')
    login(email,password)
            {
                this.myEmail.setValue(email)
                this.myPassword.setValue(password)
                this.loginBtn.click()
                const message=   this.messageText.getText();
               console.log(message);
              expectChai(message).to.equals('Welcome to your account. Here you can manage all of your personal information and orders.');
             // expectChai('Welcome to your account. Here you can manage all of your personal information and orders.',message);
                }
}
module.exports =new loginPage();

