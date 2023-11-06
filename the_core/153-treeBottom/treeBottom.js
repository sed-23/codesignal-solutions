/* Question : You are given a recursive notation of a binary tree: each node of a tree is represented as a set of three elements:

              value of the node;
              left subtree;
              right subtree.
              So, a tree can be written as (value left_subtree right_subtree). It is guaranteed that 1 ≤ value ≤ 109. If a node doesn't exist 
              then it is represented as an empty set: (). For example, here is a representation of a tree in the given picture: 
              
              (2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))


              Your task is to obtain a list of nodes, that are the most distant from the tree root, in the order from left to right.

              In the notation of a node its value and subtrees are separated by exactly one space character.
              */ 

// URL : https://app.codesignal.com/arcade/code-arcade/secret-archives/ptyXoxtZfrPSNRe5m


function treeBottom(tree) {
  var d = 0, l = 0;
  return tree.match(/\(|\)|\d+/g).reduce((r, c) => {
      if (c == '(') ++d
      else if (c == ')') --d
      else if (l == d) r.push(c|0)
      else if (l < d) {
          r = [c|0]
          l = d
      }
      return r
  }, [])
}
