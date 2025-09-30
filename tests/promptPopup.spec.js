import { expect, test } from "@playwright/test";

test('Prompt PopUp', async({page}) =>{

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')


    
    page.on('dialog', async dialog => {
        console.log(await dialog.type());
       
        console.log(await dialog.message());
        
        await dialog.accept("please delete!")

        await expect(dialog.message())
        const msg = await page.locator('//div[@class="relative shadow-md sm:rounded-lg"]/section')
        await expect(page.locator('//div[@class="relative shadow-md sm:rounded-lg"]/section')).toHaveText('please delete!')
       
       // dialog.dismiss("Ignore!")
    })

    await page.locator('//tbody[@class="w-full"]//descendant::td[.="SAMSUNG Galaxy"]/..//input').click()
    await page.waitForTimeout(2000)

    await page.getByRole('button', {name: 'Delete', exact: true}).click()
     await page.waitForTimeout(3000)


})

test.only('hidden division', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/hidden?sublist=0')

    await page.getByRole('button', {name : 'Add Customer'}).click()
    await expect(page.getByRole('button', {name : 'Add Customer'})).toBeEnabled()

    await page.getByRole('textbox', {name : 'name'}).fill('Anu')
    //await expect(page.getByRole('textbox', {name : 'name'})).toHaveValue()
    await page.getByRole('textbox', {name : 'email'}).fill("Anu")
    //await expect(page.getByRole('textbox', {name : 'email'})).toHaveValue()
    await page.getByRole('combobox', { name : 'product'}).selectOption('Mobile')
    //await expect(page.getByRole('combobox', { name : 'product'})).toHaveValue('Mobile')
    await page.getByLabel('Message').fill('asdhagsdjkashdjashdkahs')
    

    await page.getByRole('button', {name : 'Submit'}).click();
    await page.waitForTimeout(3000);






})