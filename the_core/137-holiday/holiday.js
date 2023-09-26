/* Question : John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. 
                He heard that the new holiday will be celebrated each year on the xth week of month, on weekDay.

                Your task is to return the day of month on which the holiday will be celebrated in the year yearNumber.

                For your convenience, here are the lists of months names and lengths and the list of days of the week names.

                Months: "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December".
                Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
                Days of the week: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".
                Please, note that in leap years February has 29 days. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/time-river/4JypHBf7kQc3GjhRF


function holiday(x, weekDay, month, yearNumber) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let m = months.findIndex(x => x === month)
    let day = days.findIndex(x => x === weekDay)
    let date = new Date(yearNumber, m , 1)
    let count = 0
    
    while(count < x && date.getMonth() === m) {
        if(date.getDay() === day){
            count++
            if(count === x)break
        }
        date.setDate(date.getDate()+1)
    }
    return date.getMonth() === m? date.getDate():-1
}