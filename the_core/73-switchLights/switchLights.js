/* Question : N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit 
              then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line? */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/x3ix7CY93z2bwKDtG


function switchLights(a) {
    let num = a.reduce((a,b)=> a+b,0)
    return a.map(elm => {
        if(elm === 1) num -=1
        return num%2
    })
}
