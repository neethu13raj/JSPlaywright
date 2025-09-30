
import {expect, test} from '@playwright/test'

test('AutomationPractice', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.getByPlaceholder('Enter Name').fill('Anu')

    await page.getByRole('textbox',{name : 'Email', exact: false}).fill('Anu@gmail.com')
    //await expect.soft(page.getByRole('textbox',{name : 'Email', exact: false})).toBeEmpty()
    await page.getByPlaceholder('Enter Phone').fill('887653468')
    let phone = await page.getByPlaceholder('Enter Phone').isEditable
    console.log(phone);
    

    await page.getByRole('textbox',{name : 'Address'}).fill('TekPyramid, Bangalore')

    await page.getByRole('radio', {name : 'Male', exact: true}).check()

    //await page.getByRole('checkbox',{name : 'Thursday', exact: true}).check()

    await page.getByText('Tuesday').check()
    await expect( page.getByText('Tuesday')).toBeChecked()

   // await page.locator('#country').selectOption('Canada')
    // let country = await page.locator('#country').textContent()
    // console.log(country);// prints all country names
    
    await page.getByRole('combobox', {name: 'country', exact: true}).selectOption('Canada')

    await page.locator('#colors').selectOption(['Red','Green'])
    

    await page.locator('#animals').selectOption(['Cat','Dog'])

    await expect(page.getByRole('button',{name : 'START'})).toBeEnabled()
    await page.getByRole('button',{name : 'START'}).click()

    await page.waitForTimeout(3000)
})

//selecting dropdown
test('dropdown', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator()
})