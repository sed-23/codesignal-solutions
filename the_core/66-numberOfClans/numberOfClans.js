/* Question : Let's call two integers A and B friends if each integer from the array divisors is either a divisor 
				of both A and B or neither A nor B. If two integers are friends, they are said to be in the same 
				clan. How many clans are the integers from 1 to k, inclusive, broken into? */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/BLbGNY3kEcvKjBCFC


function numberOfClans(divisors) {
    let mySet = new Set();
    for(let i=1; i<=k; i+=1) {
        mySet.add((divisors.map(elm=> (i%elm) === 0 ? 0 : 1)).toString())
    }
    return mySet.size
}
