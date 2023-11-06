/* Question : Carlos always loved playing video games, especially the well-known computer game "Pipes". Today he finally decided to write his own version of the legendary game from scratch.

            In this game the player has to place the pipes on a rectangular field to make water pour from each source to a respective sink. He has already come up with the entire 
            program, but one question still bugs him: how can he best check that the arrangement of pipes is correct?

            It's your job to help him figure out exactly that. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/ipS8j77AWFDEZoQ7H


function pipesGame(state) {
  const delta = [[-1,0], [0,1], [1,0], [0,-1]];
  const pipeType = {
      '0': [-1,-1,-1,-1],
      '1': [0,-1,2,-1],
      '2': [-1,1,-1,3],
      '3': [1,-1,-1,2],
      '4': [3,2,-1,-1],
      '5': [-1,0,3,-1],
      '6': [-1,-1,1,0],
      '7': [0,1,2,3]
  };
  const valid = (x, y) => x >= 0 && x < state.length && y >= 0 && y < state[0].length;
  const pipeSet = new Set();
  let waterCells = [];
  state.forEach((row, i) => {
      Array.from(row).forEach((port, j) => {
          if (/[a-z]/.test(port)) {
              for (let direct = 0; direct < delta.length; direct++) {
                  let x = i + delta[direct][0];
                  let y = j + delta[direct][1];
                  let pipe = valid(x, y) ? state[x][y] : null;
                  if (pipe && pipeType[pipe] && pipeType[pipe][direct] !== -1) {
                      waterCells.push([x, y, pipeType[pipe][direct], port]);
                      pipeSet.add(`${x}-${y}`);
                  }
              }
          }
      })
  });
  let leakFlag = false;
  while (waterCells.length > 0) {
      let cells = [];
      for (let [i, j, direct, port] of waterCells) {
          let x = i + delta[direct][0];
          let y = j + delta[direct][1];
          let pipe = state[x][y];
          if (/[A-Z]/.test(pipe) && 
              pipe.toLowerCase() === port) {
              continue;
          }
          let next = pipeType[pipe][direct];
          cells.push([x, y, next, port]);
          pipeSet.add(`${x}-${y}`);
          let nextX = x + delta[next][0];
          let nextY = y + delta[next][1];
          let nextPipe = valid(nextX, nextY) ? state[nextX][nextY] : null;
          if (!nextPipe ||
              /[A-Z]/.test(nextPipe) && nextPipe.toLowerCase() !== port ||
              /[0-7]/.test(nextPipe) && pipeType[nextPipe][next] === -1) {
              leakFlag = true;
          }
      }
      if (leakFlag) return -pipeSet.size;
      waterCells = cells;
  }
  return pipeSet.size;
}
