/* Question : You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

            the crossword must contain exactly four words;
            these four words should form four pairwise intersections;
            all words must be written either left-to-right or top-to-bottom;
            the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
            Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/W5Sq7taLSzNHh8GiF


function crosswordFormations(words) {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    let a = words[i];
    for (let a1 = 0; a1 < (a.length - 1); a1++) {
      for (let j = 0; j < 4; j++) {
        if (j == i) {
          continue;
        }
        let b = words[j];
        for (let b2 = 1; b2 < b.length; b2++) {
          if (b[b2] != a[a1]) {
            continue;
          }
          for (let b1 = 0; b1 < (b2 - 1); b1++) {
            for (let k = 0; k < 4; k++) {
              if (k == i || k == j) 
              { continue; }
              let c = words[k], d = words[6 - i - j - k];
              if (b2 - b1 >= d.length) {
                continue;
              }
              for (let c1 = 0; c1 < (c.length - 1); c1++) {
                if (c[c1] != b[b1]) {
                  continue;
                }
                for (let c2 = (c1 + 2); c2 < c.length; c2++) {
                  let a2 = a1 + (c2 - c1); if (a2 >= a.length) {
                    continue;
                  }
                  for (let d1 = 0; d1 < d.length; d1++) {
                    if (d[d1] != c[c2]) { continue; }
                    let d2 = d1 + (b2 - b1);
                    if (d2 >= d.length) {
                      break;
                    }
                    if (a[a2] != d[d2]) {
                      continue;
                    }
                    count += 1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
}
