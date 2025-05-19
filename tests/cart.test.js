import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage.js';

test('Ensure the cart functionality operates correctly', async ({ page }) => {
  await page.goto('/orestes-fitness-short.html');

  const product = new ProductPage(page);
  await product.addProductToCart();


  expect(await product.isInCart()).toBeTruthy();

  const { quantity, price } = await product.getCartDetails();
  console.log('Cart Quantity:', quantity);
  console.log('Cart Price:', price);

  expect(quantity).toBe('1');
  expect(price).toMatch(/\$\d+/);
});
