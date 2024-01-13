export const validateName = (name: string) => {
  return name.trim() !== "";
};

export const validateEmail = (email: string) => {
  const simpleEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return simpleEmailRegex.test(email);
};

export const validatePhone = (phone: string) => {
  const phoneRegex = /^([0|+[0-9]{1,5})?\s?(\d{3}\s?\d{3}\s?\d{3})$/;
  return phoneRegex.test(phone);
};

export const getValidator = (inputName: string) => {
  switch (inputName) {
    case "name":
      return validateName;
    case "email":
      return validateEmail;
    default:
      return validatePhone;
  }
};

export const validated = (name: string, email: string, phone: string) => {
  return validateName(name) && validateEmail(email) && validatePhone(phone);
};
