/* Q: After becoming famous, the CodeBots decided to move into a new building together.
      Each of the rooms has a different cost, and some of them are free, but there's a
      rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious,
      they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
    Given matrix, a rectangular matrix of integers, where each value represents the cost of
     the room, your task is to return the total sum of all rooms that are suitable
     for the CodeBots (ie: add up all the values that don't appear below a 0).   */ 

// URL : https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function isLucky(n) {
    let count = 0;
    n = Array.from(String(n), Number);
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}

exports.isLucky = isLucky;
