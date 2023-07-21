/* Question : You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

                Given the starting HTML tag, find the appropriate end tag which your editor should propose.

                If you are not familiar with HTML, consult with this note. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/book-market/MX94DWTrwQw2gLrTi


function HTMLEndTagByStartTag(startTag) {
    return `</${startTag.match(/\w+/)[0]}>`;
}
