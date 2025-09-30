import {expect, test} from '@playwright/test'

//test('Playwright practice', async({page}) => {

    // await page.goto("https://testautomationpractice.blogspot.com/")

    // await expect(page.getByPlaceholder("Enter Name")).toBeEmpty()
    // await page.getByPlaceholder("Enter Name").fill("Maya")
    // await expect(page.getByPlaceholder("Enter Name")).toBeEditable()
    // await expect(page.getByPlaceholder("Enter Name")).toHaveValue('Maya')
    // await page.getByRole('textbox', { name: 'Email'}).fill("abcd")
    // await page.getByRole('textbox', {name: 'Phone'}).fill("34345435")
    // await page.getByRole('textbox', {name: 'Address:'}).fill("asdasd sadasd sadasd")

    // await page.getByRole('radio', {name: 'Female'}).check()
    // await page.getByRole('checkbox', {name: 'Monday'}).check()
    // await page.getByRole('checkbox', {name: 'Saturday'}).check()

    // await page.getByRole('combobox', {name: 'Country'}).selectOption('Canada')
    // await page.getByRole('listbox', {name: 'Colors'}).selectOption(['Red','Green'])
    // await page.getByRole('listbox', {name: 'Sorted List'}).selectOption(['Cat', 'Dog'])

    // await page.locator('//input[@id="datepicker"  ]').click()
    // await page.locator('//a[@data-date="10"]').click()

    // await page.getByPlaceholder("Start Date").click()

    //click the link
    // await page.getByRole('link', {name: 'Posts (Atom)'}).click()
    // await page.waitForTimeout(2000)

    //fileupload

    //await page.locator('//input[@id="singleFileInput"]').setInputFiles

    
//})

test('keyboard actions @smoke and @Adhoc',  async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').click()
    await page.keyboard.insertText('admin')
    await page.getByPlaceholder('Username').click()
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//a[.="GUI Elements"]').hover()
   for(let i = 0; i <= 3; i++){
        await page.keyboard.down('ArrowDown')
        await page.waitForTimeout(1000)
        await page.keyboard.up('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.waitForTimeout(1000)
   }

//await page.keyboard.press('ArrowDown')
    
})

test('mouse actions @smoke', async({page}) => {

    //mousehover
    //await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator('//div[@id="draggable"]').hover()

    //doubleclick
    //await page.getByRole('button', {name: 'Copy Text'}).dblclick()

    //scrollwheel
     //await page.mouse.wheel(0,500)
     //await page.waitForTimeout(2000)

     //drag and drop ---> method 1
    // await page.locator('//div[@id="draggable"]').hover()
    // await page.mouse.down()
    // await page.locator('//div[@id="droppable"]').hover()
    // await page.mouse.up()
    // await page.waitForTimeout(2000)

    //drag and drop --->  method 2 using move
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.getByText('Drag Me').hover()
    // await page.mouse.down()
    // await page.mouse.move(0,500)
    // await page.waitForTimeout(700)
    // await page.mouse.up()


    //drag and drop method 3 --> using dragto
    //await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))

    //bounding box
    // await page.locator('//div[@id="draggable"]').hover()
    // await page.mouse.down()
    // const drop = await page.locator('//div[@id="droppable"]').boundingBox()
    // console.log(drop);
    // //await page.mouse.move(drop.x, drop.y)
    // await page.mouse.move(drop.x + drop.width /2, drop.y + drop.height /2)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)
    

    //drag and drop for demoapps

    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.getByText('Mobile Charger').hover()
    // await page.mouse.down()

    // const res = await page.getByText('Mobile Accessories').boundingBox()

    // await page.mouse.move(res.x,res.y)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)


    //click and hold
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    // await page.locator('//div[@id="circle"]').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.up()

    //wheel
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(1000)
    await page.mouse.wheel(0,800)
    await page.waitForTimeout(1000)
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(1000)
    await page.mouse.wheel(600,0)
    await page.waitForTimeout(1000)

})