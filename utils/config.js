import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://magento.softwaretestingboard.com',
    headless: true,
  },
});
