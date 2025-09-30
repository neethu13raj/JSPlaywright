import {test} from '@playwright/test'

test('handling browser window popup', async({browser}) =>{

    let context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')

    //creating new event
    //const pagepromise = context.waitForEvent('page')


    const [page2] = await Promise.all([

        page.waitForEvent('popup'),
        page.getByRole('button', {name: "view more"}).first().click()

    ])
    
    //clicking on the button
    //await page.getByRole('button', {name: 'view more'}).first().click()
   // const newpage = await pagepromise
   
    await page2.getByRole('button', {name : 'Add to Cart'}).click()

    await page2.locator('//*[local-name()="svg"]').click();

    await page2.waitForTimeout(3000)

    const numberofpage = await context.pages()
    console.log(numberofpage.length); //2 

    console.log(await numberofpage[0].title());
    
    
})