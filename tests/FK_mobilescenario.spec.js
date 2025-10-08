import { expect, test } from "@playwright/test";

test('flipkart scenario', async({page}) => {

    await page.goto('https://www.flipkart.com/')

    await page.getByPlaceholder("Search for Products, Brands and More").fill('Books')
    await page.keyboard.press('Enter')

    await page.locator('//div[text()="Customer Ratings"]/../following-sibling::div//div[text()="4★ & above"]').click()
    await page.locator('//div[text()="Language"]/../following-sibling::div//div[text()="English"]').click()
    await page.locator('//div[text()="Discount"').click()
    await page.waitForTimeout(4000)
    await page.locator('//div[text()="Discount"]/../following-sibling::div//div[text()="50% or more"]').click()
       
})