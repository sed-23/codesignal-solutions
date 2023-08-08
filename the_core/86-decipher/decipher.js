/* Question : Consider the following ciphering algorithm:

                For each character replace it with its code.
                Concatenate all of the obtained numbers.
                Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

                Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/dB9drnfWzpiWznESA 


function decipher(cipher) {
    return String.fromCharCode(...cipher.match(/1..|../g))
}
