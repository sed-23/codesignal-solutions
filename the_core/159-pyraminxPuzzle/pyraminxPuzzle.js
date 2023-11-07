/* Question : ... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/PouBk693gQvXaCbPK


function pyraminxPuzzle(faceColors, moves) {
    let p = faceColors.map(x=>new Array(9).fill(x)), f = {u:[0,2,3], b:[1,3,2], l:[2,0,1], r:[3,1,0]};
    swap=(i,j,a,b)=>[p[a[0]][j], p[a[b]][i]] = [p[a[b]][i], p[a[0]][j]]; 
    move=(m)=>{
        let c = m[0].toLowerCase(), d = [4,8].map((x,i)=>swap(x, 0, f[c], i+1)); 
        if (c==m[0]) [6,3,5,7,1,6].map((x,i)=>swap(x, (i%2 ? i+1 : i+2)/2, f[c], i%2+1)); 
        if (m.length>1) move(m[0]); // rotate again if clockwise
    }
    moves.reverse().map(x=>move(x));
    return p;
}
