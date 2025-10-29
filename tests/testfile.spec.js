import { test  } from "@playwright/test";
import { tesT } from '../POM/tesT.page.js';

import tdata from "../testdata/testpage.json"

test('test file ', async({page}) => {


    await page.goto('https://qavbox.github.io/demo/signup/')
    const obj = new tesT(page)
    await obj.form(tdata.fullname, tdata.email, tdata.telephone, tdata.fax)
    
    
})