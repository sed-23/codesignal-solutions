/* Question : Pawn race is a game for two people, played on an ordinary 8 × 8 chessboard. The first player has a white pawn, the second one - a black pawn. 
                Initially the pawns are placed somewhere on the board so that the 1st and the 8th rows are not occupied. Players take turns to make a move. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/ybkbv7e6qMaucZWig


function pawnRace(white, black, toMove) {
    let whiteDistance = Math.min(5, 8 - white[1]);
    let blackDistance = Math.min(5, black[1] - 1);
    // if same column and white is lower row, draw
    if (white[0] == black[0] && white[1] < black[1]) {
        return "draw";
    }
    // if past each other or not adjacent columns and not same distance, whoever is closer wins 
    // if past each other or not adjacent columns and same distance, whoever's turn it is wins
    if (Math.abs(white.charCodeAt(0) - black.charCodeAt(0)) != 1 || white[1] >= black[1]) {
        if (whiteDistance == blackDistance) {
            return toMove == "w" ? "white" : "black";
        }
        return whiteDistance < blackDistance ? "white" : "black";
    }
    // if diagonally adjacent, whoever's turn it is wins
    if (white[1] + 1 == black[1]) {
        return toMove == "w" ? "white" : "black";
    }
    // if both on start, whoever's turn it is loses
    if (white[1] == 2 && black[1] == 7) {
        return toMove == "w" ? "black" : "white";
    }
    // if one on start and other on 5th, turn loses
    if (white[1] == "2" && black[1] == 4 || white[1] == 5 && black[1] == 7) {
        return toMove == "w" ? "black" : "white";
    }
    // if one on start and other on 4th, turn wins
    if (white[1] == "2" && black[1] == 5 || white[1] == 4 && black[1] == 7) {
        return toMove == "w" ? "white" : "black";
    }
    // if one on start and other on 3rd, start wins 
    if (white[1] == "2" && black[1] == 6) {
        return "white";
    }
    if (white[1] == "3" && black[1] == 7) {
        return "black";
    }
    // odd number of spaces between, turn wins; even number of spaces between, turn loses
    return (Math.abs(white[1] - black[1]) + (toMove == "w" ? 1 : 0)) % 2 == 0 ? "white" : "black";

}
