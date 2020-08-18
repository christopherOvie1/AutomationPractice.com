const expectChai = require('chai').expect;
class homePage {

    get logoBanner() {return $('#header_logo > a > img')}
    get signInBtn() { return $('a[title=\'Log in to your customer account\']') }


    confirmedSeeingLogoBanner(){
        const logobuttonisDisplayed=   this.logoBanner.isDisplayed();
        console.log( 'logo banner displayed is'+logobuttonisDisplayed);
        expectChai(logobuttonisDisplayed).to.equal(true);
    }
    sign(){
        this.signInBtn.click()
    }

}
module.exports= new homePage();


