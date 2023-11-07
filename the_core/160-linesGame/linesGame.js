/* Question : ... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/DpcTH5AjYPD3g9ua6


function linesGame(field, clicks, newBalls, newBallsCoordinates) {
    let score = 0;
    let lines = [];
    const checkCell = (x, y) => {
        for (const [dx, dy] of [[1, 0], [1, 1], [0, 1], [-1, 1]]) {
            let x1 = x;
            let y1 = y;
            while ((field[y1] || [])[x1] === field[y][x]) {
                x1 += dx;
                y1 += dy;
            }
            let x2 = x;
            let y2 = y;
            while ((field[y2] || [])[x2] === field[y][x]) {
                x2 -= dx;
                y2 -= dy;
            }
            const size = Math.max(x1-x2-1, y1-y2-1);
            if (size >= 5) {
                lines.push([size, x2, y2, dx, dy]);
            }
        }
        return lines.length > 0;
    };
    const countLines = () => {
        for (const line of lines) {
            if (lines[line]) continue;
            lines[line] = true;
            const [size, x, y, dx, dy] = line;
            score += size+1;
            for (let i = 0, j = x, k = y; i < size; i++) {
                j += dx;
                k += dy;
                field[k][j] = '.';
            }
        }
        score -= lines.length > 0;
    };
    
    let spawnIdx = 0;
    
    let selected = null;
    for (const [cy, cx] of clicks) {
        lines = [];
        let isUnsuccessful = false;
        if (selected && field[cy][cx] === '.') {
            const visited = {};
            const canReachFinishFrom = pos => {
                const [x, y] = pos;
                if ((field[y] || [])[x] !== '.' && pos !== selected || visited[pos]) return false;
                visited[pos] = true;
                if (x === cx && y === cy) return true;
                return [[x, y+1], [x, y-1], [x+1, y], [x-1, y]].some(canReachFinishFrom);
            };
            if (canReachFinishFrom(selected)) {
                const [sx, sy] = selected;
                field[cy][cx] = field[sy][sx];
                field[sy][sx] = '.';
                if (!checkCell(cx, cy)) {
                    isUnsuccessful = true;
                }
                countLines();
            }
            selected = null;
        } else if (field[cy][cx] !== '.') {
            selected = [cx, cy];
        } else {
            selected = null;
        }
        
        if (isUnsuccessful && spawnIdx < newBalls.length) {
            lines = [];
            for (let i = 0; i < 3; i++) {
                const color = newBalls[spawnIdx];
                const [sy, sx] = newBallsCoordinates[spawnIdx++];
                if (field[sy][sx] === '.') {
                    field[sy][sx] = color;
                }
            }
            for (let i = 0; i < 3; i++) {
                const [sy, sx] = newBallsCoordinates[spawnIdx-i-1];
                checkCell(sx, sy);
            }
            countLines();
        }
    }
    
    return score;
}
