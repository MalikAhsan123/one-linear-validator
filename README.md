# one-linear-validator 🧪

[![npm version](https://img.shields.io/npm/v/one-linear-validator.svg)](https://www.npmjs.com/package/one-linear-validator)
[![npm downloads](https://img.shields.io/npm/dm/one-linear-validator.svg)](https://www.npmjs.com/package/one-linear-validator)
[![License](https://img.shields.io/npm/l/one-linear-validator.svg)](https://github.com/MalikAhsan123/one-linear-validator/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/one-linear-validator)](https://bundlephobia.com/package/one-linear-validator)
[![Issues](https://img.shields.io/github/issues/MalikAhsan123/one-linear-validator)](https://github.com/MalikAhsan123/one-linear-validator/issues)

> 🔍 A minimalist, dependency-free JavaScript validation library with one-liner functions for common input formats like Email, Phone, URL, Hex Color, Date, and Strong Passwords — returns clean structured results with error messages.

---

## ✨ Features

- ✅ Email validation
- 📱 Phone number validation
- 🌐 URL validation
- 🎨 Hex color code validation
- 📅 Date (YYYY-MM-DD) validation
- 🔒 Strong password checker (with custom rules)
- ⚡️ Lightweight & fast
- ❌ No external dependencies
- ✅ ESM support (Node.js & modern browsers)

---

## 📦 Installation

```bash
npm install one-linear-validator
or with yarn:

yarn add one-linear-validator

🚀 Usage

import {
  isEmail,
  isPhoneNumber,
  isURL,
  isHexColor,
  isDate,
  isStrongPassword,
} from 'one-linear-validator';

console.log(isEmail('test@example.com'));
// { valid: true }

console.log(isPhoneNumber('+1234567890'));
// { valid: true }

console.log(isURL('https://example.com'));
// { valid: true }

console.log(isHexColor('#ffcc00'));
// { valid: true }

console.log(isDate('2024-05-06'));
// { valid: true }

console.log(isStrongPassword('Password@123'));
// { valid: true }
📚 API Reference
Each validator returns an object:


{ valid: true } 
// or 
{ valid: false, error: 'Reason here' }
isEmail(str)
Checks for a valid email format.

isPhoneNumber(str)
Accepts international formats, with or without +.

isURL(str)
Matches HTTP/HTTPS URLs, domains, optional port and path.

isHexColor(str)
Supports #RGB, #RRGGBB, or without #.

isDate(str)
Accepts date in YYYY-MM-DD format.

isStrongPassword(str, options?)
Checks password strength with default or custom rules.

Options:

{
  minLength: 8,
  uppercase: true,
  number: true,
  specialChar: true
}

✅ Example with Custom Password Rules

isStrongPassword('abc123', {
  minLength: 6,
  uppercase: false,
  number: true,
  specialChar: false,
});
💡 Why one-linear-validator?
✅ Clean return values
✅ Simple integration
✅ Great for forms, APIs, and input sanitization
✅ Developer-friendly messages

🛠️ Contributing
Pull requests and suggestions are welcome!
Open an issue or fork and create a PR.

📄 License
Licensed under the Apache-2.0 License.

🌐 Links
📦 NPM Page

🛠 GitHub Repo

Built with ❤️ by Muhammad Ahsan Raza

---