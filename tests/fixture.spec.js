import {test} from '@playwright/test'

//page fixture 

 test('url1',async({page})=> {
     await page.goto('https://playwright.dev/')// one isolated session
        await page.goto('https://www.amazon.in/') // another isolated session
 })



//  browser fixture --> used to open a new tab in an isolated session
// test('url1',async({browser})=> {
//     const context = await browser.newContext();// new isolated session

//     const page1 = await context.newPage() //first tab
//     await page1.goto('https://testautomationtools.dev/playwright-overview/')

   
//     const page2 = await context.newPage() //second tab
//     await page2.goto('https://www.amazon.in/')

// })



