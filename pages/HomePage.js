export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search');
    this.searchResult = page.locator('.product-item');
  }

  async searchProduct(term) {
    await this.searchInput.fill(term);
    await this.page.keyboard.press('Enter');
  }

  async hasResults() {
    return await this.searchResult.first().isVisible();
  }
  
  async getSearchResultTitles() {
    return await this.page.locator('.product-item .product-item-link').allTextContents();
  }
}
