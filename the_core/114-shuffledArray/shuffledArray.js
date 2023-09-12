/* Question : A noob programmer was given two simple tasks: sum and sort the elements of the given array
                a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some 
                random position of the original array which was a bad idea. Now he needs to cope with the second task, 
                sorting the original array a, and it's giving him trouble since he modified it.

                Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/s4BEFMcpLdGbjX9KX


function shuffledArray(shuffled) {
    const sumValue = shuffled.reduce((a,b) => a+b)/2;
    const index = shuffled.indexOf(sumValue);
    const newArray = shuffled.slice()
    newArray.splice(index,1)
    return newArray.sort((a,b) => a - b)
}