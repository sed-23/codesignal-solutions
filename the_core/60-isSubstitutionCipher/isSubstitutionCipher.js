/* Question : A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

                A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

                Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/rNrF4v5etMdFNKD3s


function isSubstitutionCipher(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
		let firstInx1 = string1.indexOf(string1[i]);
		let firstInx2 = string2.indexOf(string2[i]);
		if ((string2[firstInx1] !== string2[i]) || (string1[firstInx2] !== string1[i])) return false;
	}
	return true;
}
