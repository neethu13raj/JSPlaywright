export class Bookings {

    /**
     * @param { import ('playwright').Page} page
     */

    constructor(page){

        this.page = page
     
        this.radio = page.locator('//div[text()="One Way"]')
        this.from = page.locator('//input[@name="0-departcity"]')
        this.to = page.locator('//input[@name="0-arrivalcity"]')
       // this.departmonth = page.locator('//div[.="October 2025"]')
       this.travellers = page.locator('//input[@name="0-travellerclasscount"]')

        

        

    }

    async boookingF(){

        await this.radio.click()
        await this.from.fill('Mumbai')
        await this.to.fill('Kolkata')
        await this.travellers.click()
       
         
    }
}