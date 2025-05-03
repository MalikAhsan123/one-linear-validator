Description:

One-Linear Validator is a lightweight, dependency-free JavaScript library that provides concise, one-line functions for validating common input formats such as emails, phone numbers, URLs, hex colors, and dates. Designed for modern web development, it supports both Node.js and browser environments with full ECMAScript Module (ESM) compatibility.

With a focus on minimalism and performance, One-Linear Validator enables developers to write clean, readable validation logic using named exports. Whether you're building forms, APIs, or command-line tools, this plug-and-play library is ideal for quick and reliable inline validations.

Features:

✅ Zero dependencies – minimal and fast

🔁 One-line validation functions for common input types

📦 Named exports – import only what you need

🌐 Works in both browser and Node.js environments

🔧 ESM support for modern JavaScript tooling

⚡ Simple, readable syntax for inline usage

Installation:

bash
Copy
Edit
npm install one-linear-validator
Example Usage (ESM):

js
Copy
Edit
import { isEmail, isPhoneNumber, isURL, isHexColor, isDate } from 'one-linear-validator';

console.log(isEmail('user@example.com'));       // true
console.log(isPhoneNumber('+1234567890'));      // true
console.log(isURL('https://example.com'));      // true
console.log(isHexColor('#ff5733'));             // true
console.log(isDate('2025-05-04'));              // true
Use Cases:

User input validation in web and mobile forms

API request validation

CMS and content editing workflows

Command-line argument validation

Lightweight projects needing fast, inline validation

License:
MIT – Free for personal and commercial use