/* Question : We define the middle of the array arr as follows:

            if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
            if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
            An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-forest-edge/3LmZafR9wMCWpdgra


function isSmooth(arr) {
    l = arr.length-1;
    return arr[0]==arr[l] && arr[0] == arr[Math.floor(l/2)] + (l%2?arr[Math.ceil(l/2)]:0);
}
