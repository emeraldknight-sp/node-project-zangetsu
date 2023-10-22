import validator from "validator";

export function isValidEmail(email: string) {
  return validator.isEmail(email);
}
