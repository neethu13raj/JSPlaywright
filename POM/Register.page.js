 
export class Register{

    /**
     * 
     * @param {import ('playwright').Page} page 
     */
        constructor(page){

        this.page = page
        this.nametf = page.getByPlaceholder('Enter your name')
        this.emailtf = page.getByPlaceholder('Enter Your Email')
        this.passwordtf = page.getByPlaceholder('Enter your password')
        this.registrbutton = page.getByRole('button',{name: 'Register'})
        

    }

    async register(username,email,pwd)
    {
       
        await this.nametf.fill(username)
        await this.emailtf.fill(email)
        await this.passwordtf.fill(pwd)
        await this.registrbutton.click()
    }
} 