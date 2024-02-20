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

const user = {
    "Username": "YS",
    "Role": "Admin",
    "Email": "ys@gmail.com"
}
const jwt = validator.generateJWT(user, secret);
console.log(validator.decodeJWT(jwt).payload);
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

```

validator.isBase32(str)
This function will check if string isBase32 or not.
```

```
validator.isBase64(str)
This function will check if string isBase64 or not.
```

```
validator.isEthereumAddress(str)
This function will check if string isEthereumAddress or not.
```

```
validator.isASCII(str)
This function will check if each character of string is in ASCII Value or not.
```

```
validator.isStringAContainsB(StringA, StringB)
This function checks if the string A contains the string B
```

```
validator.isStringAMatchesB(StringA, StringB)
This function checks if the string A matches the string B
```
```
validator.isHexColor
utility function is designed to check whether a given string represents a valid hexadecimal color code
```

```
validator.isJSON
utility function is used to check whether a given string is a valid JSON (JavaScript Object Notation) string
```
```
validator.isJWT
utility function is used to check whether a given string is a valid JSON Web Token (JWT)
```

```
validator.isStringWithoutSpecialCharacters(str)
This function will check the string is Without Special Characters or not. 
```

```
validator.startsWithPrefix(str)
This function will Check if a string starts with a specific prefix or not. 
```

```
validator.endsWithSuffix(str)
This function will Check if a string end with a specific suffix or not. 
```
```
validator.getAlphaNumString(str)
This function returns a random alphanumeric string of length n.
```
```
validator.getLeftSubstring(str, int)
This function returns the substring denoted by n positive left-most characters.
```
```
validator.encrypt(str)
This function will encrypt the string to a base64 format.
```
```
validator.decrypt(str)
This function will decrypt the base64 string to the original string.
```

```
validator.generateJWT(payload, secret, expiresInSec)
This function will generate a JSON Web Token (JWT) with the given payload and expiration time using the HMAC SHA256 algorithm.
```

```
validator.decodeJWT(token)
This function will decode the given JSON Web Token (JWT) and return the payload.
```

```
validator.addUnderscore(str)
This function replace the space to underscore from the string.
```
```
validator.removeSpace(str)
This function remove the space from the string .
```
```
validator.removeUnderscore(str)
This function remove the underscore from the string . 
```
```
validator.removeNumber(str)
This function remove the number from string.
```
```
validator.addFullstop(str)
This function replaces space in string with fullstop.
```
```
validator.generateRandomString(length)
This function generates the random string of given length.
```


# Contributing Guidelines


Please go through the guidelines below to make your first contribution:


## Issues
- Always create an issue before creating a pull request.
- Always ensure that there is no other open issue similar to the one that you want to create.
- Always start working on an issue after getting assigned to it.

<hr>

## Creating a Pull Request

- Fork the repository

- Clone the forked repository to your local machine:

    ```sh
    git clone https://github.com/<github-username>/validify-string.git
    ```
    
- Navigate to the project directory:

    ```sh
    cd validify-string
    ```

- Install all dependencies:

    ```sh
    npm install
    ```

- Create and switch to a new branch:

    ```sh
    git switch -c <branch>
    ```

- Launch the application:

    ```sh
    npm run build
    ```

- Make changes to the project and stage them:

    ```sh
    git add .
    ```

- Commit the changes:

    ```sh
    git commit -m "<message>"
    ```

- Push the changes to the correponding remote branch:

    ```sh
    git push origin <branch>
    ```

- Create a pull request!

<hr>

