import {test} from '@playwright/test'
import { Register } from ".././POM/Register.page.js";
import tdata from "../testdata/registerdata.json";
import configdata from "../playwright.config copy.js"

tdata.forEach(({username,password},index) => {


    test(`login for ${username}`, async({page}) => {
     //await page.goto(tdata.url)
     await page.goto(configdata.use.baseURL)

    let reg = new Register(page);
    await reg.register(username,password)
}) 
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



