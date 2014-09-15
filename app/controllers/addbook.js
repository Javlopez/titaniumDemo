var myBooks = Alloy.Collections.Books;

function addBook(){
	var book = Alloy.createModel('Books',{
		title : $.titleInput.value,
        author : $.authorInput.value		
	});
	myBooks.add(book);
    book.save();
    // Close the window.
    $.addbook.close();
}