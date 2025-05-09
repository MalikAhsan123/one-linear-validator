import assert from 'assert';
import { test } from 'node:test';

import {
  isEmail,
  isURL,
  isPhoneNumber,
  isHexColor,
  isDate,
  isStrongPassword,
} from './index.js';

test('isEmail - valid email', () => {
  assert.deepStrictEqual(isEmail('test@example.com'), { valid: true });
});

test('isEmail - invalid email (missing @)', () => {
  assert.deepStrictEqual(isEmail('testexample.com'), {
    valid: false,
    error: 'Invalid email format',
  });
});

test('isEmail - invalid type (not a string)', () => {
  assert.deepStrictEqual(isEmail(12345), {
    valid: false,
    error: 'Value must be a string',
  });
});

test('isURL - valid URL', () => {
  assert.deepStrictEqual(isURL('https://example.com'), { valid: true });
});

test('isURL - invalid type (not a string)', () => {
  assert.deepStrictEqual(isURL(12345), {
    valid: false,
    error: 'Value must be a string',
  });
});

test('isPhoneNumber - valid phone number', () => {
  assert.deepStrictEqual(isPhoneNumber('+1234567890'), { valid: true });
});

test('isPhoneNumber - invalid phone number (too short)', () => {
  assert.deepStrictEqual(isPhoneNumber('12345'), {
    valid: false,
    error: 'Invalid phone number format',
  });
});

test('isPhoneNumber - invalid type (not a string)', () => {
  assert.deepStrictEqual(isPhoneNumber(12345), {
    valid: false,
    error: 'Value must be a string',
  });
});

test('isHexColor - valid hex color (#FFFFFF)', () => {
  assert.deepStrictEqual(isHexColor('#FFFFFF'), { valid: true });
});

test('isHexColor - valid hex color (FFF)', () => {
  assert.deepStrictEqual(isHexColor('FFF'), { valid: true });
});

test('isHexColor - invalid hex color', () => {
  assert.deepStrictEqual(isHexColor('#ZZZZZZ'), {
    valid: false,
    error: 'Invalid hex color',
  });
});

test('isHexColor - invalid type (not a string)', () => {
  assert.deepStrictEqual(isHexColor(12345), {
    valid: false,
    error: 'Value must be a string',
  });
});

test('isDate - valid date', () => {
  assert.deepStrictEqual(isDate('2023-10-05'), { valid: true });
});

test('isDate - invalid date format', () => {
  assert.deepStrictEqual(isDate('05-10-2023'), {
    valid: false,
    error: 'Invalid date format (YYYY-MM-DD)',
  });
});

test('isDate - invalid calendar date', () => {
  assert.deepStrictEqual(isDate('2023-02-30'), {
    valid: false,
    error: 'Invalid calendar date',
  });
});

test('isDate - invalid type (not a string)', () => {
  assert.deepStrictEqual(isDate(12345), {
    valid: false,
    error: 'Value must be a string',
  });
});

test('isStrongPassword - valid password', () => {
  assert.deepStrictEqual(isStrongPassword('Strong@123'), { valid: true });
});

test('isStrongPassword - invalid password (too short)', () => {
  assert.deepStrictEqual(isStrongPassword('Short1!'), {
    valid: false,
    error: 'Password must be at least 8 characters',
  });
});

test('isStrongPassword - invalid password (missing uppercase)', () => {
  assert.deepStrictEqual(isStrongPassword('weakpassword1!'), {
    valid: false,
    error: 'Password must contain an uppercase letter',
  });
});

test('isStrongPassword - invalid password (missing number)', () => {
  assert.deepStrictEqual(isStrongPassword('WeakPass!'), {
    valid: false,
    error: 'Password must contain a number',
  });
});

test('isStrongPassword - invalid password (missing special character)', () => {
  assert.deepStrictEqual(isStrongPassword('WeakPass1'), {
    valid: false,
    error: 'Password must contain a special character',
  });
});

test('isStrongPassword - invalid type (not a string)', () => {
  assert.deepStrictEqual(isStrongPassword(12345), {
    valid: false,
    error: 'Value must be a string',
  });
});
