/* Question : In ChessLand there is a small but proud chess bishop with a recurring dream. In the dream the bishop finds itself on an n × m chessboard with mirrors along each edge, and it is not 
                a bishop but a ray of light. This ray of light moves only along diagonals (the bishop can't imagine any other types of moves even in its dreams), it never stops, and once it 
                reaches an edge or a corner of the chessboard it reflects from it and moves on.

                Given the initial position and the direction of the ray, find its position after k steps where a step means either moving from one cell to the neighboring one or reflecting from a corner of the board. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/FfjPkYvo9ah6wgXem


function chessBishopDream(boardSize, initPosition, initDirection, k) {
    return [0,1].map(i => {
    
    const mod = boardSize[i] * 2;
    const mid = (mod-1) / 2;
    const mad = initPosition[i] + initDirection[i] * k;
    
    return mid - Math.abs(mid - ((mad%mod) + mod) % mod)
  })
}
