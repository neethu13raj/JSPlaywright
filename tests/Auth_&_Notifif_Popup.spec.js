import {test} from '@playwright/test'

test('Authentication pop up', async({browser}) => {

    

   let context =  await browser.newContext(

    {
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    }
   )

   const page = await context.newPage()

   await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0')
   await page.locator('//section[@class="pt-4 flex flex-col items-center"]/a').click()
})


test.only('Notifications', async({browser}) => {

    const context = await browser.newContext(
        {
            permissions: ['notifications']
        }
    )

    const page = await context.newPage()

    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole('button', {name : 'Notification'}).click()

    //validating the permission
    let result = await page.evaluate(() => {return Notification.permission})
    console.log(result);
    
})