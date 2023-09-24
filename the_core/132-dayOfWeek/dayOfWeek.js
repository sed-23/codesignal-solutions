/* Question : Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded. This year you got lucky: 
                when you and your friend enter the café you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.

                You enjoyed having the café all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.

                For your convenience, here is the list of months lengths (from January to December, respectively):

                Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
                Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/ywMyCTspqGXPWRZx5


function dayOfWeek(birthdayDate) {
    var bd = new Date(birthdayDate);
    var dat = bd.getDay()
    var day = bd.getDate();
    var mt = bd.getMonth();
    var nextYear = bd.getFullYear() + 1;
    for (var i = 0; i < 100; i++){
        var newDay = new Date(nextYear, mt, day).getDay();
                var newDate = new Date(nextYear, mt, day).getDate();

        if (dat == newDay && newDate == day){
            break;
        }
        console.log(newDate);
        nextYear++;
    }
    return i+1;
}
