class homePage {


    get signInBtn() { return $('#header > div.nav > div > div > nav > div.header_user_info > a') }


    sign(){
        this.signInBtn.click()
    }
}
module.exports= new homePage();


