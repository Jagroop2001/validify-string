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


import { isBase32, isBase64, isEthereumAddress ,isStringWithoutSpecialCharacters,startsWithPrefix} from "./utils/validateFunctions";

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
  isStringWithoutSpecialCharacters,
  startsWithPrefix,
  trimRight,
  trimLeft,
  trimBoth,
  isStringAContainsB,
  isStringAMatchesB,
};

export default validator;
