import { expect } from "allure-playwright";
import  tdata  from "../testdata/FKData.json";

export class Bookings {

    /**
     * @param { import ('playwright').Page} page
     */

    constructor(page){

        this.page = page
        //radio button
        this.radio = page.locator('//div[text()="One Way"]')

        //from location
        this.fromf = page.locator('//input[@name="0-departcity"]')
        this.fromloc = page.locator('//div[@class="Reem3Q PNc-Ga jD-g0X _92tk+3"]')
      
       
       
        //to location
        this.tol = page.locator('//input[@name="0-arrivalcity"]')
        this.toloc = page.locator('//div[@class="Reem3Q PNc-Ga jD-g0X _92tk+3"]')
       
        //locating date
      
       this.calender = page.getByLabel('Depart On')
       this.curmonth = page.locator('(//div[@class="_1w7bXX"])[1]')
       this.nexticon = page.locator('(//button[@class="R0r93E"])[2]')
       this.dates = page.locator('//button[@class="pl8ttv"]')
       




       //number of travellers
       this.travellers = page.locator('//input[@name="0-travellerclasscount"]')
       this.adults = page.locator('//div[.="Adults"]/../following-sibling::div[@class="QaKmGy"]//button[@class="QqFHMw +qYPut vSNayu"]')
       this.children = page.locator('//div[.="Children"]/../following-sibling::div[@class="QaKmGy"]//button[@class="QqFHMw +qYPut vSNayu"]')
       
       //selecting the cabin
       this.cabin = page.locator('//div[@class="VTUEC- uPC0Sn"]/div[text()="Premium Economy"]')
       this.done = page.getByRole('button', {name: 'Done'})
       this.search = page.locator('//span[.="SEARCH"]')
    

    }

    async boookingF(from, to){

        await this.radio.click()
       

        await this.fromf.click()
        await this.fromf.type(from, {delay: 100})
        await this.fromloc.first().click()
    
        
        await this.tol.click()
        await this.tol.type(to, {delay: 100})
        await this.page.waitForTimeout(1000)
        await this.toloc.first().click()

       // await this.departmonth.click()

      // await this.calender.click()

      console.log(tdata.date);
      
       while(true){

        
        if(tdata.monthyear == await this.curmonth.textContent()){


            for(let day of  await this.dates.all()){

                console.log(await day.textContent());
                
                if(await day.textContent() == tdata.date){

                
                    await day.click()
                    break;
                }

            }
            break

        }

        await this.nexticon.click()

       }

        await this.travellers.click()
        await this.adults.click()
       await this.children.click()

       await this.cabin.click()
       await this.done.click()
       await this.search.click()
    }
}