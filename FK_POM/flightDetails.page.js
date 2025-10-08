export class FlightDetails{

    /**
     * @param { import ('playwright').Page} page
     */



    constructor(page){

        this.page = page;
        this.flightname = page.locator('//div[@class="gfOqNz"]').allTextContents()
        this.flightprice = page.locator('//div[@class="O+irE2"]').allTextContents()
    }


    async flightdeatilsF(){

    
        console.log(await this.flightname )
        console.log(await this.flightprice);
    
    }
}