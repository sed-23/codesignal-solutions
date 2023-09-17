/* Question : You are given an array of integers a. A range sum query is defined by a pair of non-negative integers l and r (l <= r). 
                The output to a range sum query on the given array a is the sum of all the elements of a that have indices from l to r, inclusive.

                You have the array a and a list of range sum queries q. Find an algorithm that can rearrange the array a in such a way that the 
                total sum of all of the query outputs is maximized, and return this total sum. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/64koZSDqndwYxFZj6


function maximumSum(a, q) {
    a.sort((b, c) => b - c);    
    let counts = new Array(a.length).fill(0);
        
    for (let tuple of q) {
        for (let i = tuple[0]; i <= tuple[1]; i++) {
            counts[i]++;
        }
    }
    
    counts.sort((b, c) => b - c);
    
    return a.reduce((sum, x, i) => {
        return sum + x * counts[i]
    }, 0);
}
