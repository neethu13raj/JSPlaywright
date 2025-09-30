import { readDataFromExcelFile} from "../../Utitility/readDataExcel.js"
import { test } from "@playwright/test";
import { login } from "../../POM/login.page.js";
import { Dashboard } from "../../POM/Dashboard.page.js";
import { admin } from "../../POM/admin.page.js";
import tdata from '../../testdata/readData.json'


test('edituser', async({page}) => {
         const logobj = new login(page)
        await logobj.loginF(tdata.username, tdata.password)
    
        const hpobj = new Dashboard(page)
        await hpobj.AdminF()

        const adminobj = new admin(page)

        const data = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx',1,1 )
        console.log(data);
        await adminobj.searchUserF(data)

        await adminobj.editUserF()

        await hpobj.logoutF()
})