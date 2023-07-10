/* Question : You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, 
                it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make? */ 

// URL : https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LbuWRHnMoJH9SAo4o


function leastFactorial(a, b, n) {
    return n != 0 ? a * b + solution(++a, ++b, --n) : 0;
}
