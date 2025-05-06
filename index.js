// validator.js

const ensureString = (str) => typeof str === 'string';

export const isEmail = (str) => {
  if (!ensureString(str)) {
    return { valid: false, error: 'Value must be a string' };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(str)) {
    return { valid: true };
  } else {
    return { valid: false, error: 'Invalid email format' };
  }
};

export const isURL = (str) => {
  if (!ensureString(str)) {
    return { valid: false, error: 'Value must be a string' };
  }

  const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i;
  if (urlRegex.test(str)) {
    return { valid: true };
  } else {
    return { valid: false, error: 'Invalid URL format' };
  }
};

export const isPhoneNumber = (str) => {
  if (!ensureString(str)) {
    return { valid: false, error: 'Value must be a string' };
  }

  const phoneRegex = /^\+?[1-9][0-9]{6,14}$/;
  if (phoneRegex.test(str)) {
    return { valid: true };
  } else {
    return { valid: false, error: 'Invalid phone number format' };
  }
};

export const isHexColor = (str) => {
  if (!ensureString(str)) {
    return { valid: false, error: 'Value must be a string' };
  }

  const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (hexColorRegex.test(str)) {
    return { valid: true };
  } else {
    return { valid: false, error: 'Invalid hex color' };
  }
};

export const isDate = (str) => {
  if (!ensureString(str)) {
    return { valid: false, error: 'Value must be a string' };
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(str)) {
    return { valid: false, error: 'Invalid date format (YYYY-MM-DD)' };
  }

  const [y, m, d] = str.split('-').map(Number);
  const date = new Date(str);
  const isValid =
    date instanceof Date &&
    !isNaN(date) &&
    date.getFullYear() === y &&
    date.getMonth() + 1 === m &&
    date.getDate() === d;

  return isValid
    ? { valid: true }
    : { valid: false, error: 'Invalid calendar date' };
};


export const isStrongPassword = (
  str,
  options = {
    minLength: 8,
    uppercase: true,
    number: true,
    specialChar: true,
  }
) => {
  if (!ensureString(str)) {
    return { valid: false, error: 'Value must be a string' };
  }

  const { minLength, uppercase, number, specialChar } = options;
  const tests = [
    { test: str.length >= minLength, error: `Password must be at least ${minLength} characters` },
    { test: !uppercase || /[A-Z]/.test(str), error: 'Password must contain an uppercase letter' },
    { test: !number || /\d/.test(str), error: 'Password must contain a number' },
    { test: !specialChar || /[@$!%*?&]/.test(str), error: 'Password must contain a special character' },
  ];

  for (const t of tests) {
    if (!t.test) {
      return { valid: false, error: t.error };
    }
  }

  return { valid: true };
};

// Optional default export for easy imports
export default {
  isEmail,
  isURL,
  isPhoneNumber,
  isHexColor,
  isDate,
  isStrongPassword,
};

  