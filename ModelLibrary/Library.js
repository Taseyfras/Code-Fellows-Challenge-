//Creates the object "Library" with a function to add a shelf to an array and iterate
//through that array to then delete a shelf.
function Library() {

	this.AddShelf = function(shelf) {

		this.shelves.push(shelf);

	}
	this.DeleteShelf = function(shelf) {
		for (var i = 0; i < this.shelves.length; i++)
		{
    		if (this.shelves[i].ShelfName == "Side")
    			{
        		this.shelves.splice(i, 1);
    			}
		}
	}
	this.shelves = [];
}

//exports the function in this module
module.exports.Library = Library;

