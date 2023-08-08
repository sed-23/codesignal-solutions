/* Question : You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string? */ 

// URL : https://app.codesignal.com/arcade/code-arcade/spring-of-integration/tKwbrKAQhoCZFqg33


function cyclicString(s) {
    var length = 1;
    while (s.slice(0, length).repeat(s.length).slice(0, s.length) != s)
        length++;
    return length;
}
