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


/* .pluck(collection, path) gets the property value of 'awesomeIndex'
from 'table' */
var result = _(table).pluck('awesomeIndex').value();
//.compact() creates an array without false values
var AwesomeIndex = _.compact(result)

var sum = 0;
//$ is the jQuery function, .each calls up looping counter
$.each(AwesomeIndex,function() {
/*"this" is a variable, it works with the counter because a numeric value
would cause an error - like a stand-in object*/
sum += this;
});
 
var average = sum/AwesomeIndex.length;
//.html() sets the content of th identified element
 $("#awesome-index").html(average);
