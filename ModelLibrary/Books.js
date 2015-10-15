/*makes a constructor function, outlines the properties*/
function Book (BookTitle, AuthorLastName, AuthorFirstName) { 

this.title = BookTitle;
this.lastname = AuthorLastName;
this.firstname = AuthorFirstName;
}

/*exports the function in this module*/
module.exports.Book = Book;



