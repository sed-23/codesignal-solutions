/* Question : Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

                The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move: */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/6M57rMTFB9MeDeSWo


function bishopAndPawn(bishop, pawn) {
    return Math.abs(bishop.charCodeAt(0)-pawn.charCodeAt(0))==Math.abs(Number(pawn[1])-Number(bishop[1]))
}

