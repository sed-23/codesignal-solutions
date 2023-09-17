/* Question : You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it 
                is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most 
                    one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) 
                    that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.

                A box can be put into another box if all sides of the first one are less than the respective ones of the second one. 
                You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/sorting-outpost/9y4wLpcqnNozn92tG


function boxesPacking(l, w, h) {
    a = l.map((j,i)=>[j,w[i],h[i]].sort((x,y)=>x-y)).sort((x,y)=>x[0]-y[0])
    return [...Array(3).keys()].map(i=>a.map(j=>j[i])).every(i=>[...new Set(i)].sort((x,y)=>x-y).toString()==i.toString())
}
