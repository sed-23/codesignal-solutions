/* Question : Given a rectangular matrix of characters, add a border of asterisks(*) to it. */ 

// URL : https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

function addBorder(picture) {
    picture.push('*'.repeat(picture[0].length))
    picture.unshift('*'.repeat(picture[0].length))
    return picture.map(el => `*${el}*`)
}

exports.addBorder = addBorder;
