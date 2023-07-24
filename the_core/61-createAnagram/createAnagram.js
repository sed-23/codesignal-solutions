/* Question : You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get 
				some anagram of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/BsShkFDfbkWxozmMN


function createAnagram(s, t) {
    for(let x of s){
        t = t.replace(x,"");    
    }
    return t.length;
}