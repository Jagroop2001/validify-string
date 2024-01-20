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
