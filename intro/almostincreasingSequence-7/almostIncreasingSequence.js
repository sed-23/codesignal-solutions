/* Q: Given a sequence of integers as an array, determine whether it is possible
     to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
      Sequence containing only one element is also considered to be strictly increasing. */

// URL : https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
    nonSyncElement = 0;
    for (var a=0; a<sequence.length; a++) {
        if (sequence[a] <= sequence[a-1]) nonSyncElement++;
        if (sequence[a] <= sequence[a-2] && sequence[a+1] <= sequence[a-1]) nonSyncElement++;
    }
    return nonSyncElement<=1;
}

exports.almostIncreasingSequence = almostIncreasingSequence;
