# 🧪 QA Automation Framework – Playwright (JavaScript)

This project is a test automation framework built from scratch as part of a QA Assessment. It covers **UI testing** and basic **API validation**, using modern JavaScript and the [Playwright](https://playwright.dev/) testing library.

---

## 🚀 Project Goals

- ✅ Implement a scalable test automation framework
- ✅ Follow Page Object Model (POM)
- ✅ Automate **UI** scenarios using Playwright
- ✅ Verify **search and cart functionalities**
- ✅ Include basic **API connectivity check**

---

## 📂 Project Structure

```
qa-assessment/
├── tests/                # Test scripts (UI)
│   ├── search.test.js    # Validates search functionality
│   └── cart.test.js      # Validates add to cart
│
├── pages/                # Page Object Models (POM)
│   ├── HomePage.js
│   └── ProductPage.js
│
├── api/                  # API test
│   └── api.test.js
│
├── utils/                # Configuration files
│   └── config.js
│
├── playwright.config.js  # Playwright test config
├── package.json
└── README.md             # You are here!
```

---

## ⚙️ Setup Instructions

### 1. Clone or Download
Extract or clone this repo to your local system.

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

---

## 🧪 Running Tests

### ✅ Run All UI Tests

```bash
npm run test:ui
```

### ✅ Run Individual Test (e.g., Search)

```bash
npx playwright test tests/search.test.js
```

### ✅ Run API Test

```bash
npm run test:api
```

---

## 🔍 Test Case Summary

### ✅ Search Functionality

- Navigate to homepage
- Enter partial keyword (e.g., `"Fusion"`)
- Press Enter
- ✅ Validate that at least **one** relevant product is returned

### ✅ Add to Cart Functionality

- Open product page: *Orestes Fitness Short*
- Select **size** and **color**
- Add item to cart
- Navigate to cart page
- ✅ Validate that product is in cart
- ✅ Validate **quantity = 1**
- ✅ Validate **unit price is shown**

---

## 🧩 Tools Used

- [Playwright Test](https://playwright.dev/)
- JavaScript (ESM with `"type": "module"`)
- Axios for simple API testing

---

## ✅ Design Choices

- Page Object Model (POM) used for reusable UI methods
- Modular structure for maintainability and future scalability
- Headless mode enabled by default (can be disabled for debugging)

---

## 🧠 Debug Tips

- Set `headless: false` in `playwright.config.js` to see browser UI
- Use `npx playwright test --ui` for interactive test runner
- Use `.first()` or better locators when strict mode issues occur

