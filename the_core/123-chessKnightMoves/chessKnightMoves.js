/* Question : Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

                The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square 
                horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/zqDuSLMHhAknqnLtA


function chessKnightMoves(cell) {
    cell = [(cell.codePointAt(0) - 96), Number(cell[1])];
    let a = (cell[1] + 1 > 8) + (cell[1] + 2 > 8),
        b = (cell[0] + 1 > 8) + (cell[0] + 2 > 8),
        c = (cell[1] - 1 < 1) + (cell[1] - 2 < 1),
        d = (cell[0] - 1 < 1) + (cell[0] - 2 < 1);
    let sum = a + b + c + d;
    sum += sum ? sum == 1 ? 1 : 2 : 0;
    return 8 - sum;
}
