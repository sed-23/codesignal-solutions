/* Question : Define crossover operation over two equal-length strings A and B as follows:

                the result of that operation is a string of the same length as the input strings
                result[i] is either A[i] or B[i], chosen at random
                Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

                Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair). */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/6QDtjNr3WoL5W4Kvo


function stringsCrossover(a, s) {
    let r = 0
    for (let i = 0; i < a.length; i++)
       n: for (let j = i + 1; j < a.length; j++) {
          for (let k = 0; k < s.length; k++)
                if (s[k] !== a[i][k] && s[k] !== a[j][k]) continue n
          r++
       }
    
    return r
 }