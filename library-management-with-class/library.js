// create book class
class Book {
    constructor(title, author, isbn, copiesAvailable){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copiesAvailable = copiesAvailable;
    }


    borrowBook(){
        if(this.copiesAvailable > 0){
            this.copiesAvailable--;
           return true;
        }else{
            console.log(`Sorry ${this.title} is not available`)
        }
    }

    returnBook(){
        this.copiesAvailable--;
    
    }

    getDetails(){
        return `${this.title} by ${this.author} (ISBN: ${this.isbn}) - Copies Available: ${this.copiesAvailable}`;
    }

}

// create user class 

class User {
    constructor(name, email, userID){
        this.name = name;
        this.email = email;
        this.userID = userID;
        this.borrowedBooks = [];
    }

    borrowBook(book){
        if(book.borrowBook()){
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}`)
        }

    }

    returnBook(book){
        const index = this.borrowedBooks.indexOf(book);

        if(index != -1){
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            console.log(`${this.name} returned ${book.title}`)
        }else{
            console.log(`${this.name} did not borrow ${book.title}`)
        }

    }

    viewBorrowBooks(){
        
    }
}

/// create admin inheritance

class Admin extends User {
    constructor(){
        super();
    }
    addBook(){}
    removeBook(){}
    listAllBorrowBooks(){}
}

// create library class

class Library {
    addUser(){}
    listUser(){}
    addBook(){}
    listBooks(){}
    searchBooks(){}
}