/* Q: An IP address is a numerical label assigned to each device (e.g., computer, printer) participating
     in a computer network that uses the Internet Protocol for communication. There are two versions of
     the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
    Given a string, find out if it satisfies the IPv4 address naming rules. */

// URL : https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso

function isIPv4Address(inputString) {
    var s = inputString.split(".")
    return s.length===4&&s.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256)
}

exports.isIPv4Address = isIPv4Address;
