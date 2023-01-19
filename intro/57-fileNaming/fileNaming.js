/* Q: You are given an array of strings names representing filenames. The array is sorted in order of file creation, such that names[i] represents the name of a 
        file created before names[i+1] and after names[i-1] (assume 0-based indexing). Because all files must have unique names, files created later with the same 
        name as a file created earlier should have an additional (k) suffix in their names, where k is the smallest positive integer (starting from 1) that does not appear in previous file names.

        Your task is to iterate through all elements of names (from left to right) and update all filenames based on the above. Return an array of proper filenames. */

// URL : https://app.codesignal.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC

function fileNaming(names) {
    let ni = '', counter = 1;
    for (var i = 0; i <= names.length; i++) {
        n = names.slice(0, i);
        ni = names[i];
        while (n.includes(names[i])) {
            names[i] = ni + '(' + counter.toString() + ')';
            counter++;
        }
        counter = 1;
    }
    return names;
}




exports.fileNaming = fileNaming;
