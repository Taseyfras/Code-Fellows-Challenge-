//Creates the object "Shelf" with a function to add a book to an array and iterate
//through that array to then delete a book.
function Shelf(ShelfName) {

	this.ShelfName = ShelfName;
	this.AddBook = function(book) {

		this.books.push(book);

	}
	this.DeleteBook = function(book) {
		for (var i = 0; i < this.books.length; i++)
		{
    		if (this.books[i].title == "Daily Rituals: How Artists Work")
    		{
        		this.books.splice(i, 1);
   			}
		}
	}
	this.books = [];
}

//exports the function in this module
module.exports.Shelf = Shelf;



