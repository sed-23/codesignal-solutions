/* Question : In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. 
                You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!

                You and your colleagues have started calling these months regular months. Since you're a fan of working from home, you decide to find out how far away the nearest regular month is, given that the currMonth has just started.

                For your convenience, here is a list of month lengths (from January to December, respectively):

                Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
                Please, note that in leap years February has 29 days. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/36z952jJdatJnFXGC


function regularMonths(currMonth) {
    currMonth = currMonth.split('-')
    let date = new Date(`${currMonth[0]}-01-${currMonth[1]}`)
    date.setMonth(date.getMonth()+1)
    while(date.getDay() !== 1) {
        date.setMonth(date.getMonth()+1)
    }
    date = date.toISOString().split('-')
    return `${date[1]}-${date[0]}`
}
