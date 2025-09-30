import { test } from "@playwright/test";
import { login } from '../../POM/login.page.js';
import { Dashboard } from '../../POM/Dashboard.page.js';
import tdata from '../../testdata/readData.json'



test('', async({page}) => {

    const logobj = new login(page)
    await logobj.loginF(tdata.username,tdata.password)

    const hpobj = new Dashboard(page)
    await hpobj.AdminF()
    
})

