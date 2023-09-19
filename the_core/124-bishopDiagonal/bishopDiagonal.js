/* Question : In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

            Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/wGLCfzpdcA2o9kSpD


function bishopDiagonal(bishop1, bishop2) {
    let pos = x => [x[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1, parseInt(x[1])]
    let word = (x,y) => `${String.fromCharCode(x+'a'.charCodeAt(0) - 1)}${y}`
    let btwn27 = x => 2 <= x && x <= 7;
    console.log(pos(bishop1), pos(bishop2))
    let [c, c1] = [pos(bishop1), pos(bishop2)].sort(([x,y],[x1,y1])=> x - x1);
    let [dx,dy] = [c[0]-c1[0],c[1] - c1[1]];
    let [x,y] = c, [x1,y1] = c1;
    if( Math.abs(dx) != Math.abs(dy)) return [bishop1,bishop2].sort();
    if (dy < 0){
        for( ; btwn27(x) && btwn27(y) ;) x -= 1, y -=1;
        for( ; btwn27(x1) && btwn27(y1) ;) x1 += 1, y1 +=1;
    }else{
        for( ; btwn27(x) && btwn27(y) ;) x -= 1, y +=1;
        for( ; btwn27(x1) && btwn27(y1) ;) x1 += 1, y1 -=1;
    }
    return [word(x,y),word(x1,y1)].sort();
}
