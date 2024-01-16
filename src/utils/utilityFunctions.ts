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
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // match the pattern against the email string
  return pattern.test(email);
};

export const countWords = (str: string) => {
  // split the string into an array of words
  var words = str.split(" ");
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
  var words = str.split(" ");
  // initialize a counter variable
  var count = 0;
  // loop through the array of words
  for (var i = 0; i < words.length; i++) {
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
  var strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // test the password against the regular expression
  return strongRegex.test(password);
};

export const isURL = (str: string) => {
  // define a regular expression that matches a URL format
  var urlRegex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
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

export const isValidCreditCard = (num:string):boolean =>{
  //Luhn's algorithm
  if (num.length!=16) return false; //valid credit card is of 16 digits
  let sum = 0;
  for (let index = num.length; index >=1 ; index--) {
    let digit = parseInt(num[index-1]);
    if(index%2==0){
      //add digit to sum
      sum += digit;
    }else{
      //doubling the digit if coming on odd place from right. 
      digit *= 2;
      if(digit>9){
        //subtract 9 if digit after doubling is greater than 9
        digit -= 9;
      }
      //add digit to sum
      sum += digit;
    }    
  }
  // if sum is a multiple of 10 than it is a valid number
  return sum%10==0?true:false;
}
