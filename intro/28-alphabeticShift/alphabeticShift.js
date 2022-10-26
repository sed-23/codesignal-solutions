/* Q: Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a). */

// URL : https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi

function alphabeticShift(inputString) {
    return inputString.split('').map(v => {return v=='z'?'a' : String.fromCharCode(v.charCodeAt(0)+1);}).join('')
}


exports.alphabeticShift = alphabeticShift;
