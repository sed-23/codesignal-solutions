/* Question : Proper nouns always begin with a capital letter, followed by small letters.

              Correct a given proper noun so that it fits this statement. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/book-market/2nSEQ8CGoddTJtnbo


function properNounCorrection(noun) {
  return noun[0].toUpperCase() + noun.slice(1).toLowerCase()
}
