import {test} from '@playwright/test'

test('confirm Popup', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')

    page.on('dialog', async dialog => {
        
        await dialog.accept()
        console.log(await dialog.message())
        console.log(await dialog.type())
    })



    await page.locator('//tbody[@class="w-full"]//descendant::td[.="Levis Shirt"]/..//input').click()
    await page.waitForTimeout(3000)

    await page.getByRole('button', {name: 'Delete', exact: true}).click()
    await page.waitForTimeout(3000)

    
})    
