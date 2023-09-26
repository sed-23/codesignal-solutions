/* Question : You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually travel doesn't bother you, but this time you are unlucky: 
                it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's Day in mid-air!

                Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you will take off at takeOffTime, 
                and in minutes[i] after takeoff you will cross the ith border between time zones. After crossing each border you will have to set your wrist watch one hour earlier 
                (every second matters to you, so you can't let your watch show incorrect time). It is guaranteed that you won't cross the IDL (i.e. after crossing each time zone border your current time will be set one hour back).

                You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. each time your wrist watch shows 00:00. 
                Assuming that you set your watch immediately after the border is crossed, how many times will you be able to celebrate this New Year's Day with a nice bottle of champagne? 
                Note that the answer should include celebrations both in mid-air and on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, 
                you'll not let the last opportunity to celebrate New Year slip through your fingers). */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/EaPEmzu6CYRuc4X2C


function newYearCelebrations(takeOffTime, minutes) {
    let hour = +takeOffTime.substring(0, 2),
        minute = +takeOffTime.substring(3);
    minutes.unshift(0);
    if (hour==0)
        hour=24;
    let overDay = false,
        res = 0;
    for (let i = 1; i < minutes.length; i++){
        minute += minutes[i]-minutes[i-1];
        if (minute>=60){
            hour += Math.floor(minute/60);
            minute = minute%60;
        }
        if (hour>=24){
            overDay = true;
        }
        if (overDay){
            res++;
        }
        // reset time when cross border
        hour-=1;
        if (hour>24||(hour==24&&minute!=0))
            return res
        if (hour<24||(hour==24&&minute==0)){
            overDay = false;
        }
    }
    if (!overDay)
        res++;
    return res;
}
