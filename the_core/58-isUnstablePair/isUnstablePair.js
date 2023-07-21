/* Question : Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.
                Call two filenames an unstable pair if their ordering depends on the case.
                To compare two filenames a and b, find the first position i at which a[i] ≠ b[i]. If a[i] < b[i], then a < b. Otherwise a > b. If such position doesn't exist, the shorter string goes first.
                Given two filenames, check whether they form an unstable pair. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/book-market/Ky2mjgmxnWLi6KNPp


function isUnstablePair(filename1, filename2) {
    return (filename1 < filename2) != (filename1.toLowerCase() < filename2.toLowerCase());
}
