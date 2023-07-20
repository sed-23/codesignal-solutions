/* Question : Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/book-market/G9wj2j6zaWwFWsise


function isCaseInsensitivePallindrome(inputString) {
    r = inputString.split('').reverse().join('');
    return inputString.toLowerCase() == r.toLowerCase();
}
