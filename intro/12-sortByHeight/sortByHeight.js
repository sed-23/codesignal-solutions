/* Q: Some people are standing in a row in a park. There are trees between
      them which cannot be moved. Your task is to rearrange the people by their
      heights in a non-descending order without moving the trees. People can be very tall! */

// URL : https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function sortByHeight(a) {
    let sorted = a.filter(elem => elem > 0).sort((el1, el2) => el1 - el2);
    return a.map(el => el > 0 ? sorted.shift() : -1 )
}

exports.sortByHeight = sortByHeight;