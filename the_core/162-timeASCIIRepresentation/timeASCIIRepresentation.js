/* Question : ... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/DpcTH5AjYPD3g9ua6


function timeASCIIRepresentation(dtime) {
    let PI = Math.PI, clock = [
    '1111*********1111',
    '111**.......**111',
    '11**.........**11',
    '1**...........**1',
    '**.............**',
    '*...............*',
    '*...............*',
    '*...............*',
    '*.......*.......*',
    '*...............*',
    '*...............*',
    '*...............*',
    '**.............**',
    '1**...........**1',
    '11**.........**11',
    '111**.......**111',
    '1111*********1111'].map(_ => _.split``),
            vector = (x, y) => [x - 8, y - 8],
            [m, n] = vector(8, 0), //vector 0h
            draw = (x, y, angle) => {
                const deg = angle / PI * 180
                if(0 <= deg && deg <= 90 && !(x >= 8 && y <= 8) ||
                90 <= deg && deg <= 180 && !(x >= 8 && y >= 8) ||
                180 <= deg && deg <= 270 && !(x <= 8 && y >= 8) ||
                270 <= deg && !(x <= 8 && y <= 8)) return
                if(angle > PI) angle = 2 * PI - angle
                let [a, b] = vector(x, y),
                    w = (a * m + b * n) / (Math.sqrt(a * a + b * b) * Math.sqrt(m * m + n * n)),
                    delta = Math.abs(Math.acos(w) - angle),
                    length = Math.sqrt((x - 8) ** 2 + (y - 8) ** 2),
                    dis = Math.sin(delta) * length
                if(dis < Math.sqrt(0.49999999) && dis <= 8 && clock[y][x] !== '1') 
                    clock[y][x] = '*' 
            },
            clip = (arr, startX, endX, startCol, numberOfCols = 1) => 
        arr.slice(startX, endX).map(_ => _.slice(startCol, startCol + numberOfCols)),
            full = arr => +arr.every(_ => _ == '*'),
            number = arr => {
                const code = 
                [clip(arr, 0, 8, 0), clip(arr, 8, 17, 0), 
                clip(arr, 0, 8, 2), clip(arr, 8, 17, 2),
                arr[0], arr[8], arr[16]].reduce((t, _) => t += full(_), '')
                return ['1111101', '0000000', '0110111', '0011111', '1011010', 
                        '1001111', '1101111','0011100', '1111111', '1011111'].indexOf(code)
            }
        let hour = +`${number(clip(dtime, 0, 17, 1, 3))}${number(clip(dtime, 0, 17, 5, 3))}` ,
            minute = +`${number(clip(dtime, 0, 17, 10, 3))}${number(clip(dtime, 0, 17, 14, 3))}`,
            hourAngle = (hour % 12 + minute / 60) * PI / 6,
            minuteAngle = minute * PI / 30
        for(let i = 0;i < 17;i++) {
            for(let j = 0;j < 17;j++) {
                draw(i, j, hourAngle)
                draw(i, j, minuteAngle)
            }
        }
        return clock.map(_ => _.map(_ => _ == '1' ? '.' : _))
}
