import {test} from '@playwright/test'
import { Register } from ".././POM/Register.page.js";
import tdata from "../testdata/readData.json";

test('oinn', async({page}) => {
    await page.goto(tdata.url)

    let reg = new Register(page);
    await reg.register(tdata.username,tdata.email,tdata.password)
    
})



//FOR MULTIPLE DATA USING JSON

// tdata.forEach(({ url,username,email,password}, index) => { 
//     //use the same keys passed in the testdata

//     test(`register #${index +1}`, async({page}) => {
//     await page.goto(url)
//     let reg = new Register(page);
//     await reg.register(username,email,password)// use the same keys passed in the foreach
//     await page.waitForTimeout(4000)
    
//})   
//});



