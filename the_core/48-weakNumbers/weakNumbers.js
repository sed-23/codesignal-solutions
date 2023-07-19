/* Question : We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

                It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

                what is the weakness of the weakest numbers in the range [1, n]?
                how many numbers in the range [1, n] have this weakness?
                Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/oL7YuygJKtMSNLeJn


function squareDigitsSequence(n) {
    d = [0]
    for(i=1; i<=n; i++) {
        d[i]=0
        for(j=1; j<=i/j; j++) {
            if(i%j === 0)
                d[i]+= j==i/j ? 1 : 2
        }
    }
    
    c = d.map(x => 0)
    w = []
    
    m = 0
    x = d.map(x => 0)
    
    
    for(i=1; i<=n; i++) {
        
        c[d[i]]++
        w[i]=0
        
        for(j=d[i]+1; j<c.length; j++) {
            w[i] += +c[j]
        }
        
        if(w[i] > m) {
            m = w[i]
        }
        
        x[w[i]]++
    }
    
    return [m, x[m]]
}
