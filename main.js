const addNewbookButton = document.querySelector(".addNew");
const cancelSubmission = document.querySelector(".cancelSubmission");
const addbookModal = document.querySelector(".addBookModal");

addNewbookButton.addEventListener("click", () => {
    addbookModal.showModal();
})
 
cancelSubmission.addEventListener("click", () => {
    addbookModal.close();
    document.getElementById("addNewBookModalForm").reset();
})



const addBookform = document.getElementById("addNewBookModalForm");

function Book(name, author, quote, finished){
    this.name = name;
    this.author = author;
    this.quote = quote;
    this. finished = finished;
}

addBookform.addEventListener("submit", () => {
    event.preventDefault();
    addbookModal.close();
    
    const name = document.getElementById("bookName").value;
    const author = document.getElementById("authorName").value;
    const quote = document.getElementById("favquote").value;
    const finished = document.getElementById("finishCheck").checked;

    const book = new Book(name, author, quote, finished);

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const container = document.getElementById("container");
    container.appendChild(bookCard);

    const bookCardTitle = document.createElement("div") 
    bookCardTitle.classList.add("bookCardTitle")
    bookCardTitle.textContent = book.name
    bookCard.appendChild(bookCardTitle)

    const bookCardAuthor = document.createElement("div"); 
    bookCardAuthor.classList.add("bookCardAuthor")
    bookCardAuthor.textContent = `—${book.author}`
    bookCard.appendChild(bookCardAuthor);

    const bookCardQoute = document.createElement("div");
    bookCardQoute.classList.add("bookCardQoute")
    if(book.quote){
        bookCardQoute.textContent= `"${book.quote}"`
    }
    bookCard.appendChild(bookCardQoute);

    if(book.quote){
        if (book.finished) {
            bookCard.style.borderLeft = "10px solid rgb(0, 180, 0)";
            bookCardTitle.style.color = "rgb(0, 180, 0)";
            bookCardAuthor.style.color = "rgb(0, 140, 0)";
        } else {
            bookCard.style.borderLeft = "10px solid yellow";
            bookCardTitle.style.color = "yellow";
            bookCardAuthor.style.color = "gold";
        }
    } else {
        bookCard.style.borderLeft = "10px solid red";
        bookCardTitle.style.color = "red";
        bookCardAuthor.style.color = "crimson";
    }
    document.getElementById("addNewBookModalForm").reset();
})