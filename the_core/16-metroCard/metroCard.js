/* Question : You just bought a public transit card that allows you to ride the Metro for a certain number of days.
                Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. 
                The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. 
                The 13th time you extend the pass, you get 31 days again.

                You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember 
                the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, 
                and return all the options as an array sorted in increasing order. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/J7PQDxpWqhx7HrvBZ


function metroCard(lastNumberOfDays) {
    var result = {
        30: [31],
        28: [31],
        31: [28, 30, 31]
    };
    return result[lastNumberOfDays];
}
