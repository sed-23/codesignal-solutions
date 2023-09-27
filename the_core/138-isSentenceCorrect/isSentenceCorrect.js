/* Question :   A sentence is considered correct if:

                it starts with a capital letter;
                it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
                full stops, question marks and exclamation points don't appear anywhere else in the sentence.
                Given a sentence, return true if it is correct and false otherwise. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/regular-hell/mj4qdJqZknbkHNzhK


function isSentenceCorrect(sentence) {
    var re = /^[A-Z][^.?!]*[.?!]$/;
    return re.test(sentence);
  }