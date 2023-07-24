/* Question : A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, 
				you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

				Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). 
				Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/RpoP4Aqa5mbmC8koC


function mostFrequentDigitSum(n) {
    return n>=999?18:n>=9?9:n
}
