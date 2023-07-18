/* Question : We define the middle of the array arr as follows:

                if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
                if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
                Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-forest-edge/APD5T5CybxTtfkdjL


function replaceMiddle(arr) {
    l = arr.length - 1;
    if (l%2) {
        arr[Math.floor(l/2)] += arr[Math.ceil(l/2)];
        arr.splice(Math.ceil(l/2),1);
    }
    return arr;
}
