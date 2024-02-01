import {
  isEmpty,
  isIdentical,
  isAlpha,
  isAlphaNumeric,
  isValidEmail,
  countWords,
  isAvailable,
  countOccurrences,
  isPasswordStrong,
  isURL,
  isIP,
  isUppercase,
  isLowercase,
  isPalindrome,
  isValidDate,
  isValidPhone,
  isValidCardNumber,
  isAlphanumeric,
  isHash,
  isHexadecimal,
  isASCII,
  isHexColor,
  isJSON,
  isJWT,
  trimRight,
  trimLeft,
  trimBoth

} from "./utils/utilityFunctions";


import { isBase32, isBase64, isEthereumAddress ,isStringWithoutSpecialCharacters} from "./utils/validateFunctions";


const validator = {
  isEmpty,
  isIdentical,
  isAlpha,
  isAlphaNumeric,
  isValidEmail,
  countWords,
  isAvailable,
  countOccurrences,
  isPasswordStrong,
  isURL,
  isIP,
  isUppercase,
  isLowercase,
  isPalindrome,
  isValidDate,
  isValidPhone,
  isValidCardNumber,
  isAlphanumeric,
  isHash,
  isHexadecimal,
  isASCII,
  isHexColor,
  isJSON,
  isJWT,
  isBase32,
  isBase64,
  isEthereumAddress,
  trimRight,
  trimLeft,
  trimBoth,
  isStringWithoutSpecialCharacters
};

export default validator;
