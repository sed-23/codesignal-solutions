/* Q: You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, 
    and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

    Assuming that your hunch is correct, decode the message. */

// URL : https://app.codesignal.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW

function fileNaming(code) {
    let decodedString = ""
    for (i=0; i<code.length; i += 8) {
        decodedString += String.fromCharCode(parseInt(code.slice(i,i+8), 2))
    }
    return decodedString;
}

exports.fileNaming = fileNaming;
