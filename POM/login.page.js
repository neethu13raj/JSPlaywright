import { expect } from '@playwright/test'

export class login{
    /**
     * @param { import ('playwright' ).Page} page
     */

    constructor(page){

        this.page = page
        this.usernametf = page.getByPlaceholder("Username")
        this.passwordtf = page.getByPlaceholder("Password")
        this.loginbt = page.getByRole('button', {name: ' Login '})
    }
    async loginF(username, password){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await expect(this.usernametf).toBeEditable()
        await this.usernametf.fill(username)
        
        await this.passwordtf.fill(password)

        await expect(this.loginbt).toBeEnabled()
        await this.loginbt.click()

        await this.page.waitForTimeout(2000)
        
        //await expect(this.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}