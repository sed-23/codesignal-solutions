/* Question : Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: 
                if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.

                You're given an array, daysOfTheWeek, with the weekdays on which your teacher's classes are scheduled, and holidays, representing the dates of the holidays 
                throughout the academic year (from 1st of September in year to 31st of May in year + 1). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?

                For your convenience, here is the list of month lengths (from January to December, respectively):

                Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
                Please note that in leap years February has 29 days. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/WBjidxs6TBgJqp2RG


function missedClasses(year, daysOfTheWeek, holidays) {
    daysOfTheWeek = daysOfTheWeek.map(d => d===7?0:d)
    let result = 0
    holidays.forEach(h => {
        let newH = h.split('-')
        if(Number(newH[0])>=8){
            let date = new Date(`${h}-${year}`)
            if(daysOfTheWeek.some(d => d === date.getDay())) result++
        } else {
            let date = new Date(`${h}-${year + 1}`)
            if(daysOfTheWeek.some(d => d === date.getDay())) result++
        }
    })
    
    return result
}

