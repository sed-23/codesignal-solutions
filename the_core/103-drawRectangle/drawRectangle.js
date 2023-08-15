/* Question : You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. 
                Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). 
                Here the x-axis points from left to right, and the y-axis points from top to bottom.

                Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. 
                For the details about how rectangles are painted, see the example. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/uFQEiM4trARdm2z46


function drawRectangle(canvas, rectangle) {
    for (var i = rectangle[0] + 1; i < rectangle[2]; i++) {
        canvas[rectangle[1]][i] = canvas[rectangle[3]][i] = '-';
    }
    for (var i = rectangle[1] + 1; i < rectangle[3]; i++) {
        canvas[i][rectangle[0]] = canvas[i][rectangle[2]] = '|';
    }
    canvas[rectangle[1]][rectangle[0]] =
    canvas[rectangle[3]][rectangle[0]] =
    canvas[rectangle[1]][rectangle[2]] =
    canvas[rectangle[3]][rectangle[2]] = '*';
    return canvas;
}