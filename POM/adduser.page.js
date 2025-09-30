
import { expect } from "@playwright/test";
export class adduser{

    /**
     * @param {import ('playwright').Page} page
     */

    constructor(page){

        this.page = page

        //add user locators
        this.useroption = page.locator('(//div[@class="oxd-form-row"]//div[@class="oxd-select-wrapper"])[1]')
        this.userroletxt = page.locator('//div[@role="option"]/span[text()="Admin"]/..')
        
        this.empNametxt = page.locator('//input[@placeholder="Type for hints..."]')
        //this.empdp = page.locator('//div[@class="oxd-autocomplete-dropdown --positon-bottom"]//div[1]')
        this.empdp = page.locator('//div[@class="oxd-autocomplete-dropdown --positon-bottom"]//div[1]')

        this.statoption = page.locator('(//div[@class="oxd-form-row"]//div[@class="oxd-select-wrapper"])[2]')
        this.statustxt = page.locator('//div[@role="option"]/span[text()="Enabled"]/..')

        this.usernametf = page.locator('(//div[@class="oxd-form-row"]/div/div)[4]//descendant::div[@class="oxd-input-group__label-wrapper"]/following-sibling::div/input')

        this.passwrdtf = page.locator('(//div[@class="oxd-form-row user-password-row"]/descendant::div[@class="oxd-input-group__label-wrapper"])[1]/following-sibling::div/input')

        this.confpasstf = page.locator('(//input[@data-v-1f99f73c])[4]')

        this.savebtn = page.getByRole('button', {name: ' Save '})

        
    }

    async addUserF(empName, un, pwd, cfpwd){

        await this.useroption.click()
        await this.userroletxt.click()
        await this.page.waitForTimeout(2000)
        
       // await this.empNametxt.click()
        await this.empNametxt.fill(empName)
        await this.empdp.isEnabled()
        await this.page.waitForTimeout(3000)
       
        await this.empdp.click()
       // await this.page.waitForTimeout(2000)
        await this.statoption.click()
        await this.statustxt.click()
        //await this.page.waitForTimeout(2000)
        await this.usernametf.fill(un)
        //await this.page.waitForTimeout(2000)
        await this.passwrdtf.fill(pwd)
       // await this.page.waitForTimeout(3000)
        
        await this.confpasstf.fill(cfpwd)
       // await this.page.waitForTimeout(2000)
        await this.savebtn.click()
    }

    async saveF(){

        const savebutton = this.page.getByRole('button', {name : ' Save '})
        await expect(savebutton).toBeEnabled()

        const msg = this.page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]')
        await expect(msg).toBeVisible()
        await expect(msg).toHaveText('Success')
    }
}