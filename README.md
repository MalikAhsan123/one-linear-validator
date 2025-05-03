one-linear-validator
One-Linear Validator is a minimalist, dependency-free JavaScript validation library that offers concise, one-line functions to validate common input formats such as emails, phone numbers, URLs, hex colors, and dates. Built for modern web applications, it works seamlessly in both Node.js and browser environments.

✅ Features
📦 Zero dependencies – Lightweight and fast

✨ One-line functions – Write cleaner, more readable code

🧠 Named exports – Import only what you need

🌐 ESM support – Fully compatible with modern JavaScript tooling

⚙️ Plug-and-play – Ideal for quick inline validations

📦 Installation
bash
Copy
Edit
npm install one-linear-validator
🚀 Usage
✅ ES Module Example (Recommended)
js
Copy
Edit
import { isEmail, isPhoneNumber, isURL, isHexColor, isDate } from "one-linear-validator";

console.log(isEmail('user@example.com'));          // true
console.log(isPhoneNumber('+1234567890'));         // true
console.log(isURL('https://example.com'));         // true
console.log(isHexColor('#ff5733'));                // true
console.log(isDate('2025-05-04'));                 // true
⚠️ This package uses ESM (ECMAScript Modules). Use import statements instead of require().

🧪 Built-in Validators
Function	Description	Example
isEmail(str)	Validates email addresses	'user@example.com' → true
isPhoneNumber(str)	Validates phone numbers (intl format)	'+1234567890' → true
isURL(str)	Validates URLs (http/https)	'https://example.com' → true
isHexColor(str)	Validates hex color codes	'#FF5733' → true
isDate(str)	Validates dates in YYYY-MM-DD	'2025-05-04' → true

📌 Use Cases
🔐 User registration and authentication forms

📱 Mobile and web form input validation

🧾 API input sanitization

✍️ CMS and content editing workflows

🖥️ Command-line tools and CLI validation

📄 License
MIT – Free for both personal and commercial use.
