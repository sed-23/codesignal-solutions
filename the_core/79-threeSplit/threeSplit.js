/* Question : You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer 
                and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

                It is guaranteed that the sum of all elements in the array is divisible by 3. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/QmK8kHTyKqh8xDoZk


function threeSplit(a) {
    l = [...Array(a.length).keys()].map(i=>a.slice(0,i+1).reduce((x,y)=>x+y))
    b = Math.floor(l.slice(-1)[0]/3)
    r = [...Array(a.length-2).keys()].filter(i=>l[i]==b)
    return r.map(i=>l.slice(i+1,-1).filter(j=>j==2*b).length).reduce((x,y)=>x+y,0)
}
