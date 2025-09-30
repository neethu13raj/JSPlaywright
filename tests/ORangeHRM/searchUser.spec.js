
import { readDataFromExcelFile} from "../../Utitility/readDataExcel.js"
import { expect, test } from "@playwright/test";
import { login } from "../../POM/login.page.js";
import { Dashboard } from "../../POM/Dashboard.page.js";
import { admin } from "../../POM/admin.page.js";
import tdata from '../../testdata/readData.json'
import { type } from "os";


// test('search user', async({page}) => {

//     const logobj = new login(page)
//     await logobj.loginF(tdata.username,tdata.password)

//     const hpobj = new Dashboard(page)
//     await hpobj.AdminF()

//     const adminobj = new admin(page)

//      const data = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx',1,1 )
//      //console.log(data);
//         await adminobj.searchUserF(data)

//         await hpobj.logoutF()
// })


test.describe('', async() => {

    test.beforeEach('login', async({page}) => {

    const logobj = new login(page)
    await logobj.loginF(tdata.username,tdata.password)
    

})
test.afterEach('logout', async({page}) => {

    const logoutobj = new Dashboard(page)
    await logoutobj.logoutF()
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

    test('search user', async({page}) => {


    const hpobj = new Dashboard(page)
    await hpobj.AdminF()
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

    const adminobj = new admin(page)
     const data = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx',1,1 )
     //console.log(data);
     await adminobj.searchUserF(data)
     

    //validating my search result positive scenario
      
        //const value1 = await adminobj.valusertf.textContent()  
        //const value2 = data
         
        //console.log(`value1 : ${value1}`);
        //console.log(`value2 : ${value2}`);
        //await expect(value1).toBe(value2)
        //console.log("Search Success");

    //neagtive scenario
         
          const msg =  await adminobj.nouser.textContent()
          await expect(msg).toBe('No Records Found')
    
})
})