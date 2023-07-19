/* Question : A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

                How many points with integer coordinates are located inside the given rectangle (including on its sides)? */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/tuKA5f3zpzkKKejJx


function rectangleRotation(a, b) {
    var pointsA = Math.floor(Math.sqrt(a * a / 2)),
        pointsB = Math.floor(Math.sqrt(b * b / 2));
    return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}
