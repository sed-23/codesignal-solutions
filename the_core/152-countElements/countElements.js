/* Question : You've been invited to a job interview at a famous company that tests programming challenges. To evaluate your coding skills, they have asked you to parse a 
              given problem's input given as an inputString string, and count the number of primitive type elements within it.

              The inputString can be either a primitive type variable or an array (possibly multidimensional) that contains elements of the primitive types.
              A primitive type variable can be:

              an integer number;
              a string, which is surrounded by " characters (note that it may contain any character except ");
              a boolean, which is either true or false.
              Return the total number of primitive type elements inside inputString. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/secret-archives/SFmoZujtxtwzqJhuB


function countElements(inputString) {
  return (inputString.match(/".*?"|-?\d+|true|false/g)||[]).length
}
