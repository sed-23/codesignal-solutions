/* Question : Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

                Given the first element a0, find the length of the sequence. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/MvX84CA5HN6GKqv7R


function squareDigitsSequence(a0) {
    let used = new Set();
    
    while (!used.has(a0)) {
        used.add(a0);
        a0 = a0.toString()
            .split('')
            .map(x => parseInt(x) ** 2)
            .reduce((a, b) => a + b)
    }
    
    return used.size + 1;
}
