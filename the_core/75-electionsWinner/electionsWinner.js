/* Question : Elections are in progress!

                Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

                The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/8RiRRM3yvbuAd3MNg


function electionsWinner(votes, k) {
    m = Math.max(...votes)
    return k>0?votes.map(i=>i+k>m).reduce((x,y)=>x+y):votes.length-votes.filter(i=>i!=m).length==1?1:0

}