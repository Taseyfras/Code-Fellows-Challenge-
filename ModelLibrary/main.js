/*Model a library using objects. *  
A library contains shelves. Shelves contain books. Books have 
an author and a title. Include methods to add and remove a 
shelf, and methods to add/remove a book. Use a modular 
approach so that each type of object is contained in its 
own file. Add any additional functionality you think 
is appropriate. Create a "main" file that demonstrates 
the capabilities of your library.*/

//require tells main.js to import functions from the named modules
var Book = require("./Books.js").Book;
var Shelf = require("./Shelves.js").Shelf;
var Library = require("./Library.js").Library;

//new Library is the keyword to invoke "Library" the constructor function
var MainLibrary = new Library();

//new Shelf is the keyword to invoke "Shelf" the constructor function
var Top = new Shelf("Top");
var Middle = new Shelf("Middle");
var Bottom = new Shelf("Bottom");
var Side = new Shelf("Side");

//function of a Library, adding a Shelf
MainLibrary.AddShelf(Top);
MainLibrary.AddShelf(Middle);
MainLibrary.AddShelf(Bottom);
MainLibrary.AddShelf(Side);

//new Book is the keyword to invoke "Book" the constructor function
var Middlemarch = new Book ("Middlemarch", "Eliot", "George");
var DifferentSeasons = new Book ("Different Seasons", "King", "Stephen");
var ThePowerBroker = new Book ("The Power Broker", "Caro", "Robert");
var KeepTheRiverOnYourRight = new Book ("Keep the River on Your Right", "Schneebaum", "Tobias");
var TrainDreams = new Book ("Train Dreams", "Johnson", "Denis");
var IsaDoesIt = new Book ("Isa Does It", "Moskowitz", "Isa");
var TheMasterAndMargarita = new Book ("The Master and Margarita", "Bulgakov", "Mikhail");
var GoodOmens = new Book ("Good Omens", "Gaiman", "Neil");
var GlitterAndGlue = new Book ("Glitter and Glue", "Corrigan", "Kelly");
var DailyRituals = new Book ("Daily Rituals: How Artists Work", "Currey", "Mason");

//function of a Shelf, adding a Book
Top.AddBook(Middlemarch);
Top.AddBook(DifferentSeasons);
Top.AddBook(ThePowerBroker);
Middle.AddBook(KeepTheRiverOnYourRight);
Middle.AddBook(TrainDreams);
Middle.AddBook(IsaDoesIt);
Bottom.AddBook(TheMasterAndMargarita);
Bottom.AddBook(GoodOmens);
Bottom.AddBook(GlitterAndGlue);
Side.AddBook(DailyRituals);

//Full Library in JSON so it can be read easily in the console
console.log(JSON.stringify(MainLibrary));

//function of a Shelf, deleting a Book
Side.DeleteBook(DailyRituals);

console.log(JSON.stringify(MainLibrary));

//function of a Library, deleting a Shelf
MainLibrary.DeleteShelf(Side);

console.log(JSON.stringify(MainLibrary));