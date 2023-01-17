/* Q: Define a word as a sequence of consecutive English letters. Find the longest word from the given string. */

// URL : https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma



function longestWord(text) {
    return text.match(/[a-zA-Z]+/g).reduce((a, v) => v.length > 1 && v.length > a.length ? v : a, '');
}



exports.longestWord = longestWord;
