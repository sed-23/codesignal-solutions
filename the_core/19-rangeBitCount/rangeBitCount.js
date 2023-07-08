/* Question : You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. 
              You need to count the number of 1s in the binary representations of all the numbers in the array. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/eC2Zxu5H5SnuKxvPT


function rangeBitCount(a, b) {
    var packed = "";
    while(a <= b){
        packed += a.toString(2);
        a++;
    }
    return packed.split('1').length-1;
}
