/* Question : Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out 
                leading digits (if the number needs to be shortened) or by adding 0s in front of the original number. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/kvGfZZxGyjNbD7yxv


function integerToStringOfFixedLength(number, width) {
    return `${number}`.padStart(width, '0').slice(-width)
}