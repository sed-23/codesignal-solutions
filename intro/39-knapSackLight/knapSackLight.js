
/* Q: You found two items in a treasure chest! The first item weighs weight1 and is worth value1, 
    and the second item weighs weight2 and is worth value2. What is the total maximum value of the 
    items you can take with you, assuming that your max weight capacity is maxW and you can't come 
    back for the items later?

    Note that there are only two items and you can't bring more than one item of each type, 
    i.e. you can't take two first items or two second items. */

// URL : https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2

function knapSackLight(value1, weight1, value2, weight2, maxW) {    
    if (weight1+weight2 <= maxW) { 
        return value1+value2;
    } else if (maxW >= weight2 && maxW >= weight1 ) {
        return value1 > value2 ? value1 : value2; 
    }
    else if (maxW < weight2 && maxW < weight1 ) {
        return 0
    }
    else { 
        return maxW >= weight2 ? value2 : value1;
    }
}


exports.knapSackLight = knapSackLight;