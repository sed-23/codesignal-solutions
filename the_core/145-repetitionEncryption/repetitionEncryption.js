/* Question : Jane just got a letter from her friend and realized that something's wrong: some words in the letter are written twice in a row. 
              The thing is, she and her friend devised an ingenious cypher, the key to which is the number of pairs of repeated words in the encoded text. 
              The cases of the words don't matter.

              Formally, a word is a substring of letter consisting of English letters, such that characters to the left of the leftmost letter and to the 
              right of the rightmost letter are not letters.

              For obvious reasons, Jane can't tell you how the encryption works, but she needs your help with calculating the number of pairs of consecutive equal words. 
              Write a function that, given a letter, returns this number. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/jyaMHzCG4SGoEjASE


function repetitionEncryption(letter) {
  var pattern = /([A-Z]+)[^A-Z]+\1\b/ig;
  var matches = letter.match(pattern);
  if (matches) {
    return matches.length;
  }
  else {
    return 0;
  }
}