/* Question : Given a character, check if it represents an odd digit, an even digit or not a digit at all. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/lab-of-transformations/QKnGhkoi4wKr6xY9b


function characterParity(symbol) {
    if (symbol >= '0' && symbol <= '9') {
        return symbol % 2 == 0 ? 'even' : 'odd';
    }
    return 'not a digit';

}