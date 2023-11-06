/* Question : You are writing a spreadsheet application for an ancient operating system. The system runs on a computer so old that it can only display ASCII graphics. 
              Currently you are stuck with implementing the cells joining algorithm.

              You are given a table in ASCII graphics, where the following characters are used for borders: +, -, |. The rows can have different heights and the columns 
              can have different widths. Each cell has an area greater than 1 (excluding the borders) and can contain any ASCII characters excluding +, - and |.

              The algorithm you want to implement should merge the cells within a given rectangular part of the table into a single cell by removing the borders between 
              them (i.e. replace them with space characters (' ') and replace redundant +s with correct border symbols). The cells to join are represented by the 
              coordinates of the cells at the extreme bottom-left and top-right of the area. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/secret-archives/n6KRaxBdcFv5JjQgM


function cellsJoining(table, coords) {
  let x1, y1, x2, y2;
  for(let i = 0, h = 0; i < table[0].length; i++){
      if(table[0][i] == '+'){
      if(h == coords[0][1]) x1 = i;
      if(h-1 == coords[1][1]) x2 = i;
      h++;
      }
  }
  for(let i = 0, h = 0; i < table.length; i++){
      if(table[i][0] == '+'){
      if(h == coords[1][0]) y1 = i;
      if(h-1 == coords[0][0]) y2 = i;
      h++;
      }
  }
  
  //I probably should have not used a oneliner...
  return table.map((a,y)=>a.split('').map((v,x)=>y>y1&&y<y2&&x==x1&&(x==0||table[y][x-1]!='-')&&v=='+'?'|':y>y1&&y<y2&&x==x2&&v=='+'&&(x==table[0].length-1||table[y][x+1]!='-')?'|':x>x1&&x<x2&&y==y1&&v=='+'&&(y==0||table[y-1][x]!='|')?'-':x>x1&&x<x2&&y==y2&&v=='+'&&(y==table.length-1||table[y+1][x]!='|')?'-':x>x1&&x<x2&&y>y1&&y<y2&&(v=='+'||v=='-'||v=='|')?' ':v).join(''));
}