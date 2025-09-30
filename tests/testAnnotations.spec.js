import {test} from '@playwright/test'
//describe
// test.describe("three test", () => { 
// test('a', async({page})=> {
//     await page.goto('https://www.amazon.in/')
// })

// test('b', async({page})=> {
//     test.slow()
//     await page.goto('https://playwright.dev/')
// })

// test('c', async({page})=> {
//     await page.goto('https://www.flipkart.com/')
// })})


//other annotations
test("case1", async({page})=> {
    await page.goto('https://www.amazon.in/')
})

test('case2', async({page})=> {
    //test.slow() --> it waits *3 times than normal 30sec for each action
   // test.setTimeout(4000) ---> custom wait 
    
    await page.goto('https://playwright.dev/')
})

test.fail('case3', async({page})=> {
    await page.goto('https://www.flipkart.com/')
})
