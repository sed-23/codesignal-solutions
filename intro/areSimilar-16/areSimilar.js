/* Q: Two arrays are called similar if one can be obtained from another by
      swapping at most one pair of elements in one of the arrays.

      Given two arrays a and b, check whether they are similar. */

// URL : https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function areSimilar(a, b) {
    res = a.map((e,i)=> e==b[i] ? null : e).filter(Boolean).length
    hasSameElements = JSON.stringify(a.sort((a, b) => a - b)) == JSON.stringify(b.sort((a, b) => a - b))
    return hasSameElements && (res == 2 || res == 0)
}

exports.areSimilar = areSimilar;
