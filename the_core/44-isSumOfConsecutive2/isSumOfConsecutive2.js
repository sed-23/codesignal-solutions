/* Question : Find the number of ways to express n as sum of some (at least two) consecutive positive integers. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/EQSjA5PRfyHueeNkj


function isSumOfConsecutive2(n) {
    c = 0
    for (i=1; i<n; i++) {
        s = i
        for (j=i+1; j<n; j++) {
            s += j
            if (s==n) {c++}
            else if (s>n) {break}}} 
    return c
}
