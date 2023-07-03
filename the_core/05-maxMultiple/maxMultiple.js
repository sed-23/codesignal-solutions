/* Question : Given a divisor and a bound, find the largest integer N such that:
                N is divisible by divisor.
                N is less than or equal to bound.
                N is greater than 0.
                It is guaranteed that such a number exists. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/intro-gates/HEsmEacHr2s9wahjr


function maxMultiple(divisor, bound) {
    return bound - (bound % divisor);
}

exports.maxMultiple = maxMultiple;
