import { test } from "@playwright/test";

test('slider', async({page}) => {

    await page.goto('https://www.flipkart.com/')

    await page.getByPlaceholder("Search for Products, Brands and More").fill('Shoes')
    await page.keyboard.press('Enter')

    await page.locator('//div[@class="RCE7R3 rgHxCQ"]').hover()

    const parent_slider = await page.locator('//div[@class="Oyj7AF"]').boundingBox()
   

   // Calculate the middle X coordinate of the slider track (50% position)
     const middleX = parent_slider.x + parent_slider.width / 2;
    const y = parent_slider.y + parent_slider.height / 2;

    // Get current position of max slider
   const max = await page.locator('//div[@class="Oyj7AF"]/div[@class="iToJ4v D0puJn"]').boundingBox()

   await page.mouse.move(max.x + max.width / 2, max.y + max.height / 2);
  await page.mouse.down();
  await page.mouse.move(middleX, y, { steps: 10 });
  await page.mouse.up();


  const sc = new Date().getTime()

  const element = await page.locator('//div[@class="RCE7R3 rgHxCQ"]')
  await element.screenshot({path: `screenshot/screenshot${sc}.png`})
  // Wait a moment for the filter to apply
  await page.waitForTimeout(3000);


})