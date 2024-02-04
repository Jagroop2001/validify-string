export const isIdentical = (strOne: string, strTwo: string) => {
    strOne = strOne.trim();
    strTwo = strTwo.trim();
    if (strOne.toLowerCase() === strTwo.toLowerCase()) {
        return true;
    }
    return false;
};

export const isAlpha = (str: string) => {
    if (/^[a-zA-Z]+$/.test(str)) {
        return true;
    }
    return false;
};

export const isEmpty = (value: string) => {
    value = value.trim();
    return value.length == 0;
};

export const isAlphaNumeric = (str: string) => {
    if (/^[a-zA-Z0-9]+$/.test(str)) {
        return true;
    }
    return false;
};

export const isValidEmail = (email: string) => {
    // regular expression to match valid email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // match the pattern against the email string
    return pattern.test(email);
};

export const countWords = (str: string) => {
    // split the string into an array of words
    const words = str.split(" ");
    // return the length of the array
    return words.length;
};

export const isAvailable = (str: string, word: string) => {
    if (str.indexOf(word) !== -1) {
        return true;
    }
    return false;
};

export const countOccurrences = (str: string, word: string) => {
    // split the string into an array of words
    const words = str.split(" ");
    // initialize a counter variable
    let count = 0;
    // loop through the array of words
    for (let i = 0; i < words.length; i++) {
    // if the current word matches the target word, increment the counter
        if (words[i] === word) {
            count++;
        }
    }
    // return the count
    return count;
};

export const isPasswordStrong = (password: string) => {
    // define a regular expression that matches a strong password
    const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // test the password against the regular expression
    return strongRegex.test(password);
};

export const isURL = (str: string) => {
    // define a regular expression that matches a URL format
    const urlRegex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    // test the string against the regular expression
    return urlRegex.test(str);
};

export const isValidPhone=(num:string):boolean=>{
  //number should be of 10 digits.
  if (num[0]=="0") return false;
  // define a regular expression that matches a numbers
  const phoneregex = /\d/g;
  // test the number against the regular expression and then compare its length with original number length
  return num.length==num.match(phoneregex)?.length; 
};

export const isIP = (ip: string): boolean => {
  // define a regular expression that matches both IPv4 and IPv6 addresses
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})$/;

  // test the input against the regular expression
  return ipRegex.test(ip);
};

export const isUppercase = (str: string) => {
  return str === str.toUpperCase();
};

export const isLowercase = (str: string) => {
  return str === str.toLowerCase();
};

export const isPalindrome = (str: string) => {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
};

export const isValidDate = (dateString: string) => {
  // Assuming the date format is YYYY-MM-DD for simplicity
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

export const isValidCardNumber = (num:string):boolean => {
  //Check if the num contains only numeric value  
  //and is of between 13 to 19 digits
  const regex = /^[0-9]{13,19}$/;
  if (!regex.test(num)){
      return false;
  }
  // Appling luhn's algorithm 
  let sum = 0; 
  let multiplier = 1; 
  // Starting from last digit
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = 0;
    // Extract the next digit and multiply by 1 or 2 on alternative digits.
    digit = Number(num.charAt(i)) * multiplier;
    // If the result is in two digits add 1 to the checksum total
    if (digit > 9) {
      digit -= 9;
    }
    // Add the units digit to the sum
    sum += digit;
    // Switch the value of multiplier to alternate digit 
    if (multiplier == 1) {
      multiplier = 2;
    } else {
      multiplier = 1;
    }
  }
  // Checks divisible by 10 
  return (sum % 10) == 0;
}


//Check alphanumeric string

export const isAlphanumeric=(str: string): boolean=> {
  const alphanumericRegex: RegExp = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(str);
}

//Check Ishash

export const isHash=(str: string): boolean=> {
  return /^[a-fA-F0-9]+$/.test(str) && (str.length === 32 || str.length === 40 || str.length === 64);
}

//Check hexadecimal

export const isHexadecimal=(str: string): boolean=> {
  const hexadecimalRegex: RegExp = /^[0-9a-fA-F]+$/;
  return hexadecimalRegex.test(str);
}

//Check ASCII Value
export const isASCII = (str: string, extended?: string[]): boolean => {
  return (extended ? /^[\x00-\xFF]+$/ : /^[\x00-\x7F]+$/).test(str);
};


// Check Hexcolour
export const isHexColor = (str: string): boolean => {
  const hexColorRegex: RegExp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexColorRegex.test(str);
};

// Check JSON
export const isJSON = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

// Check JWT
export const isJWT = (str: string): boolean => {
  
  const jwtParts = str.split('.');
  return jwtParts.length === 3;
};
//trim functions
export const trimLeft = (str: string, chars: string): string => {
  const regex = new RegExp(`^[${chars}]+`);
  return str.replace(regex, '');
};

export const trimRight = (str: string, chars: string): string => {
  const regex = new RegExp(`[${chars}]+$`);
  return str.replace(regex, '');
};

export const trimBoth = (str: string, chars: string): string => {
  const leftRegex = new RegExp(`^[${chars}]+`);
  const rightRegex = new RegExp(`[${chars}]+$`);
  
  let trimmedStr = str.replace(leftRegex, '');
  trimmedStr = trimmedStr.replace(rightRegex, '');
  
  return trimmedStr;
};








