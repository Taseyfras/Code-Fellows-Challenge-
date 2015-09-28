/*Model a library using objects. *  
A library contains shelves. Shelves contain books. Books have 
an author and a title. Include methods to add and remove a 
shelf, and methods to add/remove a book. Use a modular 
approach so that each type of object is contained in its 
own file. Add any additional functionality you think 
is appropriate. Create a "main" file that demonstrates 
the capabilities of your library.*/

/*require tells main.js to import functions from the named modules*/
var Book = require("./Books.js").Book;
var AllBooks = require("./Books.js").AllBooks;
var Shelf = require("./Shelves.js").Shelf;
var AllShelves = require("./Shelves.js").AllShelves;
var Library = require("./Library.js").Library;



/*logs all the shelves that were added in the Library to the console*/
console.log(AllShelves);


/*loops through "AllShelves" getting the "ShelfName" to see if it is equal to "Side"*/
for (var i = 0; i < AllShelves.length; i++)
    if (AllShelves[i].ShelfName === "Side") { 
/*i is a placeholder- at the position "Side" one item is removed from "AllShelves"*/
        AllShelves.splice(i, 1);
    }
/*logs all the shelves excluding the one we just removed*/
console.log(AllShelves);


console.log(AllBooks);

for (var i = 0; i < AllBooks.length; i++)
    if (AllBooks[i].title === "Daily Rituals: How Artists Work") { 
        AllBooks.splice(i, 1);
    }

console.log(AllBooks);