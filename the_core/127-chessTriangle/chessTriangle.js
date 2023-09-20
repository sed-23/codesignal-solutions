/* Question : Consider a bishop, a knight and a rook on an n × m chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece. 
                Calculate the number of ways to choose positions of the pieces to form a triangle.

                Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight 
                attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/chess-tavern/NhRZQrrMqeWYL9L9Z


function chessTriangle(n, m) {
    let a, b;
    if(m<n) {a=m; b=n;}
    else {a=n; b=m;}
    let a1=a-1, a2=a-2, a3=a-3, b1=b-1, b2=b-2, b3=b-3;
    return (a>1 && b>2)*8*a1*b2 + (a>2 && b>2)*(8*a2*b1 + 16*a2*b2) + (a>1 && b>3)*8*a1*b3 + (a>2 && b>3)*8*a2*b3 + (a>3)*(8*a3*b1 + 8*a3*b2);

}