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
  isJWT
} from "./utils/utilityFunctions";


import { isBase32, isBase64, isEthereumAddress ,isStringWithoutSpecialCharacters} from "./utils/validateFunctions";

import { isStringAContainsB, isStringAMatchesB } from "./utils/stringCompareMatch";

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
  isStringAContainsB,
  isStringAMatchesB,
  isStringWithoutSpecialCharacters

};

export default validator;
