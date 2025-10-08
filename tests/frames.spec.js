import {test} from '@playwright/test'

test('handling frames', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //method 1
    let frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill("abcdefgh")
    await page.waitForTimeout(5000)

    //method 2 using framelocator

    let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
    await frame2.fill('sdkjfhskdjfh')

    //method 3  contentframe for nested frame

    let frame3 = await page.locator('//frame[@src="frame_3.html"]').contentFrame()
    await frame3.locator('//input[@name="mytext3"]').fill("aaaaaaaaaaa")

    //let innerframe = await frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')

    let innerframe = await frame3.locator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').contentFrame()
    await innerframe.locator('(//div[@class="AB7Lab Id5V1"])[1]').click()

    await page.waitForTimeout(2000)
})

//in demo Apps
test('demoapps', async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")

    //deafult frame
    // let frame1 = await page.frameLocator('//iframe[@class="w-full h-96"]')
    // await frame1.getByRole('textbox', {name : 'Username'}).fill('success')
    // await frame1.getByRole('textbox', {name : 'Password'}).fill('password')
    // await page.waitForTimeout(3000)
    // await frame1.getByRole('button', {name : 'Login'}).click()

    //nested iframe
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
     console.log( page.frames().length);
     let parentframe = await page.frameLocator('//iframe[@class="w-full h-96"]')
    let  mainframe = await parentframe.frameLocator('//section[@class="main_form_container"]//iframe')
    await mainframe.locator('//input[@id="email"]').fill('Admin@gmail.com')
    await page.waitForTimeout(3000)

    //multiple iframe

    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")
    console.log( page.frames().length);
    let frame1 = await page.frameLocator('(//iframe[@class="w-full h-96"])[1]')
    await frame1.locator('//input[@id="email"]').fill('Admin@gmail.com')
    await frame1.locator('//input[@id="password"]').fill('Admin@1234')
    await frame1.locator('//input[@id="confirm-password"]').fill('Admin@1234')
    await page.waitForTimeout(1000)
    await frame1.getByRole('button', {name : 'Sign Up'}).click
    await page.waitForTimeout(5000)

    //swithcing frame

    // let frame2 = await frame1.frameLocator('(//iframe[@class="w-full h-96"])[2]')
    // await frame2.locator('//input[@id="username"]').fill('SuperAdmin@gmail.com')
    // //await frame2.getByLabel('Password').fill('SuperAdmin@1234')
    // await frame2.waitForTimeout(5000)
    

})