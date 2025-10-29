import {test} from '@playwright/test'

test('autosuggestion', async({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder('Search Amazon.in').fill('shoes')
   
    //await page.locator('//div[@role="row"]').last().waitFor({state: 'visible'})
    await page.waitForSelector('//div[@role="row"]')
    
    
   const search = await page.locator('//div[@role="row"]').all()
    //console.log(search);

   for(let element of search){

     let elementText = await element.textContent()
    if(elementText == 'shoes for woman'){
       await element.click()
        break
    }
   }
    
})