/* Question : You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. 
                What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

                Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/r9azLYp2BDZPyzaG2


function knsapscakLight(value1, weight1, value2, weight2, maxW) {
    return Math.max(
        maxW >= weight1 && value1,
        maxW >= weight2 && value2,
        maxW >= weight1 + weight2 && value1 + value2
    );
}
