/* Q: Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, 
    find the number of candidates who still have a chance to win the election.

    The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, 
    assume there is no winner at all. */

// URL : https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg


function electionWinners(v, k) {
    let max = Math.max(...v);
    return k || v.indexOf(max) != v.lastIndexOf(max) ? v.filter(n => n + k > max).length : 1
}


exports.electionWinners = electionWinners;