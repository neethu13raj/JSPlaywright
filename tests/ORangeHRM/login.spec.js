import { test, expect} from '@playwright/test'
import { login } from '../../POM/login.page.js'
import { Dashboard } from '../../POM/Dashboard.page.js'
import tdata from '../../testdata/readData.json'



test('login', async({page}) => {

    const logobj = new login(page)
    
  
    await logobj.loginF(tdata.username,tdata.password)
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    const logoutobj = new Dashboard(page)
    await logoutobj.logoutF()
    await expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    

})

