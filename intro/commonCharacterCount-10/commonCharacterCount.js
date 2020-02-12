/* Q: Given two strings, find the number of common characters between them.
      Example
      For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
      Strings have 3 common characters - 2 "a"s and 1 "c". */

// URL : https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function commonCharacterCount(s1, s2) {
    let arr1 = s1.split(''), arr2 = s2.split('');
    commonCharCount = 0;
    if (arr1.length > arr2.length) { 
      arr2.forEach(element => 
        {if (arr1.indexOf(element) > -1 && arr1.splice(arr1.indexOf(element), 1)) commonCharCount += 1 })
    } else {
     arr1.forEach(element => {if (arr2.indexOf(element) > -1 && arr2.splice(arr2.indexOf(element), 1)) commonCharCount += 1})
    }
    return commonCharCount;
}


exports.commonCharacterCount = commonCharacterCount;
