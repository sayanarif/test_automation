import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('Validate that the search bar retrieves accurate product results', async ({ page }) => {
  const home = new HomePage(page);
  await page.goto('/');
  await home.searchProduct('Fusion');

  // Step 1: Ensure we got results
  expect(await home.hasResults()).toBeTruthy();

  // Step 2: Get titles
  const titles = await home.getSearchResultTitles();
  console.log('Search results:', titles);

  const keyword = 'fusion';
  const relevant = titles.filter(t =>
    t.toLowerCase().includes(keyword)
  );

  expect(relevant.length).toBeGreaterThan(0);

  console.log('Relevant products:', relevant);
});
