/* Question : Given a rectangular matrix of characters, add a border of asterisks(*) to it. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/ZCD7NQnED724bJtjN


function addBorder(picture) {
    return [x='*'.repeat(picture[0].length+2)].concat(picture.map(d=>'*'+d+'*'),x)
}
