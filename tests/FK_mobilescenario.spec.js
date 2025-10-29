import { expect, test } from "@playwright/test";
import tdata from "../testdata/FKData.json";

test('flipkart scenario', async({browser}) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')

    await page.getByPlaceholder("Search for Products, Brands and More").fill('Books')

    await page.keyboard.press('Enter')

    

    await page.locator('//div[text()="Customer Ratings"]/../following-sibling::div//div[text()="4★ & above"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//div[@class="FtQCb2 _3Owiq+"]/div[.="Language"]/../following-sibling::div//div[@title="English"]').click()

    //await page.locator('//div[@class="FtQCb2 _3Owiq+"]/div[.="Discount"]').click()   
    //await page.locator('//section[@class="-5qqlC _2OLUF3"]//div[@title="20% or more"]').click()


   // await page.getByText('Age Group').click()
    //await page.locator('//div[text()="Age Group"]/../following-sibling::div//div[@title="9 - 12 Years"]')
    //wait page.getByText('Newest First').click()

     await page.waitForTimeout(2000)

     //await page.locator('//a[@title="Rice Dad Poor Dad"]').click()

     const [newPage] = await Promise.all([
       
         page.context().waitForEvent('page'),
         page.locator('//a[@title="Truth without Apology"]').click()
         
     ])

     
     await newPage.locator('//button[@class="QqFHMw vslbG+ In9uk2"]').click()
     console.log(newPage.url());
      
     

     //await expect(page.getByText(`${tdata.bookname}`)).toHaveText(tdata.bookname)
     
       
})