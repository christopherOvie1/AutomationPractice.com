const  registerPage = require('..\\PageObjects\\registerPage');
const  homePage = require('..\\PageObjects\\homePage');

    var faker = require('faker');

describe('New Register Test', () => {
    var randomFirstName = faker.name.firstName();
     var randomLastName = faker.name.lastName();
     var randomEmail = faker.internet.email();
    it('check that user can register with ease', () => {
        browser.url('/index.php');
        browser.maximizeWindow();
        homePage.sign();
        registerPage.registerTest(randomEmail,randomFirstName,randomLastName);
    })
    })