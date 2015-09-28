/*creates an array to hold all of the Books*/
var AllBooks = [];

/*makes a constructor function, outlines the properties*/
function Book (BookTitle, AuthorLastName, AuthorFirstName, ShelfName) { 

this.title = BookTitle;
this.lastname = AuthorLastName;
this.firstname = AuthorFirstName;
this.shelfname = ShelfName;
/*.push is what pushes the object created by this function to the array "AllBooks"*/
AllBooks.push(this);
}

/*exports the function/Array in this module*/
module.exports.AllBooks = AllBooks;
module.exports.Book = Book;



