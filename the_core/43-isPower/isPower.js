/* Question : Determine if the given number is a power of some non-negative integer. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/yBFfNv5fTqhcacZ7w


function isPower(n) {
    if (n == 1) return true;
    for (i = 2; i <= Math.sqrt(n); i++) {
        for (j = 2; Math.pow(i, j) < n; j++);
        if (Math.pow(i, j) == n) return true;
    }
    return false;
}
