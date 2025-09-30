
import {expect, test} from '@playwright/test'

test('', async({page}) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=8")
  await expect(page).toHaveURL('https://demoapps.qspiders.com/ui?scenario=8')

  await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')

  await page.getByPlaceholder('Enter your name').fill('Anu')
  await page.getByPlaceholder('Enter Your Email').fill('Anu@gmail.com')
  await page.getByPlaceholder('Enter your password').fill('123456')

  await expect(page.getByPlaceholder('Enter your password')).toHaveAttribute('type','password')
  

  await page.click('//span[@class="absolute text-slate-600 text-[18px] bg-gray-100"]')
  await page.getByRole('button', {name : 'Register',exact: true}).click()
  await page.waitForTimeout(3000)

  await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/login')
  
  //to fetch the current URL
  const url = await page.url()
  console.log(url);

})


test('dropdown check', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=8')
    await page.locator('//select[@id="options"]').selectOption('API')
    await page.waitForTimeout(3000)

})

test('without placeholder',async({page})=> {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
  await page.getByText('Without placeholder').click();

await page.getByLabel('Name').fill('Anu')
await page.getByLabel('Email Id').fill('Anu@gmail.com')
await page.getByLabel('Password').fill('123@456')
//await page.locator('//span[@class="absolute text-slate-600 text-[18px] bg-gray-100"]').click()
await page.waitForTimeout(3000)
await page.getByText('Login Now').click()
await page.waitForTimeout(3000)

})
test.only('disabled', async({page}) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1') 
  
  await page.locator('//aside[@class="poppins w-[100%] relative"]//li[.="Disabled"]').click()
  await page.waitForTimeout(3000)

  //let a = await page.locator('//input[@id="name"]').isDisabled();
  //onsole.log(a);//true
  
  let a = await expect(page.getByLabel('Name')).toBeDisabled()  
  await expect(page.getByLabel('Email Id')).toBeDisabled()
  await expect(page.getByLabel('Password')).toBeDisabled()

  await expect(page.getByRole('link', { name: ' Login Now'})).toBeEnabled()
  await expect(page.getByRole('button',{ name: 'Register', exact: true})).toBeEnabled()
  await page.getByRole('button',{ name: 'Register', exact: true}).click()
  
  await page.getByRole('tooltip',{name: 'Enter your Name'}).isVisible()
  
  await page.getByText('Name is required').isVisible()
  await page.getByText('Email is required').isVisible()
  await page.getByText('Password is required').isVisible()
  await page.waitForTimeout(3000)

})

