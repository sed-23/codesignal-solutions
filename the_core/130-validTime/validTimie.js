/* Question : Check if the given string is a correct time representation of the 24-hour clock. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/ywMyCTspqGXPWRZx5


function validTime(time) {
    return time.split(":")[0]<24&&time.split(":")[1]<60
}