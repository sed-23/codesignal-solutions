/* Q: Check if the given string is a correct time representation of the 24-hour clock. */

// URL : https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function validTime(time) {
    if (time == "24:00") return false 
    let arr = time.split(':').map(x=>parseInt(x))
    return arr[0] < 24 && arr[0] >= 0 && arr[1] < 60 && arr[1] >= 0
}

exports.validTime = validTime;
