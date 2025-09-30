import {expect, test} from '@playwright/test'

import fs from 'fs'
test('File Download',async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')

    const filepath = 'C:/Users/NR/Desktop/assgnments/'
    const filename = 'TestFile.txt'

    const finalpath = filepath+filename

    await page.getByPlaceholder('Enter text here').fill("Testing file download")

    const [donwloaded_file] = await Promise.all(
        [page.waitForEvent('download'),
    page.getByRole('button', {name : 'Download'}).click()])

await donwloaded_file.saveAs(finalpath)
    

//validation

if(fs.existsSync(finalpath)){

    console.log("file is present in " + finalpath);
    
}
else{
    console.log("File not present in "+finalpath);
    
}

console.log(donwloaded_file.suggestedFilename());//returns filename

await expect(fs.existsSync(finalpath)).toBeTruthy()// assertion

expect(fs.readFileSync(finalpath, 'utf-8')).toContain('Testing')


})

//When a download starts, Playwright downloads the file to a temporary location managed 
// internally by the browser and Playwright.

//The file is kept in a temporary folder, which Playwright manages and cleans
//  up after the test/session ends.

//You can still access this temporary file path (in supported browsers) using:
//-------->  donwloaded_file.path()

//But if you don’t call saveAs(), 
// the file will be deleted once the browser context closes or Playwright cleans up.