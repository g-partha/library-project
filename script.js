const myLibrary = [];

function addBook(bookTitle, bookAuthor, bookReadStatus) {
    const newBook = new AddNewBook(bookTitle, bookAuthor, bookReadStatus);
    myLibrary.push(newBook);
}

function AddNewBook(title, author, readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

// The following books are used as placeholder books
addBook("To Kill a Mockingbird", "Harper Lee", "Read");
addBook("1984", "George Orwell", "Read");
addBook("Pride and Prejudice", "Jane Austen", "Reading");
addBook("The Great Gatsby", "F. Scott Fitzgerald", "Not yet started");
addBook("Moby-Dick", "Herman Melville", "Read");
addBook("War and Peace", "Leo Tolstoy", "Not yet started");
addBook("The Catcher in the Rye", "J.D. Salinger", "Reading");
addBook("Crime and Punishment", "Fyodor Dostoevsky", "Read");
addBook("The Lord of the Rings", "J.R.R. Tolkien", "Read");
addBook("One Hundred Years of Solitude", "Gabriel García Márquez", "Not yet started");

const container = document.querySelector(".container");
const actionBar = document.createElement("div");
actionBar.classList.toggle("action-bar");
container.appendChild(actionBar);
const logo = document.createElement("div");
logo.classList.toggle("logo");
actionBar.appendChild(logo);
const newBookButton = document.createElement("button");
newBookButton.classList.toggle("new-book-button");
newBookButton.innerText = "Add New Book";
actionBar.appendChild(newBookButton);
newBookButton.addEventListener("click", addNewBookForm);
const booksList = document.createElement("div");
booksList.classList.toggle("books-list");
container.appendChild(booksList);

function addNewBookForm(){
    // const containerChildNodeList = container.childNodes;
    // console.log(containerChildNodeList);
    // const containerChildNodeArray = [];
    // containerChildNodeList.forEach(item => )
    // console.log(containerChildNodeArray);

    if(!(containerChildNodeArray.includes("new-book-form"))){
        const newBookForm = document.createElement("form");
        newBookForm.classList.toggle("new-book-form");
        container.insertBefore(newBookForm, booksList);

        const bookTitleFieldContainer = document.createElement("div");
        bookTitleFieldContainer.classList.toggle("book-title-field-container");
        const bookTitleField = document.createElement("input");
        bookTitleField.setAttribute("type", "text");
        bookTitleField.setAttribute("id", "book-title-field");
        bookTitleField.setAttribute("name", "title");
        const bookTitleLabel = document.createElement("label");
        bookTitleLabel.setAttribute("for", "book-title-field");
        bookTitleLabel.innerText = "Title";
        newBookForm.appendChild(bookTitleFieldContainer);
        bookTitleFieldContainer.appendChild(bookTitleLabel);
        bookTitleFieldContainer.appendChild(bookTitleField);

        const bookAuthorFieldContainer = document.createElement("div");
        bookAuthorFieldContainer.classList.toggle("book-author-field-container");
        const bookAuthorField = document.createElement("input");
        bookAuthorField.setAttribute("type", "text");
        bookAuthorField.setAttribute("id", "book-author-field");
        bookAuthorField.setAttribute("name", "author");
        const bookAuthorLabel = document.createElement("label");
        bookAuthorLabel.setAttribute("for", "book-author-field");
        bookAuthorLabel.innerText = "Author";
        newBookForm.appendChild(bookAuthorFieldContainer);
        bookAuthorFieldContainer.appendChild(bookAuthorLabel);
        bookAuthorFieldContainer.appendChild(bookAuthorField);
    }
}

function fillBooksList(){
    myLibrary.forEach(item => {
    const bookCard = document.createElement("div");
    bookCard.classList.toggle("book-card");
    const bookTitle = document.createElement("div");
    bookTitle.classList.toggle("book-title");
    bookTitle.innerText = item.title;
    const bookAuthor = document.createElement("div");
    bookAuthor.classList.toggle("book-author");
    bookAuthor.innerText = item.author;
    const bookReadStatus = document.createElement("div");
    bookReadStatus.classList.toggle("book-read-status");
    bookReadStatus.innerText = item.readStatus;
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookReadStatus);
    booksList.appendChild(bookCard);
})
}

fillBooksList();

