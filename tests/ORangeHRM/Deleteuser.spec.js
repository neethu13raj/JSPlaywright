import { admin } from "../../POM/admin.page"
import { login } from "../../POM/login.page"
import { Dashboard } from "../../POM/Dashboard.page"
import test, { expect } from "@playwright/test"
import tdata from '../../testdata/readData.json'

test.describe('', async () => {

 test.beforeEach('login', async({page}) => {

          const logobj = new login(page)
         await logobj.loginF(tdata.username,tdata.password)
    

        })
test.afterEach('logout', async({page}) => {

    const logoutobj = new Dashboard(page)
    await logoutobj.logoutF()

        })
 test('delete', async({page}) => {
        
     const hpobj = new Dashboard(page)
     await hpobj.AdminF()

     const adminobj = new admin(page)
     await adminobj.removeUserF()

        //adminobj.DeleteF()

        const msg = await adminobj.deleteconf.textContent()
        await expect(msg).toBe('Successfully Deleted')
        console.log("Deleted the user succesfully");
       
        })

})

