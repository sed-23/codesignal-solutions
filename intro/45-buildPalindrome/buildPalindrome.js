/* Q: Given a string, find the shortest possible string which can be achieved by adding 
    characters to the end of initial string to make it a palindrome. */

// URL : https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx


function buildPalindrome(address) {
    return address.split('@').pop()
}

exports.buildPalindrome = buildPalindrome;


