/* Question : Given an integer n, find the minimal k such that

                k = m! (where m! = 1 * 2 * ... * m) for some integer m;
                k >= n.
                In other words, find the smallest factorial which is not less than n. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy


function leastFactorial(n) {
    var k = 1;
    for (var i = 2; k < n; i++)
        k *= i;
    return k;
}
