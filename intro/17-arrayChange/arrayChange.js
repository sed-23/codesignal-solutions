/* Q: You are given an array of integers. On each move you are allowed to increase exactly
     one of its element by one. Find the minimal number of moves required to obtain a strictly
     increasing sequence from the input. */

// URL : https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

function arrayChange(inputArray) {
    moves = 0;
    for(i=0; i<inputArray.length; i++) {
        if(inputArray[i+1]<=inputArray[i]){
            moves += inputArray[i]+1-inputArray[i+1];
            inputArray[i+1] = inputArray[i]+1;
        }
    }

    return moves;
}

exports.arrayChange = arrayChange;
