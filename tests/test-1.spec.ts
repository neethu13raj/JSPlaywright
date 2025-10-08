import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('books');
  await page.getByRole('button', { name: 'Search for Products, Brands' }).click();
  await page.locator('div').filter({ hasText: /^Min₹100₹200₹500₹1000$/ }).getByRole('combobox').selectOption('200');
  await page.goto('https://www.flipkart.com/search?q=books&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.price_range.from%3D200&p%5B%5D=facets.price_range.to%3DMax');
  await page.locator('div').filter({ hasText: /^₹500₹1000₹1000\+$/ }).getByRole('combobox').selectOption('1000');
  await page.goto('https://www.flipkart.com/search?q=books&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.price_range.from%3D200&p%5B%5D=facets.price_range.to%3D1000');
});