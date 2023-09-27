/* Question : You are given a string consisting of words separated by whitespace characters, 
                where the words consist only of English letters. Your task is to swap pairs of 
                consecutive words and return the result. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/AMx2WqCoq2PEcJTEp


function swapAdjacentWords(s) {
    return s.replace(/(\w+) (\w+)/g, "$2 $1");
  }