/* Q: Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too). */

// URL : https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ

function circleOfNumbers(n, firstNumber) {
    return (n/2+firstNumber) % n;
}


exports.circleOfNumbers = circleOfNumbers;