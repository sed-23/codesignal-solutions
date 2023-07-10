/* Question : A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

                Given two integers, your task is to find the result that the child will get.

                Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S


function additionWithoutCarrying(param1, param2) {
    var result = 0,
        num = 1;
    while (param1 + param2 > 0) {
        num *= 10;
        result += (param1 + param2) % num;
        param1 -= param1 % num;
        param2 -= param2 % num;
    }
    return result;
}
