/* Question : Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
              Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

              Return the value of 2position_of_the_found_bit. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/9nSj6DgqLDsBePJha

function secondRightMostZeroBit(n) {
    return Math.pow(2,n.toString(2).split('').reverse().join("").split("0", 2).join("0").length);
}
