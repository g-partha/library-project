const myLibrary = [];

function addBook(bookTitle, bookAuthor, bookReadStatus) {
    const newBook = new AddNewBook(bookTitle, bookAuthor, bookReadStatus);
    myLibrary.push(newBook);
}

function AddNewBook(title, author, readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.changeReadStatus = function() {
        if(this.readStatus == "Read"){
            this.readStatus = "Reading";
        } else if(this.readStatus == "Reading") {
            this.readStatus = "Not Started";
        } else if(this.readStatus == "Not Started"){
            this.readStatus = "Read";
        }
    }
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
const logo = document.createElement("div");
logo.classList.toggle("logo");
logo.innerText = "My Library Made With Javascript";
actionBar.appendChild(logo);
const newBookButton = document.createElement("button");
newBookButton.classList.toggle("new-book-button");
newBookButton.innerText = "Add New Book";
actionBar.appendChild(newBookButton);
newBookButton.addEventListener("click", addNewBookForm);
container.appendChild(actionBar);

const booksList = document.createElement("div");
booksList.classList.toggle("books-list");
container.appendChild(booksList);

function addNewBookForm(){
    const containerChildNodeList = container.childNodes;
    const containerChildNodeArray = [];
    containerChildNodeList.forEach(item => containerChildNodeArray.push(item.className))

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
        bookTitleField.setAttribute("required", "");
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
        bookAuthorField.setAttribute("required", "");
        const bookAuthorLabel = document.createElement("label");
        bookAuthorLabel.setAttribute("for", "book-author-field");
        bookAuthorLabel.innerText = "Author";
        newBookForm.appendChild(bookAuthorFieldContainer);
        bookAuthorFieldContainer.appendChild(bookAuthorLabel);
        bookAuthorFieldContainer.appendChild(bookAuthorField);

        const readStatusField = document.createElement("fieldset");
        readStatusField.classList.toggle("read-status-fieldset");
        const readStatusLegend = document.createElement("legend");
        readStatusLegend.innerText = "Status";
        const readStatusIsReadContainer = document.createElement("div");
        readStatusIsReadContainer.classList.toggle("read-status-radio-container");
        const readStatusIsReadLabel = document.createElement("label");
        readStatusIsReadLabel.setAttribute("for", "read-status-is-read");
        readStatusIsReadLabel.innerText = "Read";
        const readStatusIsRead = document.createElement("input");
        readStatusIsRead.setAttribute("type", "radio");
        readStatusIsRead.setAttribute("name", "read_status");
        readStatusIsRead.setAttribute("value", "Read");
        readStatusIsRead.setAttribute("id", "read-status-is-read");
        readStatusIsRead.setAttribute("required", "");
        readStatusIsRead.setAttribute("checked", "");
        const readStatusIsReadingContainer = document.createElement("div");
        readStatusIsReadingContainer.classList.toggle("read-status-radio-container");
        const readStatusIsReadingLabel = document.createElement("label");
        readStatusIsReadingLabel.setAttribute("for", "read-status-is-reading");
        readStatusIsReadingLabel.innerText = "Reading";
        const readStatusIsReading = document.createElement("input");
        readStatusIsReading.setAttribute("type", "radio");
        readStatusIsReading.setAttribute("name", "read_status");
        readStatusIsReading.setAttribute("value", "Reading");
        readStatusIsReading.setAttribute("id", "read-status-is-reading");
        const readStatusIsNotstartedContainer = document.createElement("div");
        readStatusIsNotstartedContainer.classList.toggle("read-status-radio-container");
        const readStatusIsNotStartedLabel = document.createElement("label");
        readStatusIsNotStartedLabel.setAttribute("for", "read-status-is-not-started");
        readStatusIsNotStartedLabel.innerText = "Not Started";
        const readStatusIsNotStarted = document.createElement("input");
        readStatusIsNotStarted.setAttribute("type", "radio");
        readStatusIsNotStarted.setAttribute("name", "read_status");
        readStatusIsNotStarted.setAttribute("value", "Not Started");
        readStatusIsNotStarted.setAttribute("id", "read-status-is-not-started");
        readStatusField.appendChild(readStatusLegend);
        readStatusIsReadContainer.appendChild(readStatusIsRead);
        readStatusIsReadContainer.appendChild(readStatusIsReadLabel);
        readStatusIsReadingContainer.appendChild(readStatusIsReading);
        readStatusIsReadingContainer.appendChild(readStatusIsReadingLabel);
        readStatusIsNotstartedContainer.appendChild(readStatusIsNotStarted);
        readStatusIsNotstartedContainer.appendChild(readStatusIsNotStartedLabel);
        readStatusField.appendChild(readStatusIsReadContainer);
        readStatusField.appendChild(readStatusIsReadingContainer);
        readStatusField.appendChild(readStatusIsNotstartedContainer);
        newBookForm.appendChild(readStatusField);

        const formButtonsContainer = document.createElement("div");
        formButtonsContainer.classList.toggle("form-buttons-container");
        const submitButton = document.createElement("button");
        submitButton.classList.toggle("form-buttons");
        submitButton.innerText = "Submit";
        submitButton.addEventListener("click", event => {
            event.preventDefault();
            console.log(!!bookTitleField.value);
            if(!!bookTitleField.value && !!bookAuthorField.value){
                booksList.innerHTML = "";
                const checkedReadStatus = document.querySelector("input:checked");
                addBook(bookTitleField.value, bookAuthorField.value, checkedReadStatus.value);
                fillBooksList();
            }
        })

        const cancelButton = document.createElement("button");
        cancelButton.classList.toggle("form-buttons");
        cancelButton.innerText = "Cancel";
        cancelButton.addEventListener("click", event => {
            event.preventDefault();
            container.removeChild(newBookForm);
        })

        formButtonsContainer.appendChild(submitButton);
        formButtonsContainer.appendChild(cancelButton);
        newBookForm.appendChild(formButtonsContainer);
    }
}

function fillBooksList(){
    myLibrary.forEach((item, index, array) => {
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
    const deleteBookButton = document.createElement("button");
    deleteBookButton.classList.toggle("delete-book-button");
    deleteBookButton.innerText = "Delete book";
    deleteBookButton.addEventListener("click", event => {
        event.preventDefault();
        array.splice(index, 1);
        booksList.innerHTML = "";
        fillBooksList();
    })
    const changeReadStatusButton = document.createElement("button");
    changeReadStatusButton.classList.toggle("change-read-status-button");
    changeReadStatusButton.innerText = "Change read status";
    changeReadStatusButton.addEventListener("click", event => {
        item.changeReadStatus();
        booksList.innerHTML = "";
        fillBooksList();
    })
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookReadStatus);
    bookCard.appendChild(changeReadStatusButton);
    bookCard.appendChild(deleteBookButton);
    booksList.appendChild(bookCard);
})
}

fillBooksList();

