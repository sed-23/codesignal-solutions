/* Question : An amazon (also known as a queen + knight compound) is an imaginary chess piece that can move like a queen or a knight (or, equivalently, like a rook, bishop, or knight). 
                The diagram below shows all squares which the amazon can attack from e4 (circles represent knight-like moves while crosses correspond to queen-like moves). */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/3hvEEqS7wuoEMZJJC


function amazonCheckmate(king, amazon) {
    let isCoordinate = v => [v.charCodeAt(v[0]) - 97, +v[1] - 1];

    let isValidSquares = (chessBoard, amazon, king) => {
        let points = isCoordinate(amazon);
        let kingCoordinates = isCoordinate(king);
        let cnt = points[0] + 1;
        if (points[1] + 2 < 8) {
            if (points[0] + 1 < 8) chessBoard[points[1] + 2][points[0] + 1] = 1;
            if (points[0] - 1 >= 0) chessBoard[points[1] + 2][points[0] - 1] = 1;
        }
    
        if (points[1] - 2 >= 0) {
            if (points[0] + 1 < 8) chessBoard[points[1] - 2][points[0] + 1] = 1;
            if (points[0] - 1 >= 0) chessBoard[points[1] - 2][points[0] - 1] = 1;
        }
    
        if (points[0] + 2 < 8) {
            if (points[1] + 1 < 8) chessBoard[points[1] + 1][points[0] + 2] = 1
            if (points[1] - 1 >= 0) chessBoard[points[1] - 1][points[0] + 2] = 1
        }
    
        if (points[0] - 2 >= 0) {
            if (points[1] + 1 < 8) chessBoard[points[1] + 1][points[0] - 2] = 1
            if (points[1] - 1 >= 0) chessBoard[points[1] - 1][points[0] - 2] = 1
        }
    
        while (cnt < 8) {
            if (cnt === kingCoordinates[0] && points[1] === kingCoordinates[1]) break;
            chessBoard[points[1]][cnt] = 1;
            cnt++;
        }
    
        cnt = points[0] - 1;
        while (cnt >= 0) {
            if (cnt === kingCoordinates[0] && points[1] === kingCoordinates[1]) break;
            chessBoard[points[1]][cnt] = 1;
            cnt--;
        }
    
        cnt = points[1] + 1
        while (cnt < 8) {
            if (cnt === kingCoordinates[1] && points[0] === kingCoordinates[0]) break;
            chessBoard[cnt][points[0]] = 1;
            cnt++;
        }
    
        cnt = points[1] - 1;
        while (cnt >= 0) {
            if (cnt === kingCoordinates[1] && points[0] === kingCoordinates[0]) break;
            chessBoard[cnt][points[0]] = 1;
            cnt--;
        }
    
        cnt = points[0] + 1;
        let cnt1 = points[1] + 1;
        while (cnt < 8 && cnt1 < 8) {
            if (cnt === kingCoordinates[0] && cnt1 === kingCoordinates[1]) break;
            chessBoard[cnt1][cnt] = 1;
            cnt++;
            cnt1++;
        }
    
        cnt = points[0] + 1;
        cnt1 = points[1] - 1;
        while (cnt < 8 && cnt1 >= 0) {
            if (cnt === kingCoordinates[0] && cnt1 === kingCoordinates[1]) break;
            chessBoard[cnt1][cnt] = 1;
            cnt++;
            cnt1--;
        }
    
        cnt = points[0] - 1;
        cnt1 = points[1] - 1;
        while (cnt >= 0 && cnt1 >= 0) {
            if (cnt === kingCoordinates[0] && cnt1 === kingCoordinates[1]) break;
            chessBoard[cnt1][cnt] = 1;
            cnt--;
            cnt1--;
        }
    
        cnt = points[0] - 1;
        cnt1 = points[1] + 1;
        while (cnt >= 0 && cnt1 < 8) {
            if (cnt === kingCoordinates[0] && cnt1 === kingCoordinates[1]) break;
            chessBoard[cnt1][cnt] = 1;
            cnt--;
            cnt1++;
        }
    }

    let isInvalidSquares = (chessBoard, king) => {
        let points = isCoordinate(king);
        chessBoard[points[1]][points[0]] = -1;
        if (points[0] + 1 < 8) {
            chessBoard[points[1]][points[0] + 1] = -1
            if (points[1] + 1 < 8) chessBoard[points[1] + 1][points[0] + 1] = -1;
            if (points[1] - 1 >= 0) chessBoard[points[1] - 1][points[0] + 1] = -1;
        }
        if (points[0] - 1 >= 0) {
            chessBoard[points[1]][points[0] - 1] = -1;
            if (points[1] + 1 < 8) chessBoard[points[1] + 1][points[0] - 1] = -1;
            if (points[1] - 1 >= 0) chessBoard[points[1] - 1][points[0] - 1] = -1;
        }
    
        if (points[1] + 1 < 8) chessBoard[points[1] + 1][points[0]] = -1;
        if (points[1] - 1 >= 0) chessBoard[points[1] - 1][points[0]] = -1;
    }

    let isValidMove = (x, y, chessBoard) => {
        if (y + 1 < 8) {
            if (chessBoard[x][y + 1] === 0) return true;
            if (x + 1 < 8) if (chessBoard[x + 1][y + 1] === 0) return true;
            if (x - 1 >= 0) if (chessBoard[x - 1][y + 1] === 0) return true
        }
    
        if (y - 1 >= 0) {
            if (chessBoard[x][y - 1] === 0) return true;
            if (x + 1 < 8) if (chessBoard[x + 1][y - 1] === 0) return true;
            if (x - 1 >= 0) if (chessBoard[x - 1][y - 1] === 0) return true;
        }
    
        if (x + 1 < 8) if (chessBoard[x + 1][y] === 0) return true;
        if (x - 1 >= 0) if (chessBoard[x - 1][y] === 0) return true;
    }

    let chessBoard = Array(8).fill(0).map(x => Array(8).fill(0));
    let res = [0, 0, 0, 0];
    isValidSquares(chessBoard, amazon, king);
    isInvalidSquares(chessBoard, king);
    let queenC = isCoordinate(amazon);
    chessBoard.forEach((x, ix) => {
        x.forEach((y, iy) => {
            if (y !== -1 && !(queenC[1] === ix && queenC[0] === iy)) {
                let valid = isValidMove(ix, iy, chessBoard);
                if (y === 1 && !valid) res[0]++;
                    if (y === 1 && valid) res[1]++;
                        if (y === 0 && !valid) res[2]++;
                if (y === 0 && valid) res[3]++;
            }
        })
    })
    return res;
}