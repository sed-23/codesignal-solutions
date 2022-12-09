/* Q: A string is said to be beautiful if each letter in the string appears at most as many times as 
    the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs 
    no more times than b; etc. Note that letter a has no previous letter.

    Given a string, check whether it is beautiful. */

// URL : https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE


function isBeautifulString(inputString) {
    var inputString = inputString.split('').sort();
    var letters = [];
    for(let chr of inputString) if(letters[chr]) letters[chr]++; else letters[chr] = 1;
    var code = 'a'.charCodeAt(0); //97
    var idx = 0;
    var counter = letters.a;
    for(let chr in letters){
        if(chr.charCodeAt(0) != code+idx) return false; // from a to z
        if(counter < letters[chr]) return false;
        idx++;
        counter = letters[chr];
    }
    return true;
}


exports.isBeautifulString = isBeautifulString;
