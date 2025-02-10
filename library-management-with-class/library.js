// create book class
class Book {
  constructor(title, author, isbn, copiesAvailable) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copiesAvailable = copiesAvailable;
  }

  borrowBook() {
    if (this.copiesAvailable > 0) {
      this.copiesAvailable--;
      return true;
    } else {
      console.log(`Sorry ${this.title} is not available`);
    }
  }

  returnBook() {
    this.copiesAvailable--;
  }

  getDetails() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn}) - Copies Available: ${this.copiesAvailable}`;
  }
}

// create user class

class User {
  constructor(name, email, userID) {
    this.name = name;
    this.email = email;
    this.userID = userID;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.borrowBook()) {
      this.borrowedBooks.push(book);
      console.log(`${this.name} borrowed ${book.title}`);
    }
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);

    if (index != -1) {
      this.borrowedBooks.splice(index, 1);
      book.returnBook();
      console.log(`${this.name} returned ${book.title}`);
    } else {
      console.log(`${this.name} did not borrow ${book.title}`);
    }
  }

  viewBorrowBooks() {
    if (this.borrowedBooks.length === 0) {
      console.log(`${this.name} has not borrowed any books`);
    } else {
      console.log(`${this.name} borrowed`);
      this.borrowedBooks.forEach((book) => console.log(book.getDetails()));
    }
  }
}

/// create admin inheritance

class Admin extends User {
  constructor(name, email, userID) {
    super(name, email, userID);
  }
  addBook(library, book) {
    library.addBook(book);
    console.log(`Admin ${this.name} added ${book.title} to the library`);
  }
  removeBook(library, bookTitle) {
    library.removeBook(bookTitle);
    console.log(`Admin ${this.name} removed ${bookTitle} from the library`);
  }
  listAllBorrowBooks(library) {
    console.log("All Borrowed Books");
    library.user;
  }
}

// create library class

class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookTitle) {
    this.books = this.books.filter((book) => book.title !== bookTitle);
  }

  listBooks() {
    console.log("Library Books");
    this.books.forEach((book) => console.log(book.getDetails()));
  }

  searchBooks(keyword) {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(keyword.titleLowerCase()) ||
        book.author.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  addUser(user) {
    this.users.push(user);
  }

  listUsers() {
    console.log("Library Users");
    this.users.forEach((user) => console.log(`${user.name} (${user.email})`));
  }
}

// Example Usage
const library = new Library();
const admin = new Admin("Rafi", "rafi@gmail.com", "01");

// searching books


// adding Books;
const books1 = new Book("Harry Potter", "J.K Rowling", "12345678", 19);
const books2 = new Book("Amar Bangla Boi", "Mahdi Hasan Rafi", 30);

// admin can addBook
// admin.addBook(library, books1);
admin.addBook(library, books2);
admin.removeBook(library,"Amar Bangla Boi");
library.listBooks();

// searching books

/// adding users;
const user1 = new User("mahdirafi", "madhirafi@gmail.com", "02");
library.addUser(user1);
library.listUsers();

// borrowing books
user1.borrowBook(books1);
user1.viewBorrowBooks();

// returning books;
user1.returnBook(books1);

user1.viewBorrowBooks();

// admin checking borrowed books;
admin.listAllBorrowBooks(library);
