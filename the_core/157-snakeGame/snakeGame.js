/* Question : Your task is to imitate a turn-based variation of the popular "Snake" game. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/P2ECpmqBqtm4jmRXC


function snakeGame(gameBoard, commands) {
    let dir, snake=[], dirs={'^':[-1,0,'v','<','>'], 'v':[1,0,'^','>','<'], '<':[0,-1,'>','v','^'], '>':[0,1,'<','^','v']};
    out=(i,j)=>(i<0 || j<0 || i>=gameBoard.length || j>=gameBoard[0].length);
    move=(i,j)=>(out(i,j) || gameBoard[i][j]!='.') ? 0 : snake.unshift([i,j,dir]);
    addSeg=(i,j,d)=>(out(i,j) || gameBoard[i][j]!='*') ? 0 : snake.push([i,j,d]);
    getSnake=(i,j,d)=>{
        let n = snake.length;
        Object.keys(dirs).map(x=>x==d ? 0 : addSeg(i+dirs[x][0], j+dirs[x][1], dirs[x][2]));
        if (snake.length!=n) getSnake(...snake[n]);
    }

    gameBoard.map((x,i)=>x.map((y,j)=>(y=='.'||y=='*') ? 0 : snake.push([i,j,dir=gameBoard[i][j]]))); // get snake head
    getSnake(...snake[0]); // push snake to an array

    for (let i=0; i<commands.length; i++) {
        if (commands[i]=='F') {
            let last = snake.pop();
            gameBoard[last[0]][last[1]]='.';
            if (!move(snake[0][0]+dirs[dir][0], snake[0][1]+dirs[dir][1])) { // if invalid move, draw result and return
                snake.push(last);
                snake.map(x=>gameBoard[x[0]][x[1]]='X');
                return gameBoard;
            } else gameBoard[snake[0][0]][snake[0][1]]='*';
        } else dir = commands[i]=='L' ? dirs[dir][3] : dirs[dir][4];
    }
    snake.map((x,i)=>gameBoard[x[0]][x[1]] = i ? '*' : dir); // if completed commands, draw final move and return
    return gameBoard;
}
