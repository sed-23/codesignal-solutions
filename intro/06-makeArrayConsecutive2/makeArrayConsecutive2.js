/* Q: Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
     each statue having an non-negative integer size. Since he likes to make things perfect,
     he wants to arrange them from smallest to largest so that each statue will be bigger
     than the previous one exactly by 1. He may need some additional statues to be able to
     accomplish that. Help him figure out the minimum number of additional statues needed. */ 

// URL : https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1
}

exports.makeArrayConsecutive2 = makeArrayConsecutive2
