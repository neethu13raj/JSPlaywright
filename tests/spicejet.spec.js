
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
    
    await page.getByText('round trip').click()
    await page.waitForTimeout(2000)

    await page.getByTestId('to-testID-origin').click()
    await page.locator('//div[@class="css-1dbjc4n r-knv0ih r-1k1q3bj r-ql8eny r-1dqxon3"]/div//div[text()="Agra"]').click()
   // await page.waitForTimeout(2000)

   await originAgentCluster.getByTestId('to-testID-destination').click()
   await page.locator('//div[@class="css-1dbjc4n r-19yat4t r-1rt2jqs"]//div[text()="Amritsar"]').click()
   await page.waitForTimeout(2000)

   await page.getByText('Return Date').click()

   await page.locator('//div[@data-testid="undefined-month-October-2025"]//div[@data-testid="undefined-calendar-day-8"]').click()
   



})

// test('onini', async({browser}) => { 
// })