var AllShelves = [];

var Shelf = function(ShelfName) { 

this.ShelfName = ShelfName;
AllShelves.push(this);


}


module.exports.Shelf= Shelf;
module.exports.AllShelves = AllShelves;


