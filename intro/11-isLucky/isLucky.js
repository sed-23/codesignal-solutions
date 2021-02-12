/* Q: Ticket numbers usually consist of an even number of digits.
      A ticket number is considered lucky if the sum of the first half
      of the digits is equal to the sum of the second half.

      Given a ticket number n, determine if it's lucky or not.  */ 

// URL : https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ/

function isLucky(n) {
    let count = 0;
    n = Array.from(String(n), Number);
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}

exports.isLucky = isLucky;
