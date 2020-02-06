/* Q: Below we will define an n-interesting polygon. 
      Your task is to find the area of a polygon for a given n.

    A 1-interesting polygon is just a square with a side of length 1.
    An n-interesting polygon is obtained by taking the n - 1-interesting
    polygon and appending 1-interesting polygons to its rim, side by side.
    1-, 2-, 3- and 4-interesting polygons can be found at the link below. */

// URL : https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function shapeArea(n) {
    let area = 1;
    for (let i=1; i<=n; i++) {
        area += i*2 + (i-2)*2
    }
    return area;
}

exports.shapeArea = shapeArea;
