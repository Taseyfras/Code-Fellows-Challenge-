/*If a module utilzes functions from another module, those functions must be required*/
var Book = require("./Books.js").Book;
var Shelf = require("./Shelves.js").Shelf;


/*new Book is the keyword to invoke "Shelf" the constructor function*/
var Top = new Shelf ("Top");
var Middle = new Shelf ("Middle");
var Bottom = new Shelf ("Bottom");
var Side = new Shelf ("Side");


/*new Book is the keyword to invoke "Book" the constructor function*/
var Middlemarch = new Book ("Middlemarch", "Eliot", "George", "Top");
var DifferentSeasons = new Book ("Different Seasons", "King", "Stephen", "Top");
var ThePowerBroker = new Book ("The Power Broker", "Caro", "Robert", "Top");
var KeepTheRiverOnYourRight = new Book ("Keep the River on Your Right", "Schneebaum", "Tobias", "Middle");
var TrainDreams = new Book ("Train Dreams", "Johnson", "Denis", "Middle");
var IsaDoesIt = new Book ("Isa Does It", "Moskowitz", "Isa", "Middle");
var TheMasterAndMargarita = new Book ("The Master and Margarita", "Bulgakov", "Mikhail", "Bottom");
var GoodOmens = new Book ("Good Omens", "Gaiman", "Neil", "Bottom");
var GlitterAndGlue = new Book ("Glitter and Glue", "Corrigan", "Kelly", "Bottom");
var DailyRituals = new Book ("Daily Rituals: How Artists Work", "Currey", "Mason", "Bottom");


module.exports.Library;