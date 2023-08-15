/* Question : You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. 
                Now you're curious about how the coach arranged the players on the field at the start of the game. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/fmYdsYcGfaTu4yTQt


function volleyballPositions(formation, k) {
    function rotate() {
        let holder = formation[3][2];
        formation[3][2] = formation[2][1];
        formation[2][1] = formation[3][0];
        formation[3][0] = formation[1][0];
        formation[1][0] = formation[0][1];
        formation[0][1] = formation[1][2];
        formation[1][2] = holder;
    }
    
    k = k % 6;
    
    for (let i = 1; i <= k; i++) {
        rotate();
    }
    
    return formation;
}
