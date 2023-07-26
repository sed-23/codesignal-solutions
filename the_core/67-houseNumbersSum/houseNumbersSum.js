/* Question : A boy is walking a long way from school to his home. To make the walk more fun he decides to add up 
				all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses 
				have numbers written on them, and on top of that the boy is regularly taking turns to change streets, 
				so the numbers don't appear to him in any particular order.

				At some point during the walk the boy encounters a house with number 0 written on it, which surprises 
				him so much that he stops adding numbers to his total right after seeing that house.

				For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there 
				will always be at least one 0 house on the path. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/3QMXNwGfvLMoQwed7


function houseNumbersSum(inputArray) {
    return inputArray.slice(0,inputArray.indexOf(0)).reduce((a,b) => a+b,0)
}
