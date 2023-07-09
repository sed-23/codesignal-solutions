/* Question : You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

              Return the value of 2position_of_the_found_pair (0-based). */ 

// URL : https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/6SLJChm9N3fEgr2R7


function equalPairOfBits(n, m) {
    return ~(n ^ m) & -(~(n ^ m));
}
