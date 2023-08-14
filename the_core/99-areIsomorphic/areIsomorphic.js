/* Question : Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

                Given two two-dimensional arrays, check if they are isomorphic. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/list-backwoods/xKYm98etd9JRsTcZY


function areIsomorphic(array1, array2) {
    return array1.map(i=>i.length).toString()==array2.map(i=>i.length).toString()
}
