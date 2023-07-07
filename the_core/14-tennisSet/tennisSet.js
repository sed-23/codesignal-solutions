/* Question : In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, 
                in which case the set continues until one of the players has won 7 games.
                Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/7jaup9HprdJno2diw


function tennisSet(score1, score2) {
    var max = Math.max(score1, score2),
        min = Math.min(score1, score2);
    return  (max == 6 && min < 5) || (max == 7 && min >= 5 && min <=6); 
}
