/* Question : HTML tables allow web developers to arrange data into rows and columns of cells. They are created using the <table> tag. Its content consists of one or 
              more rows denoted by the <tr> tag. Further, the content of each row comprises one or more cells denoted by the <td> tag, and content within the <td> tags 
              is what site visitors see in the table. For this task assume that tags have no attributes in contrast to real world HTML.

              Some tables contain the <th> tag. This tag defines header cells, which shouldn't be counted as regular cells.

              You are given a rectangular HTML table. Extract the content of the cell with coordinates (row, column).

              If you are not familiar with HTML, check out this note. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/secret-archives/mnELCFheQvkbcytcz


function HTMLTable(table, row, column) {
  matchRow = /<tr>(.+?)<\/tr>/g
  matchCell = /<td>(.+?)<\/td>/g
  for (r = i = 0; i <= row ; ++i)
      r = matchRow.exec(table)
  for (c = i = 0; r && i <= column; ++i)
      c = matchCell.exec(r[1])
  return c ? c[1] : "No such cell"
}
