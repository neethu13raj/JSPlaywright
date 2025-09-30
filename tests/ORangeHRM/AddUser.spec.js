import { readDataFromExcelFile} from "../../Utitility/readDataExcel.js"
import { expect, test } from "@playwright/test";
import { login } from "../../POM/login.page.js";
import { Dashboard } from "../../POM/Dashboard.page.js";
import { admin } from "../../POM/admin.page.js";
import { adduser } from "../../POM/adduser.page.js";
import tdata from '../../testdata/readData.json'

test('User', async({page}) => {

    const logobj = new login(page)
    await logobj.loginF(tdata.username,tdata.password)

    const hpobj = new Dashboard(page)
    await hpobj.AdminF()

    const adminobj = new admin(page)
    await adminobj.AddbtnF()
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')

    const addobj = new adduser(page)
    //await addobj.addUserF('a','Moonwalk','qwe12345','qwe12345')
    await addobj.addUserF(tdata.EmpName, tdata.un,tdata.pw,tdata.cpw)

    await addobj.saveF()

    //const data = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx',1,1 )
   // await adminobj.searchUserF(data)

    await hpobj.logoutF()


    
})