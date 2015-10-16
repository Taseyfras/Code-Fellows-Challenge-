/*Create an HTML page to display the data below. 
It should use JS to update a tag with id="awesome-index" 
with the calculated average awesome-index of all 
programmers, and optionally dynamically load the data 
to show in the HTML. Add a little CSS, demonstrating 
properties of the "box model". Your solution should 
continue to work even if more people are added to 
the array. Write two versions, one using only vanilla JS,
 and one with lodash (or underscore) and jQuery, 
 making maximal use of those libraries. */

var table = [ 
{ 
name: 'Trinity', 
occupation: 'programmer', 
awesomeIndex: 10 
}, 
{ 
name: 'Mater', 
occupation: 'tow truck' 
}, 
{ 
name: 'Number 5', 
occupation: 'programmer', 
awesomeIndex: 7 
}, 
{ 
name: 'Alice', 
occupation: 'programmer', 
awesomeIndex: 9 
}, 
{ 
name: 'Zaphod', 
occupation: 'President of the Galaxy' 
}, 
{ 
name: 'Bob Parr', 
occupation: 'programmer', 
awesomeIndex: 6 
} 
];

//loops through "table" getting the awesomeIndexes and adding them to var sum,
//excluding the objects that don't have an awesome Index 
var sum = 0;
for (var i = 0; i < table.length; i++)
    {
         if (table[i].awesomeIndex === undefined)
             {
                table.splice(i, 1);
            }
         sum += table[i].awesomeIndex;   
    }

//divdes the "sum" by the amount of awesomeIndexes 
var average = sum / table.length

//loads the page before performing function, places
//the "average" in the span with the ide 'awesome-index'
window.onload = function(){
        document.getElementById('awesome-index').innerHTML = average;
  };

