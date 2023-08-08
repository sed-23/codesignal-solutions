/* Question : Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. 
                Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

                It is guaranteed that there is at least one tooth at each end of the comb.
                It is also guaranteed that the total length of two strings is smaller than 32.
                Note, that the combs can not be rotated/reversed. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/6ceKutpnCs4LzBKgf


function combs(comb1, comb2) {
    let f = (c1, c2) => {
    while ([...c2].some((x, i) => x == c1[i] && x == '*')) c2 = '.' + c2
    return Math.max(c1.length, c2.length)
  }
  return Math.min(f(comb1, comb2), f(comb2, comb1))
}