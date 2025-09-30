
import {expect, test} from '@playwright/test'

test('ex1',async({page}) => {
    await page.goto("https://playwright.dev/")

    //to fetch the pagesize
    let size = page.viewportSize()
    console.log(size);

    // //set the page size
    // await page.setViewportSize({width: 500, height: 300})
    // await page.waitForTimeout(3000) //waits for another 3000sec and then closes
    // let newsize =  page.viewportSize() // storing the newsize
    // console.log(newsize); // prints the new size 500*300

    //print the url
    let url = page.url()
    console.log(url);

    //print the title
   console.log(await page.title());


   //go to url
   await page.goto("https://www.amazon.in/")

   //to close
   //await page.close() 


   //to take screenshot
   //first create a folder. If not created it will create/save it in vurrent folder

   const sc = new Date().getTime()
   await page.screenshot({path :`screenshot/screenshot${sc}.png`}) // 'foldername/path${}.png'

//   //reload the page
//   await page.reload()

//   //going back and foward
//   await page.goBack()
//   await page.goForward()

//  page.setDefaultTimeout(50000)
//     //test.slow()
//   //getby label
//   await page.getByLabel('Search Amazon.in').fill('phones')
//   await page.keyboard.press('Enter');

//   await page.waitForTimeout(3000)
  
  
//   //getby placeholder
//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//   await page.getByPlaceholder('Username').fill('abcd')
//    await page.waitForTimeout(3000)

//    //getby Role
//    await page.goto("https://testautomationpractice.blogspot.com/")
//    await page.getByRole('radio',{name: 'Male', exact: true}).click()
//    //await page.waitForTimeout(3000)
   
//    await page.getByRole('checkbox',{name : 'Friday'}).click()

//    //await page.getByRole('button', {name: /submit/i, exact:true}).click()
//    //await page.waitForTimeout(3000)

//    //getbyText
//     page.getByText('GUI Elements')
//    //await page.waitForTimeout(3000)

//     //getby title
    

//     //getby locator
//     await page.locator('//textarea[@id = "textarea"]').fill("hi good morning")
//     //await page.waitForTimeout(5000)
    
//     //setNavigationTimeout

//     //setdefaulttimeout

//    //video object associated with the page, either null or video
// //  console.log(page.clock);

// // to hover an element
// await page.hover('//div[@class="tabs-outer"]//a[.="Home"]')
// //await page.waitForTimeout(5000)

// //to click an element
// await page.click('//a[.="Udemy Courses"]')


 //let sc = new Date()
 // await page.screenshot({path :`screenshots/screenshot_${sc}.png`}) // 'foldername/path${}.png'
      




   })



    //browser.context
//    test('', async({browser})=> {
//     const context = await browser.newContext()
//    const page1 =  await context.newPage()

//    await page1.goto("https://www.amazon.in/");

//    test.slow()
//    const page2 = await context.newPage()
   
//    await page2.goto("https://www.flipkart.com/");
      
//    })

   




   
     
    
    


