/* Question : Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

                If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

                For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/Hb9Cppx4pCY4d8J5P


function runnersMeetings(startPosition, speed) {
    let res = 1
     
        for (let i = 0; i < startPosition.length; i++) {
            for (let j = i + 1; j < startPosition.length; j++) {
                let distDiff = startPosition[j] - startPosition[i],
                    speedDiff = speed[i] - speed[j],
                    cnt = 0
                
                if(speedDiff == 0 && distDiff != 0)
                    continue
                    
                for (let k = 0; k < startPosition.length; k++) {
                    if (startPosition[k] * speedDiff + speed[k] * distDiff == startPosition[i] * speedDiff + speed[i] * distDiff)           
                        cnt++
                }
     
                if (cnt == 0)
                    continue
     
                if (cnt > res)
                    res = cnt
            }
        }
        if (res < 2)
            return -1
        return res
    }
    