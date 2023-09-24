/* Question : You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/DKjM5qLz5ccK2ukhH


function videoPart(part, total) {
    a = part.split(':').map(x => Number(x))
    b = total.split(':').map(x => Number(x))
    x = a[0] * 3600 + a[1] * 60 + a[2]
    y = b[0] * 3600 + b[1] * 60 + b[2]
    a = x
    b = y
    while (y > 0) {
        tg = x % y
        x = y
        y = tg
    }
    return [a / x, b / x]
}
