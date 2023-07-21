/* Question : Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal 
                to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/mirror-lake/chW9F8bCgxYJBcgj3


function stringsConcentration(a, b) {
    let count = 0;
    while(true){
        for(let x of a){
            if(b.indexOf(x) < 0)
                return count;
            b = b.replace(x,"");    
        }
        count ++;
    }
}
