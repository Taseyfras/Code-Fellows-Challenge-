//Creates the object "Library"
function Library() {

	this.AddShelf = function(shelf) {

		this.shelves.push(shelf);

	}
	this.shelves = [];
}


module.exports.Library = Library;

