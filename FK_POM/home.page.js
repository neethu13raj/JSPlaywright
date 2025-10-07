export class home{


    /**
     * @param { import ('playwright').Page} page
     */


    constructor(page){
        this.page = page
        this.flightlink = page.locator('//span[text()="Flight Bookings"]')

    }

    async homepageF(){

        await this.page.goto('https://www.flipkart.com/')
        await this.flightlink.click()
        await this.page.waitForTimeout(2000)

       
    }
}