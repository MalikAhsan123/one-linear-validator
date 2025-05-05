export const isEmail = (str) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  
  export const isURL = (str) =>
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i.test(str);
  
  export const isPhoneNumber = (str) =>
    /^\+?[0-9]{7,15}$/.test(str);
  
  export const isHexColor = (str) =>
    /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str);
  
  export const isDate = (str) =>
    /^\d{4}-\d{2}-\d{2}$/.test(str) && !isNaN(new Date(str).getTime());
  
  export const isStrongPassword = (str) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(str);
  