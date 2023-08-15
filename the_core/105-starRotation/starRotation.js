/* Question : Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle 
                column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving 
                position of all matrix elements that do not belong to the star. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/A5meC5REAcDfHeuFf


function starRotation(a, width, center, t) {
    for (let k = 0; k < t%8; k++){
        let startX = center[0] - (width-1)/2,
        startY = center[1] - (width-1)/2,
        midX = center[0],
        midY = center[1],
        endX = center[0] + (width-1)/2,
        endY = center[1] + (width-1)/2;
        for (let i = 0; i < (width-1)/2; i++){
            let tem = a[startX][startY];
            a[startX][startY] = a[midX][startY];
            a[midX][startY] = a[endX][startY];
            a[endX][startY] = a[endX][midY];
            a[endX][midY] = a[endX][endY];
            a[endX][endY] = a[midX][endY];
            a[midX][endY] = a[startX][endY];
            a[startX][endY] = a[startX][midY];
            a[startX][midY] = tem;
            startX++;
            startY++;
            endX--;
            endY--;
        }
    }
    return a;
}
