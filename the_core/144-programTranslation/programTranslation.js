/* Question : As an avid user of CodeSignal, you find it frustrating that there are no debugging and recovery tasks in your favorite language, PHP. 
              You decide to help the platform by translating solutions in JavaScript into PHP. You quickly discover that this approach is quite convenient: 
              sometimes all you have to do is substitute the function arguments by adding the $ sign in front of them. At first you do this manually, 
              but soon realize that it won't get you far enough.

              Now you need to implement a function that, given a code written in JavaScript and its args, adds a $ sign in front of each args[i] (unless 
                there is already a dollar sign present).

              Given a code in JavaScript and its args, return the almost-PHP solution. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/WwsFwv42dzLJJFmAE


function programTranslation(code, args) {
  var argumentVariants = args.join('|');
  var re = new RegExp("(\\W)\\$?("+argumentVariants+")(?=\\W)", "g");
  var sub = "$1$$$2";
  return code.replace(re, sub);
}
