/* Q: Given a year, return the century it is in.
      The first century spans from the year 1 up to and including the year 100,
      the second - from the year 101 up to and including the year 200, etc. */

// URL : https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

function centuryFromYear(year) {
    return Math.ceil(year/100);
}

exports.centuryFromYear = centuryFromYear;
