/* Question : ... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/J8sBSYmWuWaNg6iXd


function game2048(grid, dir) {
    if(dir === 'L' || dir === 'R') return grid;
    return grid.map((_, i) => grid.map((_, j) => grid[3-j][i]));
  }
           
  
  function move(grid, dir) {
    const reg = /\b(\d+) \1\b/g;
    const replacer = (m, p) => p*2;
    const arr = [0,0,0,0];
    
    if(dir === 'L' || dir === 'D') return grid.map((row, i) => ( 
      row.filter(Boolean)
         .join` `
         .replace(reg, replacer)
         .split` `
         .map(Number)
         .concat(arr)
         .slice(0,4)
    ));
    
    return grid.map((row, i) => (
      arr.concat(row.filter(Boolean)
                    .reverse()
                    .join` `
                    .replace(reg, replacer)
                    .split` `
                    .map(Number)
                    .reverse())
         .slice(-4)
    ));
  }
  
  
  function reverseRotate(grid, dir) {
    if(dir === 'L' || dir === 'R') return grid;
    return grid.map((_, i) => grid.map((_, j) => grid[j][3-i]));
  }
  