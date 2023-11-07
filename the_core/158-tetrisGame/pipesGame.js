/* Question : ... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/exzzbEDpoo5Ax4j4Q


function tetrisGame(pieces) {
    let map = Array.from({length: 20}, _ => new Array(10).fill('.')), // the screen
        status = new Array(20).fill(0),  //the number of blocks in each row
        points = 0, //the total points of user
        //Rotate a piece 90-clockwise
        rotate = shape => Array.from({ length: shape[0].length}, (_, i) => 
                                    Array.from({ length: shape.length}, (_, j) =>
                                              shape[shape.length - 1 - j][i]))
    //clear formed line
    function clear(line) {
        while((line = status.indexOf(10)) !== -1) {
            points++ //increase point
            map.splice(line, 1) //remove row
            status.splice(line, 1)
            map.unshift(new Array(10).fill('.')) //move to next stage
            status.unshift(0) 
        }
    }
    //Place the top left corner of the piece at row x, column y
    //Render: true -> Print the piece into map
    //        false -> check if we can place the piece at specified position
    function placePiece(x, y, shape, render) {
        for(let i of shape.keys()) {
            for(let j of shape[0].keys()) {
                if(!render && shape[i][j] == '#' && map[x + i][y + j] == '#') return false
                render && (shape[i][j] == '#') && (map[x + i][y + j] = '#')
            }
        }
        return true
    }
    pieces.map(shape => {
        let maxBlocks = -1, //max total number of blocks in the rows this piece occupies
            pos, //[row, col, i-th rotated piece]
            rotations = [shape] //Generate rotated form of the piece (90deg clockwise)
        for(let i = 0;i < 3;i++) rotations.push(rotate(rotations[i]))
        //Find the optimal position to place the piece
        rotations.map((arr, rotateType) => {
            const h = arr.length, w = arr[0].length
            for(let j = 0;j + w <= 10;j++) { //start from each column
                let highestBase = 19, i
                //the smallest row the base of the piece can belong to
                //(The piece hits ground or another piece)
                while(status[highestBase]) highestBase-- 
                //Try to place the piece from the highest base to the ground
                for(;highestBase < 20;highestBase++) {
                    i = highestBase + 1 - h
                    let totalBlocks = arr.reduce((t, v, k) => t += status[i + k], 0)
                    if(placePiece(i, j, arr, false)) {
                        if(totalBlocks > maxBlocks) { //Update max total number of blocks
                            maxBlocks = totalBlocks
                            pos = [i, j, rotateType]
                        }
                    } else break //if we can't place the piece at the current row
                                //We can't go don't(The piece must be dropped)
                }
            }
        })
        const [x, y, type] = pos
        placePiece(x,y, rotations[type], true) //Render the piece
        //Update number of blocks in each row
        rotations[type].map((_, i) => status[x + i] += _.filter(v => v === '#').length)
        clear() //Remove formed line
       
    })
    return points
}
