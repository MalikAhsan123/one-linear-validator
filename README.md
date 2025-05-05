<h1 align="center">📏 one-linear-validator</h1>

<p align="center">
  <i>A minimalist, dependency-free JavaScript library for quick and easy input validation using one-liner functions.</i>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/one-linear-validator">
    <img src="https://img.shields.io/npm/v/one-linear-validator?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/one-linear-validator">
    <img src="https://img.shields.io/bundlephobia/min/one-linear-validator?style=for-the-badge" alt="Bundle Size" />
  </a>
  <a href="https://github.com/MalikAhsan123/one-linear-validator/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/one-linear-validator?style=for-the-badge" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/one-linear-validator">
    <img src="https://img.shields.io/npm/dt/one-linear-validator?style=for-the-badge" alt="Downloads" />
  </a>
</p>

---

## ✨ Features

- ✅ **Zero dependencies** – lightweight and fast  
- 💡 **One-liner functions** – clean, readable, and reusable  
- 🔗 **Named exports** – import only what you need  
- 🌍 **Cross-platform** – works in both Node.js and browsers  
- 📦 **ESM-ready** – modern module support  
- 🧩 **Plug-and-play** – no setup required  

---

## 📦 Installation

```bash
npm install one-linear-validator
🚀 Usage

import {
  isEmail,
  isPhoneNumber,
  isURL,
  isHexColor,
  isDate,
  isStrongPassword
} from 'one-linear-validator';

console.log(isEmail('user@example.com'));         // true
console.log(isPhoneNumber('+1234567890'));        // true
console.log(isURL('https://example.com'));        // true
console.log(isHexColor('#ff5733'));               // true
console.log(isDate('2025-05-04'));                // true
console.log(isStrongPassword('Abc@1234'));        // true
✅ Built-in Validators
Function	Description	Example
isEmail()	Validates email addresses	'user@example.com'
isPhoneNumber()	Validates international phone numbers	'+1234567890'
isURL()	Validates URLs (http/https)	'https://example.com'
isHexColor()	Validates hex color codes	'#FF5733'
isDate()	Validates YYYY-MM-DD formatted dates	'2025-05-04'
isStrongPassword()	Validates strong passwords (8+ chars, uppercase, digit, special char)	'Abc@1234'

💼 Use Cases
🔐 User registration & login forms

📱 Mobile & web form validation

🧾 API input validation

✍️ CMS/editor input sanitization

🖥️ CLI tool input checks

🧠 Author
Made with 💙 by Malik Ahsan

📄 License
This project is licensed under the MIT License.

Let me know if you’d like to add:
- A `CONTRIBUTING.md` guide
- Badges for GitHub stars, issues, forks
- Animated demo GIFs or screenshots for usage