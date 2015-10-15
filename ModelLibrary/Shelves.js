function Shelf() {

	this.AddBook = function(book) {

		this.books.push(book);

	}
	this.books = [];
}

module.exports.Shelf = Shelf;



