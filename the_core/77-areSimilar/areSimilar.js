/* Question : Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
              Given two arrays a and b, check whether they are similar. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/xYXfzQmnhBvEKJwXP


function areSimilar(a, b) {
    t=0
    i=0
    for(x in a)
        if(a[x]^b[x])
            ++i,
            t^=a[x]^b[x]
        
    
    if(i==2||i==0)return !t
    return false
}