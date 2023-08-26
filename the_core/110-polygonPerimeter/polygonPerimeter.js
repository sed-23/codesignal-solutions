/* Question : You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to 
                any other one through connected adjacent (sharing a common side) black cells.

                Find the perimeter of the black figure assuming that a single cell has unit length.

                It's guaranteed that there is at least one black cell on the table. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/L7KWEYbPoornGyf7K


function polygonPerimeter(matrix) {
    let counter = 0
    
    let prevLine = matrix[0].map(x => false)
    
    for(let line=0; line < matrix.length; line++) {
        
        let prevItem = false

        for(let col=0; col< matrix[line].length; col++) {
            if(matrix[line][col]) {
                counter += 4 - prevItem * 2 - prevLine[col] * 2
            }
            prevItem = matrix[line][col]
        }
        
        prevLine = matrix[line]
    }
    
    return counter
}
