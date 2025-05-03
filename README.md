# 📏 one-linear-validator

> A minimalist, dependency-free JavaScript library for quick and easy input validation using one-liner functions.

![npm version](https://img.shields.io/npm/v/one-linear-validator)
![License](https://img.shields.io/npm/l/one-linear-validator)
![Downloads](https://img.shields.io/npm/dm/one-linear-validator)

---

## ✨ Features

- ✅ Zero dependencies – lightweight and fast
- 💡 One-liner functions for clean and readable validation
- 🔗 Named exports – import only what you need
- 🌍 Works in both Node.js and browser environments
- 📦 Full ESM (ECMAScript Module) support
- 🧩 Plug-and-play usage

---

## 📦 Installation

```bash
npm install one-linear-validator

🚀 Usage Example

import { isEmail, isPhoneNumber, isURL, isHexColor, isDate } from 'one-linear-validator';

console.log(isEmail('user@example.com'));       // true
console.log(isPhoneNumber('+1234567890'));      // true
console.log(isURL('https://example.com'));      // true
console.log(isHexColor('#ff5733'));             // true
console.log(isDate('2025-05-04'));              // true

✅ Built-in Validators

| Function          | Description                           | Example                 |
| ----------------- | ------------------------------------- | ----------------------- |
| `isEmail()`       | Validates email addresses             | `'user@example.com'`    |
| `isPhoneNumber()` | Validates international phone numbers | `'+1234567890'`         |
| `isURL()`         | Validates URLs (http/https)           | `'https://example.com'` |
| `isHexColor()`    | Validates hex color codes             | `'#FF5733'`             |
| `isDate()`        | Validates `YYYY-MM-DD` dates          | `'2025-05-04'`          |

💼 Use Cases
🔐 User registration and login forms

📱 Mobile and web form validation

🧾 API input validation

✍️ CMS/editor input sanitization

🖥️ CLI tool input checks

