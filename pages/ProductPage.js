export class ProductPage {
  constructor(page) {
    this.page = page;
    this.sizeOption = page.locator('div[option-label="32"]');
    this.colorOption = page.locator('div[option-label="Black"]');
    this.addToCartButton = page.locator('#product-addtocart-button');
    this.cartIcon = page.locator('.showcart');
    this.viewCartButton = page.locator('a:has-text("View and Edit Cart")');
    this.cartItem = page.locator('.cart.item');

  
    this.cartQty = page.locator('input.input-text.qty'); 
    this.cartPrice = page.locator('.cart-price .price');
  }

  async addProductToCart() {
    await this.sizeOption.click();
    await this.colorOption.click();
    await this.addToCartButton.click();
    await this.page.waitForTimeout(3000);
    await this.cartIcon.click();
    await this.viewCartButton.click();
  }

  async isInCart() {
    return await this.cartItem.isVisible();
  }

  async getCartDetails() {
    const quantity = await this.cartQty.inputValue(); 
    const price = await this.cartPrice.first().textContent(); 
    return { quantity, price };
  }
}
