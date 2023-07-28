/* Question : Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

                Define a string reflection as the result of applying the alphabet reflection to each of its characters.

                Reflect the given string. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/8nAgfjhDvKCpxwGWF


function reflectString(inputString) {
    return inputString.split("").map(x => String.fromCharCode(219-x.charCodeAt(0))).join("")
}