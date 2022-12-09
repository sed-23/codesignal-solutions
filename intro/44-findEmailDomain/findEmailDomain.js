/* Q: An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"),
     an "@" symbol, then a domain part ("example.com").

    The domain name part of an email address may only consist of letters, digits, hyphens and dots. 
    The local part, however, also allows a lot of different special characters. 
    Here you can look at several examples of correct and incorrect email addresses.

    Given a valid email address, find its domain part. */

// URL : https://app.codesignal.com/arcade/intro/level-10/TXFLopNcCNbJLQivP


function findEmailDomain(address) {
    return address.split('@').pop()
}

exports.findEmailDomain = findEmailDomain;
