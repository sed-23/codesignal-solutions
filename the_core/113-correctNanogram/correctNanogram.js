/* Question : A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. 
                At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that 
                row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, 
                followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

                You are given a square nonogram of size size. Its grid is given as a square matrix nonogramField of size (size + 1) / 2 + size, where the first 
                (size + 1) / 2 cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.

                Determine if the given nonogram has been solved correctly.

                Note: here / means integer division. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/TTsQFn3ppXCk9uTXs


function correctNanogram(s, f) {
    for (j=Math.floor((s+1)/2);j<f[0].length;j++) {
        n = [], b = false
        for (i=0;i<f.length;i++) 
            if (!h(s,f,i,j,i)) return false}
    for (i=Math.floor((s+1)/2);i<f.length;i++) {
        n = [], b = false
        for (j=0;j<f[0].length;j++) 
            if (!h(s,f,i,j,j)) return false}
    return true
}

    function h(s,f,i,j,k) {
        if (k<Math.floor((s+1)/2)&&f[i][j]!="-") n.push(parseInt(f[i][j]))
        else {
            if (n.length>0) if (k==((s+1)/2)&&(n[0]>s||n.reduce((x,y)=>x+y)+n.length-1>s)) return false
            if (f[i][j]=="#") {
                if (n[0]==0) return false
                else n[0]--
                b = n[0]>0?true:false}
            else if (f[i][j]==".") {
                if (b) return false
                else if (n[0]==0) n.shift()}}
        return true
}
