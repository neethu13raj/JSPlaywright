export class Dashboard{

    /**
     * @param {import ('playwright').Page}page
     */

    constructor(page){
        this.page = page
        this.adminlnk = page.locator('//ul[@class="oxd-main-menu"]//span[text()="Admin"]')
        this.logoutlnk = page.locator('//span[@class="oxd-userdropdown-tab"]')
        this.clicklogout = page.locator('//a[text()="Logout"]')
    }

    async AdminF(){
        await this.adminlnk.click()
        await this.page.waitForTimeout(1000)
    }

    async logoutF(){
        await this.logoutlnk.click()
        await this.clicklogout.click()
    }
}