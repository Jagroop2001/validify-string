# validify-string

Ensure accurate and secure input with our reliable string validation library.

## Install

```
npm i validify-string
```

## Example

```js
import validator from "validify-string";

validator.isPasswordStrong("StrongPass12@#");
validator.isAlpha("Jagroop");
```

## Details

```
validator.isEmpty(str)
This function will check if string is empty or not.
```

```
validator.isIdentical(strOne , strTwo)
This function will check if string One is equal to string Two.
```

```
validator.isAlpha(str)
This function will check if string contain Alphabets only.
```

```
validator.isAlphaNumeric(str)
This function will check if string is AlphaNumeric string only.
```

```
validator.isValidEmail(email)
This function will check if given Input is valid email or not.
```

```
validator.countWords(str)
This function will return number of words in a string.
```

```
validator.isAvailable(str, word)
This function will check if given word is available in the string or not.
```

```
validator.countOccurrences(str, word)
This function will count the occurrence of word in the string.
```

```
validator.isPasswordStrong(password)
This function will check if given Input is valid password or not.
```

```
validator.isURL(str)
This function will check if given Input is valid URL or not.
```

```
validator.isUpperCase(str)
Check if the entire string is in uppercase.
```

```
validator.isLowerCase(str)
Check if the entire string is in lowercase.
```

```
validator.isDate(str)
Check if the string represents a valid date.
```

```
validator.isPalindrome(str)
Check if the string is a palindrome.
```
```
validator.isValidPhone(phoneNumber)
This function will check if given phoneNumber (of type string) is valid Phone number or not.
```

```
validator.isValidCardNumber(cardNumber)
This function will check if given Card number (of type string) is valid Card Number or not by using Luhn's Algorithm.
```

```
validator.isIP(IP Address)
This function will check if string contains a Valid IP address or not.
```


```
validator.isAlphanumeric(str)
This function will check if string is alphanumeric or not.
```


```
validator.isHash(str)
This function will check if string is a hash or not.
```


```
validator.isHexadecimal(str)
This function will check if string is hexadecimal or not.
```