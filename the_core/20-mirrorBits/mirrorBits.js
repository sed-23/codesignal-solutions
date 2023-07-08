/* Question : Reverse the order of the bits in a given integer. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/sgDWKCFQHHi5D3Szj


function mirrorBits(a) {
    return parseInt([...a.toString(2)].reverse().join(''), 2);
}
