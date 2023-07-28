/* Question : Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, 
                he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

                The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/ngQTG9kra7GE9pnnK


function newNumeralSystem(number) {
    n = number.charCodeAt(0)
    r = []
    for(i=65; i<=n-i+65; i++) {
        r.push(String.fromCharCode(i) + " + " + String.fromCharCode(n-i+65))
    }
    return r
}
