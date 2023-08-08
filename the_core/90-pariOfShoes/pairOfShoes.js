/* Question : Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

                type indicates if it's a left or a right shoe;
                size is the size of the shoe.
                Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/picP24ieQnuqR4kxJ


function pairOfShoes(shoes) {
    while (shoes.length > 1) {
        for (let i = 1; i < shoes.length; i++) {
            if (shoes[0][1] === shoes[i][1] && shoes[0][0] !== shoes[i][0]) {
                shoes.splice(i, 1);
                shoes.shift();
                break;
            }
            if (i === shoes.length - 1) return false;
        }
    }
    return shoes.length < 1;
}