
import {expect, test} from '@playwright/test'
//import { permission } from 'process'

test('', async({browser}) => {



test.slow()
let context = await browser.newContext({

    permission: [],
})
let page = await context.newPage()

    await page.goto('https://www.spicejet.com/')
    await expect(page).toHaveTitle('SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets')

    page.on('dialog', async dialog => {
        console.log(await dialog.type());
        
    })
    
    await page.getByText('round trip').click()
    await page.waitForTimeout(2000)
})