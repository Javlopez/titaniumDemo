if(OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}
var myBooks = Alloy.Collections.Books;

var book = Alloy.createModel('Books',{
	title: 'Great Expectations',
	author: 'Charles Dickens',
});

myBooks.add(book);
book.save();

function showBook(event){
	var selectedBox = event.source;
	var args = {
		title: selectedBox.title,
		author: selectedBox.author,
	};
	var bookview = Alloy.createController("bookdetails", args).getView();
	if (OS_IOS) {
        $.navGroupWin.openWindow(bookview);
    }
    if (OS_ANDROID) {
        bookview.open();
    }  
}


function addBook(){
	var myAddBook= Alloy.createController("addbook",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(myAddBook);
    }
    if (OS_ANDROID) {
        myAddBook.open();
    }	
}

