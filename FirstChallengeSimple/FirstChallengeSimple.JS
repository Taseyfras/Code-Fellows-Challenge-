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

/* creates a new array, "AwesomeIndex" */
var AwesomeIndex = []; 
/* loops through "table" getting the awesomeIndexes */
var count = table.length;
    for (i=0; i < count; i++ )                 
    {
/* places table[i].awesomeIndex into a new variable
to tidy up my code */    	
   var consolidate = table[i].awesomeIndex;
/* if "consolidate" is not undefined, it gets pushed to
"AwesomeIndex". If it is undefined, it does not*/    
    if (consolidate != undefined)
    {
    	AwesomeIndex.push(consolidate), '';
    }
    	else {}
}; 

var sum = 0;
/* loops through "AwesomeIndex" adding the awesomeIndexes
together and placing the total into "sum" */
    var counter = AwesomeIndex.length;
    for (i=0; i < counter; i++ )
    {
        sum += AwesomeIndex[i];
};
/* divdes the "sum" by the amount of awesomeIndexes */
var average = sum / AwesomeIndex.length

/* loads the page before performing function, places
the "average" in the span with the ide 'awesome-index'*/
window.onload = function(){
        document.getElementById('awesome-index').innerHTML = average;
  };

