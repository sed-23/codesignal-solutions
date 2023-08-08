/* Question : Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. 
                Store this value at position i in the answer. If no such value can be found, store -1 instead. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/MQg7s3dKrP4caN42A


function arrayPreviousLess(items) {
    return items.map((a, i) => {
        for (let j = i - 1; j >= 0; j--) {
            if (items[j] < a) { return items[j]; }
        }
        return -1;
    });
}