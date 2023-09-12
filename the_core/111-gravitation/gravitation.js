/* Question : You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed 
                (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at 
                some moment in time, find out which columns become motionless first. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/hqrYesGKEaKQnv7Sv


function graviatation(rows) {
    result = [];
    minStep = rows.length;

    for (i=0; i<rows[0].length; i++) {
        let finish = rows.length - 1,
        step = 0;
        for (j=rows.length-1; j>=0; j--) {
        if (rows[j].charAt(i) == '#') {
            step = finish - j;
            finish--;
        }
        }
        if (step == minStep) {
        result.push(i);
        }
        if (step < minStep) {
        minStep = step;
        result = new Array;
        result.push(i);
        }
    }

    return result;
}