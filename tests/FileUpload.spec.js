import {expect, test} from '@playwright/test'
import path from 'path'

test( 'handling single fileupload', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    console.log(__dirname);
    await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,'xpath.docx'));
    // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/NR/Desktop/assgnments/xpath.docx");

    await page.waitForTimeout(3000)
    await page.getByRole('button', {name : 'Upload Single File'}).click();
    await page.waitForTimeout(3000)

    await expect(page.locator('//p[@id ="singleFileStatus"]')).toContainText('xpath.docx')

    })
    test.only('handling multiple file uplaod', async({page}) => {
          await page.goto('https://testautomationpractice.blogspot.com/')
          await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(
          [path.join(__dirname,'xpath.docx'),path.join(__dirname,'day1.docx')]
        );

        await page.getByRole('button', {name: 'Upload Multiple Files'}).click()
await page.waitForTimeout(3000)

let filename = await page.locator('//p[@id="multipleFilesStatus"]').textContent()

console.log(filename);
await expect(filename).toContain('xpath.docx','day1.docx')

//removing the files from an array
await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([]);

await page.waitForTimeout(2000)

    })





