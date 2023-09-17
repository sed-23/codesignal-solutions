/* Question : Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/2SFFWqkhkqC7mMBse


function digitDifferenceSort(a) {
    const arr = a.map((elm, i) => ({i:i, v:Math.max(...elm+'') - Math.min(...elm+'')}))
  
    return arr.sort((x,y)=> x.v - y.v || y.i - x.i).map(elm => a[elm.i])
}
