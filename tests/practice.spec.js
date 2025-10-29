import { test } from "@playwright/test";

test('slider', async({browser}) => {

     const context = await browser.newContext()

         const page1 = await context.newPage()
        await page1.goto('https://www.flipkart.com/')

        const page2 = await context.newPage()
        await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        await page2.waitForLoadState('networkidle')
       const pages = context.pages()

       const tab = pages[0]

       await page1.bringToFront()
       const title = await tab.title()
       console.log(title);
       
        

})
