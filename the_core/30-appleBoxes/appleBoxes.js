/* Question : You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

            The smallest box is size 1, the next one is size 2,..., all the way up to size k.
            Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
            Your task is to calculate the difference between the number of red apples and the number of yellow apples. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf


function leastFactorial(k) {
    return k * (k + 1) / (k % 2 ? -2 : 2);
}
