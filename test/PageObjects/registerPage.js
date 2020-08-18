const expectChai = require('chai').expect;
class registerPage
{
    get createEmail() {return $('#email_create')}
    get createAccountBtn() {return $('#SubmitCreate > span')}
    get genderBtn() {return $('#id_gender1')}
    get FirstName() {return $('#customer_firstname')}
    get LastName() {return $('#customer_lastname')}
    get password() {return $('#passwd')}
    get companyName() {return $('#company')}
    get companyNameAddressLine1() {return $('#address1')}
    get companyNameAddressLine2() {return $('#address2')}
    get city() {return $('#city')}
    get postalCode() {return $('#postcode')}
    get additionalInfomatiomn() {return $('#other')}
    get homePhone() {return $('#phone')}y
    get myAddressReference() {return $('#alias')}
    get registerBtn() {return $('#submitAccount > span')}
    get messageConfirmationText() {return $('#center_column > p')}
registerTest(randomEmail,randomfirstname,randomlastname){
        this.createEmail.setValue(randomEmail);
        this.createAccountBtn.click();
        this.genderBtn.click();
        this.FirstName.setValue(randomfirstname);
        this.LastName.setValue(randomlastname);

        this.password.setValue('Today');
    $('#days').selectByIndex(9);
    $('#months').selectByIndex(2);
    $('#years').selectByAttribute('value',1984);
        this.companyName.setValue('Xyz  Limited');
        this.companyNameAddressLine1.setValue('5');
        this.companyNameAddressLine2.setValue('micheal street');
        this.city.setValue('bronx');
        $('#id_state').selectByVisibleText('New York');
        this.postalCode.setValue('10004');
       $('#id_country').selectByVisibleText('United States');
        this.additionalInfomatiomn.setValue('no message for now');
        this.homePhone.setValue('0765432146');
        this.myAddressReference.clearValue();
        this.myAddressReference.setValue('5 Michael Avenue,New York,bronx');
        this.registerBtn.click();
    const messageReceived  = this.messageConfirmationText.getText();
    console.log('New user confirmed seeing '+messageReceived);
    expectChai('Welcome to your account. Here you can manage all of your personal information and orders.,messageReceived');


}
}
module.exports= new registerPage();