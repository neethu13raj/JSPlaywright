export class FlightDetails{

    /**
     * @param { import ('playwright').Page} page
     */



    constructor(page){

        this.page = page;
        this.flightname = page.locator('//div[@class="gfOqNz"]')
        this.flightprice = page.locator('//div[@class="O+irE2"]')
    }


    async flightdeatilsF(){

        await this.flightname.last().waitFor()
        await this.flightprice.last().waitFor()
       // console.log(await this.flightname.allInnerTexts() )
       console.log(await this.flightname.allTextContents())
        console.log(await this.flightprice.allInnerTexts());
    
    }
}