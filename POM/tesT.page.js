
import { expect } from '@playwright/test'
import path from 'path'
export class tesT{

    /**
     * @param { import ('playwright').Page} page
     * 
     */

    constructor(page){
        this.page = page
        this.fname = page.locator('//input[@name="uname"]')
        this.em = page.locator('//input[@id="email"]')
        this.tel = page.locator('//input[@id="tel"]')
        this.fx = page.locator('//input[@id="fax"]')
        this.upload = page.locator('//input[@name="datafile"]')
        this.gender = page.locator('//select[@name="sgender"]')


        //this.radio = page.locator('//input[@value="four"]')
        this.radio = page.getByRole('radio')

        this.skills = page.getByRole('checkbox')

        this.multipledd = page.locator('//select[@id="tools"]')
        this.submit = page.locator('//input[@name="commit"]')
    }

    async form(fn,em,tl){

        await this.fname.waitFor({state: 'visible'})
        await this.fname.fill(fn)
        await expect(this.fname).toHaveValue(fn)

        await this.em.fill(em)
        await expect(this.em).toHaveValue(em)

        await this.tel.fill(tl)
        await expect(this.tel).toHaveValue(tl)

        await expect(this.fx).toBeDisabled()

        console.log(__dirname);
        await this.upload.setInputFiles(path.join(__dirname,'day1.docx'))
         //await expect(this.upload).toContainText('day1')

        await this.gender.selectOption('male')
        await expect(this.gender).toHaveValue('male')

       await this.radio.nth(3).check();
       await expect(this.radio.nth(3)).toBeChecked()

       await this.skills.nth(0).click()
       //await expect(this.skills).toBeChecked()

       await this.multipledd.selectOption(['Cypress','Protractor'])
      let x =  await this.multipledd.allTextContents()
      //await expect(x).toEqual(expect.arrayContaining(['Cypress','Protractor']))

      //await expect(x).toContain('Protractor')
       //await expect(this.multipledd).toHaveValues([])

       
       //await this.submit.click()



    }
}