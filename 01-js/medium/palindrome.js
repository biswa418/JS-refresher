/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const allSmall = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const length = allSmall.length;

  for (let i = 0; i < length / 2; i++) {
    if (allSmall[i] !== allSmall[length - i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
