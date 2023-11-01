/* Question : In most role-playing games, die rolls required by the system are given in the form AdX. A and X are positive integers, separated by the letter 'd', 
              which stands for die or dice.

              A is the number of times the die should be rolled (usually omitted if 1).
              X is the number of faces on the die.
              To this basic notation, an additive modifier can be appended that yields expressions in the form AdX+B or AdX-B. B is a number added to the sum of the rolls 
              (or subtracted from it). So, 1d20-10 would indicate a single roll of a 20-sided die with 10 being subtracted from the result.

              You're reading the rules of a famous Bugs and Bugfixes role-playing game involving dice. What is the maximum number of points you can get, assuming that you 
              roll the dice according to each formula present within rules?

              It is guaranteed that all the formulas that appear in rules are correct (i.e. A and X are always positive in a formula-like substring), and any two substrings 
              that may be formulas do not overlap. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/4GC4dP3gHRMcJDaRy


function bugAndBugFixes(rules) {
  var pattern = /(\d*)d(\d+)([+-]\d+)?/g;
  var formula = pattern.exec(rules);

  var res = 0;
  while (formula) {
    var rolls = formula[1] ? parseInt(formula[1]) : 1;
    var dieType = parseInt(formula[2]);
    var formulaMax = rolls * dieType;

    if (formula[3]) {
      if (formula[3][0] === '-') {
        formulaMax -= parseInt(formula[3].slice(1));
      }
      else {
        formulaMax += parseInt(formula[3].slice(1));
      }
    }

    res += formulaMax;
    formula = pattern.exec(rules);
  }

  return res;
}
