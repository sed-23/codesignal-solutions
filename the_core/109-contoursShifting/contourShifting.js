/* Question : Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, 
                so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.

                Here is how Mark defines i-contours:

                the 0-contour of a rectangular array as the union of left and right columns as well as top and bottom rows;
                consider the initial matrix without the 0-contour: its 0-contour is the 1-contour of the initial matrix;
                define 2-contour, 3-contour, etc. in the same manner by removing 0-contours from the obtained arrays.
                Implement a function that does exactly what Mark wants to do to his matrix. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/LfP67YRDw2rxoLmeP


function contoursShifting(matrix) {
    let positions = new Array(matrix.length).fill('')
    .map((x,i)=>new Array(matrix[0].length).fill('').map((x2,i2)=>[i,i2]))
  let output = matrix.map(x=>x.map(x=>x))
  let contoursVals = contourGen(matrix)
  let contoursPos = contourGen(positions)   
  let shifted = contoursVals.map((x,i)=>{
    i%2===0?x.unshift(x.pop()):x.push(x.shift())
  return x
  })
  contoursPos.map((x,i)=>x.map((x2,i2)=>output[x2[0]][x2[1]]=shifted[i][i2]))
  return output
}

function contourGen(matrix){
  let contours = []
  while(matrix.length>1 && matrix[0].length>1){
    contours.push([
        ...matrix.shift(),
        ...matrix.map(x=>x.pop()),
        ...matrix.pop().reverse(),
        ...matrix.map(x=>x.shift()).reverse()
    ])
         }
  if(matrix[0]!== undefined){
        if(matrix.length===1&&matrix[0].length>=1){
      matrix[0].unshift(matrix[0].pop())
      contours.push(...matrix)
     } else if
  (matrix[0].length===1 && matrix.length>=1){
      matrix.unshift(matrix.pop())
      contours.push([...matrix.map(x=>x[0])])
     }
  }
  return contours

}

