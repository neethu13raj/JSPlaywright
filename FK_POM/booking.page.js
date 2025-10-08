export class Bookings {

    /**
     * @param { import ('playwright').Page} page
     */

    constructor(page){

        this.page = page
    //radio button
        this.radio = page.locator('//div[text()="One Way"]')

        //from location
        this.from = page.locator('//input[@name="0-departcity"]')
        this.fromloc = page.locator('//div[@class="Reem3Q PNc-Ga jD-g0X _92tk+3"]//span[.="Mumbai"]')

        //to location
        this.to = page.locator('//input[@name="0-arrivalcity"]')
        this.toloc = page.locator('//div[@class="Reem3Q PNc-Ga jD-g0X _92tk+3"]//span[.="Kolkata"]')

        this.departmonth = page.locator('//div[.="October 2025"]/ancestor::thead/following-sibling::tbody/tr//button[text()="17"]')

       //number of travellers
       this.travellers = page.locator('//input[@name="0-travellerclasscount"]')
       this.adults = page.locator('//div[.="Adults"]/../following-sibling::div[@class="QaKmGy"]//button[@class="QqFHMw +qYPut vSNayu"]')
       this.children = page.locator('//div[.="Children"]/../following-sibling::div[@class="QaKmGy"]//button[@class="QqFHMw +qYPut vSNayu"]')
       
       //selecting the cabin
       this.cabin = page.locator('//div[@class="VTUEC- uPC0Sn"]/div[text()="Premium Economy"]')
       this.done = page.getByRole('button', {name: 'Done'})
       this.search = page.locator('//span[.="SEARCH"]')
    

    }

    async boookingF(){

        await this.radio.click()

        await this.from.fill('BOM')
        await this.fromloc.click()

        await this.to.fill('Kolkata')
        await this.toloc.click()

        await this.departmonth.click()

        await this.travellers.click()
        await this.adults.click()
       await this.children.click()

       await this.cabin.click()
       await this.done.click()
       await this.search.click()
    }
}