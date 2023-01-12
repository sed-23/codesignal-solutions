/* Q: A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

    The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
    Your task is to check by given string inputString whether it corresponds to MAC-48 address or not. */

// URL : https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm



function lineEncoding(s) {
    return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
}

exports.lineEncoding = lineEncoding;