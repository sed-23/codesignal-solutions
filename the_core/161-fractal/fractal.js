/* Question : ... */ 

// URL : https://app.codesignal.com/arcade/code-arcade/cliffs-of-pain/7g9K4ZqrmE6yad5P7


function linesGame(n) {
    A = "-BF+AFA+FB-"
    B = "+AF-BFB-FA+"
    c = "A"
    for (i = 0; i < n; i++)
        c = c.replace(/A|B/g, c => ({A:A, B:B})[c])
    c = c.replace(/A|B/g, "")
    if (n % 2 == 0) {
        c = [...c].reverse().join``.replace(/\+|\-/g, c => c == "+" ? "-" : "+")
        k = 1
    } else {
        k = 0
    }

    T = Array(2 ** n).fill().map(v => Array(2 ** n * 2 - 1).fill(' '))
    d = [[1,0], [0,1], [-1,0], [0, -1]]
    n = 0
    y = x = p = 0
    for (i of c) {
        if (i == 'F') {
            if (k == 0) {
                y += d[k][0]
                x += d[k][1]
                T[y][x] = '|'
            } else if (k == 1 || k == 3) {
                if (p == k)
                    T[y][x] = '_'
                y += d[k][0]
                x += d[k][1]
                T[y][x] = '_'
                y += d[k][0]
                x += d[k][1]
            } else {
                T[y][x] = '|'
                y += d[k][0]
                x += d[k][1]
            }
            p = k
        } else if (i == '+') {
            k = (k + 4 - 1) % 4
        } else {
            k = (k + 1) % 4
        }
    }
    return T
}
