import {expect, test} from '@playwright/test'

test('status of webElements', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
   await expect(   page.getByLabel('Name')).toBeEnabled()
    await expect(  page.getByLabel('Name')).toBeEditable()
    await expect ( page.getByLabel('Name')).toBeEmpty()

    await page.getByLabel('Name').fill("Karthik")
    await expect ( page.getByLabel('Name')).toHaveValue("Karthik")
    await page.waitForTimeout(2000)

    await expect(page.getByLabel('Email Id')).toBeEmpty()
   await expect(page.getByLabel('Email Id')).not.toBeDisabled()

    //button 
    await expect(page.getByRole('button', {name : 'Register'})).toBeEnabled()

})

test.only('CSS validations', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    expect (page.url()).toEqual('https://demoapps.qspiders.com/ui/button?sublist=0')

    await expect (page.getByText('Yes')).toHaveCSS("border-color", "rgb(234, 88, 12)")
    await expect (page.getByRole('button', {name: 'Yes'})).toHaveCSS("background-color", "rgb(253, 186, 116)")
    const button = await page.getByRole('button', {name: 'Yes'})
    await button.click()
    await expect(button).toHaveCSS("background-color","rgb(134, 239, 172)")

    await expect(page.getByText('You selected "Yes"')).toHaveCSS("color","rgb(22, 163, 74)")
    await expect(page.getByText('You selected "Yes"')).toHaveCSS("font-family","Poppins, sans-serif")
    await expect(button).toHaveCSS("background-image","none")
    await expect(button).toHaveCSS("font-weight","700")
//await expect(button).toHaveCSS("border-radius", "6px")
//await expect(button).toHaveCSS("padding-left", "20px")
//await expect(button).toHaveCSS("border-width", "1px")
    await expect(button).toHaveCSS("border-style", "solid")
    await expect(button).toHaveCSS("color","rgb(0, 0, 0)")
    await expect(button).toHaveCSS("font-size","13px")

    const dropdown = page.locator('//select[@id="options"]')
    await expect(dropdown).toHaveCSS("text-align", "center")

    await page.goto("https://testautomationpractice.blogspot.com/")

    const input = await page.locator('//strong[@class="chrome-cpu"]')
    console.log(input);
    

    await expect(input).toHaveCSS("color", "rgb(255, 0, 0)")
    //await expect(input).toHaveCSS("font-weight", "bolder")
   // await expect(input).toHaveCSS("font", "normal normal 16px Open Sans")
    await expect(input).toHaveCSS("font-size", "16px")

   
})