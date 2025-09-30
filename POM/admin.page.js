import { expect } from '@playwright/test'



export class admin{

    /**
     * @param { import ('playwright').Page}page
     */

    constructor(page){
        //add button
        this.page = page
        this.addbtn = page.getByRole('button', {name: ' Add '})

        
        //remove user locators
       // this.removechkbox = page.locator('//div[@class="oxd-table-body"]/div[last()]//input')
        this.trashicon = page.locator('//div[@class="oxd-table-body"]/div[last()]//i[@class="oxd-icon bi-trash"]')
       // this.editbtn = page.locator('//div[@class="oxd-table-body"]/div[last()]//i[@class="oxd-icon bi-pencil-fill"]')
       this.deletebtn = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]')


       // edit user info
       this.editbtn = page.locator('//i[@class="oxd-icon bi-pencil-fill"]')
       this.editstatus = page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[2]')
       this.editsavebtn = page.locator('//div[@class="oxd-form-actions"]//button[text()=" Save "]')
       this.editoption = page.locator('//div[@class="oxd-select-dropdown --positon-bottom"]//span[text()="Disabled"]')

       //searchUSer locators
        this.sr_usernametf = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.sr_userRoletf = page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[1]')
        this.sr_roledp = page.locator('((//div[@class="oxd-select-wrapper"])[1]/descendant::div[@class="oxd-select-option"])[2]')
       
        this.sr_statustf = page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[2]')
        this.sr_statusdp = page.locator('(//div[@class="oxd-select-wrapper"]/div)[3]/div[2]')
        this.sr_button = page.locator('//button[@type="submit"]')
        
        //search  positive
        this. valusertf = page.locator('(//div[@class="oxd-table-card"]/div/div/div)[2]')

        //search neagtive scenario
        this. nouser = page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')

        //delete user validation confirmation
        this.deleteconf = page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
    }

    async AddbtnF(){
        await this.addbtn.click()
        //await expect(this)
        await this.page.waitForTimeout(1000)
    }

    
    async removeUserF(){
       // await this.removechkbox.check();
       // await this.page.waitForTimeout(1000)
        await this.trashicon.click()
       // await this.page.waitForTimeout(4000)
        await this.deletebtn.click()
        await this.page.waitForTimeout(1000)
    }

    async editUserF(){
        //await this.page.editbtn.click()
         await this.editbtn.click()
        await this.editstatus.click()
        await this.editoption.click()
        await this.editsavebtn.click()
    }

    async searchUserF(username){

        await this.sr_usernametf.fill(username)
       // await this.page.waitForTimeout(2000)
        await this.sr_userRoletf.click()
        await this.page.waitForTimeout(2000)
        await this.sr_roledp.click()
        await this.page.waitForTimeout(4000)
       
        await this.sr_statustf.click()
        await this.sr_statusdp.click()
       // await expect(this.page(this.sr_button)).toBeEnabled()
        await this.sr_button.click()
       // await this.page.waitForTimeout(4000)

    }

    //  async DeleteF() {

    //     const button = this.page.getByRole('button', {name : ' Yes, Delete '})
    //     await expect(button).toBeEnabled()
    //     await button.click()
    //     const msg = this.page.locator('//p[@class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
    //     await expect(msg).toBeVisible()
    //     await expect(msg).toHaveText('Successfully Deleted')
    // }

    // async validateDeleteF() // validate search a deleted username{

    //     const search = this.page.getByRole('button', {name: ' Search '})
    //     await expect(search).toBeEnabled()
    //     await search.click()
    //     const msg = this.page.locator('//p[text()="No Records Found"]')
    //     await expect(msg).toHaveText('No Records Found')

    // }

    
}
