/* Q: Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
      The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically 
      and one square horizontally away from it. The complete move therefore looks like the letter L. 
      Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares. */

// URL : https://app.codesignal.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb



function chessKnight(cell) {
    let n = Number(cell[1]);
    let l = cell[0].charCodeAt() - 96;
    return (8 - n >= 2 && l + 1 <= 8) + (8 - n >= 1 && l + 2 <= 8) + (n - 1 >= 1 && l + 2 <= 8) + (n - 2 >= 1 && l + 1 <= 8) + (n - 2 >= 1 && l - 1 >= 1) + (n - 1 >= 1 && l - 2 >= 1) + (n + 1 <= 8 && l - 2 >= 1) + (n + 2 <= 8 && l - 1 >= 1);
}


exports.chessKnight = chessKnight;