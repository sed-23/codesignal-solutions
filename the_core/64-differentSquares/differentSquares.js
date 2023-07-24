/* Question : A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

                A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

                Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/fQpfgxiY6aGiGHLtv


function differentSquares(matrix) {
    s = new Set();
    
    for(i=0; i<matrix.length-1; i++) {
        for(j=0; j<matrix[i].length-1; j++) {
            s.add(""+matrix[i][j] + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1])
        }
    }
    
    return s.size

}
