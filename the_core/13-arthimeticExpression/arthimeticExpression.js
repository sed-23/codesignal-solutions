/* Question : Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/QrCSNQWhnQoaK9KgK


function arthimeticExpression(a, b, c) {
    return a+b==c || a-b==c || a*b==c || a/b==c
}
