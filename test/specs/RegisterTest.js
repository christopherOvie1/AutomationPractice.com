//
//
//
// var faker = require('faker');
// const expectChai = require('chai').expect;
// describe('Register test', () => {
//
//
//       var randomFirstName = faker.name.firstName();
//       var randomLastName = faker.name.lastName();
//      var randomEmail = faker.internet.email();
//
//     it('A visitor to the site should be able to create  an account', () => {
//         browser.url('/index.php')
//         browser.maximizeWindow();
//         expectChai(browser.getUrl()).to.include('http://automationpractice.com/index.php');
//         const signIn = $('#header > div.nav > div > div > nav > div.header_user_info > a')
//         const createEmail= $('#email_create')
//
//         const createAbAccountBtn = $('#SubmitCreate > span')
//         const   logo =$('#header_logo > a > img')
//         const title= $('#id_gender1')
//         const FirstName= $('#customer_firstname')
//         const LastName= $('#customer_lastname')
//         const password= $('#passwd')
//         const companyName= $('#company')
//         const companyNameAddressLine1= $('#address1')
//         const companyNameAddressLine2= $('#address2')
//         const city= $('#city')
//         const postalCode= $('#postcode')
//         const additionalInfomatiomn= $('#other')
//         const homePhone= $('#phone')
//         const myAddressReference= $('#alias')
//         const register= $('#submitAccount > span')
//        // const userNameText= $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span')
//
//       //  logo.isDisplayed();
//         console.log('boldly declared is '+logo);
//         signIn.click();
//         createEmail.waitForDisplayed(3000);
//         createEmail.setValue(randomEmail);
//         createAbAccountBtn.click();
//         title.click();
//         FirstName.setValue(randomFirstName);
//         LastName.setValue(randomLastName);
//         password.setValue('upward');
//         browser.pause(5000);
//         $(dayDropdown ='#days').selectByIndex(6);
//
//
//       //   const days = $$('#days');
//       //   browser.pause(5000);
//       //   days.forEach((element) => {
//       //       element.click();
//         $('#months').selectByIndex(4);
//         $('#years').selectByAttribute('value',1984);
//         companyName.setValue('Xyz  Limited');
//         companyNameAddressLine1.setValue('5');
//         companyNameAddressLine2.setValue('Michael Avenue');
//         city.setValue('bronx');
//         $(stateDropDown='#id_state').selectByVisibleText('New York');
//         postalCode.setValue('10004');
//         $('#id_country').selectByVisibleText('United States');
//         additionalInfomatiomn.setValue('no message  whatsoever');
//         homePhone.setValue('0765432146');
//         myAddressReference.clearValue();
//        myAddressReference.setValue('5 Michael Avenue,New York,bronx');
//         register.click();
//
//
//     })
// })
