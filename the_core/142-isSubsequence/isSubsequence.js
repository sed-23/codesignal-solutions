/* Question : Given a string s, determine if it is a subsequence of a given string t. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/E6eYu8dsfwch2My27


function isSubsequence(t, s) {
  var pattern = "";
  for (var i = 0; i < s.length; i++) {
    pattern += "["+s[i]+"].*" ;
  }
  var re = new RegExp(pattern);
  return re.test(t);
}