/* Question : Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on b1 and g1; the black knights on b8 and g8. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/SJRNgqggTaktuCJGj


function whoseTurn(p) {
    let pieces = p.split(';')
    let places = pieces.map(e => {
        return (e.charCodeAt(0) - 96 + Number(e[1])) % 2 === 0 ? false : true
    })
    
    return (places[0] ^ places[1]) === (places[2] ^ places[3])
}
