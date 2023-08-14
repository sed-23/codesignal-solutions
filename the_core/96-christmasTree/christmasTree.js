/* Question : It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks ('*' symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.

                Here is a formal definition of how the tree should be built, but before you read it the Elf HIGHLY recommends first looking at the examples that follow:

                Each tree has a crown as follows:

                *
                *
                ***
                Define a line as a horizontal group of asterisks and a level as a collection of levelHeight lines stacked one on top of the other.

                Below the crown there are levelNum levels.

                The tree is perfectly symmetrical so all the middle asterisks of the lines lie on the center of the tree.

                Each line of the same level (excluding the first one) has two more asterisks than the previous one (one added to each end);

                The number of asterisks in the first line of each level is chosen as follows:

                the first line of the first level has 5 asterisks;
                the first line of each consecutive level contains two more asterisks than the first line of the previous level.
                And finally there is the tree foot which has a height of levelNum and a width of:

                levelHeight asterisks if levelHeight is odd;
                levelHeight + 1 asterisks if levelHeight is even.
                Given levelNum and levelHeight, return the Christmas tree of the young elf. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/FvMZwyYRsGaA7Q3A8


function christmasTree(levelNum, levelHeight) {
    var middle = levelNum + levelHeight,
       tree = [
           s = ' '.repeat(middle) + '*',
           s,
           t = ' '.repeat(middle - 1) + '***'
       ];
   for (var l = 0; l < levelNum; l++) {
       for (var h = 0; h < levelHeight; h++) {
           tree.push(' '.repeat(middle - 2 - l - h) + '*'.repeat(5 + (l + h) * 2));
       }
   }
   var foot = ' '.repeat(middle - levelHeight / 2 + .5) + '*'.repeat(levelHeight + -~levelHeight % 2);
   while (levelNum--) tree.push(foot);
   return tree;
}

    