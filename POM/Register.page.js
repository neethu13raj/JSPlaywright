 
export class Register{

    /**
     * 
     * @param {import ('playwright').Page} page 
     */
        constructor(page){

        this.page = page
        this.nametf = page.getByPlaceholder('Username')
        this.passwordtf = page.getByPlaceholder('Password')
        this.registrbutton = page.getByRole('button',{name: ' Login '})
        this.user = page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]')
        this.logout = page.getByText('Logout')
        

    }

    async register(un,pwd)
    {
       
        await this.nametf.fill(un)
       // await this.emailtf.fill(em)
        await this.passwordtf.fill(pwd)
        await this.registrbutton.click()
        await this.user.click()
        
        await this.logout.click()
    }
} 