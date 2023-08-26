/* Question : Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, 
                so you want to apply the box blur algorithm to the photo to hide its content.
                The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has 
                a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

                Return the blurred image as an integer, with the fractions rounded down. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/waterfall-of-integration/5xPitc3yT3dqS7XkP


function boxBlur(image) {
    const blurred = [];
    
    for (let row = 1; row < image.length - 1; row++) {
        blurred.push([]);
        for (let col = 1; col < image[row].length - 1; col++) {
            let sum = 0;
            for (let r = -1; r <= 1; r++) {
                for (let c = -1; c <= 1; c++) {
                    sum += image[row + r][col + c];
                }
            }
            blurred[row - 1].push(Math.floor(sum / 9));
        }
    }
    
    return blurred;
}