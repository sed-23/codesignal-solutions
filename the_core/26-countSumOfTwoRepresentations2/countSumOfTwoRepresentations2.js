/* Question : Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u


function countSumOfTwoRepresentations2(n, l, r) {
    return Math.max(Math.min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
}
