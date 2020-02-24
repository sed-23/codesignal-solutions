/* Q: Write a function that reverses characters in (possibly nested) parentheses in the input string.
      Input strings will always be well-formed with matching ()s. */

// URL : https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function reverseInParentheses(inputString) {
    if (inputString.match(/\([a-z]*\)/)) {
        return reverseInParentheses(inputString.replace(/\([a-z]*\)/, 
            Array.from(inputString.match(/\([a-z]*\)/)[0].replace(/\(|\)/g,'')).reverse().join('')));
    }
    else return inputString;
}

exports.reverseInParentheses = reverseInParentheses;
