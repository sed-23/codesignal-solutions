/* Question : An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). 
                For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each 
                other (i.e. compare the first token of the first string with the first token of the second string, etc).

                Here is how tokens are compared:

                If a letter is compared with another letter, the usual alphabetical order applies.
                A number is always considered less than a letter.
                When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
                If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

                If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. 
                If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.

                Here are some examples of comparing strings using alphanumeric ordering.

                "a" < "a1" < "ab"
                "ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
                "x11y012" < "x011y13"
                Your task is to return true if s1 is strictly less than s2, and false otherwise. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/bBgu7NEfk2GoQuNzf


function alphaneumericLess(s1, s2) {
    x1 = s1.replace(/\d+/g, a => a.padStart(20, 0))
    x2 = s2.replace(/\d+/g, a => a.padStart(20, 0))
    console.log(x1, x2)
    // check which is larger
    if (x1 < x2) return true
    if (x1 > x2) return false
    // if they are equal, fill strings with Z's and check again.
    return s1.padEnd(20, "Z") < s2.padEnd(20, "Z")
}