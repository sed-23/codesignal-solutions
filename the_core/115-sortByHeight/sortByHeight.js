/* Question : Some people are standing in a row in a park. There are trees between them which cannot be moved. 
                Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall! */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/D6qmdBL2NYz49XHwM


function polygonPerimeter(a) {
    var sorted = a.filter(h => h != -1).sort((a,b) => a-b)
    
    var j = 0
    
    return a.map((h, i) =>  h != -1 ? sorted[j++] : h)
}
