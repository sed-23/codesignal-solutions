/* Question : Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need 
			(leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

			 If there is no solution, return -1. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/rNrF4v5etMdFNKD3s


function constructSquare(s) {
    const fn = val =>
    Object.values([...val].reduce((pre, val) => (pre[val] = -~pre[val], pre), {})).sort().join(``);
  for (let i = (10 ** s.length) ** 0.5 ^ 0; i > 2; i--) {
    if (`${i ** 2}`.length === s.length && fn(`${i ** 2}`) === fn(s)) return i ** 2;
  }
  return -1;
}

