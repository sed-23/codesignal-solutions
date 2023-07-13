/* Question : Define an integer's roundness as the number of trailing zeroes in it.

              Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/loop-tunnel/KLbRMcWhaZi3dvYH5

function increaseNumberRoundness(n) {
    return /0[1-9]/.test(n);
}
