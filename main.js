const addNewbookButton = document.querySelector(".addNew");
const cancelSubmission = document.querySelector(".cancelSubmission");
const addbookModal = document.querySelector(".addBookModal");




function generateUniqueID() {
    return `book_${Math.floor(Math.random() * 1000000)}`;
}
const bookCollection = {};
const addBookform = document.getElementById("addNewBookModalForm");

addNewbookButton.addEventListener("click", () => {
    addbookModal.showModal();
})
 
cancelSubmission.addEventListener("click", () => {
    addbookModal.close();
    addBookform.reset();
})


function Book(bookID, name, author, quote, finished){
    this.bookID = bookID;
    this.name = name;
    this.author = author;
    this.quote = quote;
    this.finished = finished;
}

addBookform.addEventListener("submit", () => {
    event.preventDefault();
    addbookModal.close();
    
    const name = document.getElementById("bookName").value;
    const author = document.getElementById("authorName").value;
    const quote = document.getElementById("favquote").value;
    const finished = document.getElementById("finishCheck").checked;
    const bookID = generateUniqueID();

    const book = new Book(bookID, name, author, quote, finished);
    bookCollection[bookID] = book;

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard", bookID);

    const cardAction = document.createElement("div")
    cardAction.classList.add("cardAction")
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn", "cardActBtns");
    const editBtnicon = document.createElement("img");
    editBtnicon.classList.add("editBtnicon", "icon");
    editBtnicon.src = "icons/edit.svg";
    editBtnicon.alt = "Edit icon";
    editBtn.appendChild(editBtnicon);
    cardAction.appendChild(editBtn);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn", "cardActBtns");
    const deleteBtnicon = document.createElement("img");
    deleteBtnicon.classList.add("deleteBtnicon", "icon");
    deleteBtnicon.src = "icons/delete.svg";
    deleteBtnicon.alt = "delete icon";
    deleteBtn.appendChild(deleteBtnicon);
    cardAction.appendChild(deleteBtn)
    
    bookCard.appendChild(cardAction)
    

    const container = document.getElementById("container");
    container.appendChild(bookCard);

    const bookCardTitle = document.createElement("div") 
    bookCardTitle.classList.add("bookCardTitle", `${bookID}_Title`)
    bookCardTitle.textContent = book.name
    bookCard.appendChild(bookCardTitle)

    const bookCardAuthor = document.createElement("div"); 
    bookCardAuthor.classList.add("bookCardAuthor", `${bookID}_Author`)
    bookCardAuthor.textContent = `—${book.author}`
    bookCard.appendChild(bookCardAuthor);

    const bookCardQoute = document.createElement("div");
    bookCardQoute.classList.add("bookCardQoute", `${bookID}_Qoute`)
    if(book.quote){
        bookCardQoute.textContent= `"${book.quote}"`
    }
    bookCard.appendChild(bookCardQoute);
    
// LOGIC ISSUE WITH QOUTE< WHAT IF IT'S NOT GIVEN!
    if (book.finished) {
        bookCard.style.borderLeft = "10px solid rgb(0, 180, 0)";
        bookCardTitle.style.color = "rgb(0, 180, 0)";
        bookCardAuthor.style.color = "rgb(0, 140, 0)";
    }
    else{
        if(book.quote){
            bookCard.style.borderLeft = "10px solid yellow";
            bookCardTitle.style.color = "yellow";
            bookCardAuthor.style.color = "gold";
        } else {
            bookCard.style.borderLeft = "10px solid red";
            bookCardTitle.style.color = "red";
            bookCardAuthor.style.color = "crimson";
        }
    }
    console.log(book)
    addBookform.reset();
})


const confirmation = document.querySelector(".deleteConfirmDiv");
let bookTodelete = null;
let bookToedit = null;
let getBookID;

let editName;
let editAuthor;
let editQuote;
let editFinish;
const editbookModal = document.querySelector(".editBookModal");
const editBookform = document.getElementById("editBookModalForm");

document.getElementById("container").addEventListener("click", (e) => {
    if (e.target.closest(".editBtn")) {

        bookToedit = e.target.closest(".bookCard");
        console.log("Edit button pressed");
        getBookID = bookToedit.classList[1];
        getBookObj = bookCollection[getBookID];
        console.log(getBookObj);

        editName = document.getElementById("bookNameEdit");
        editName.value = getBookObj.name;

        editAuthor = document.getElementById("authorNameEdit");
        editAuthor.value = getBookObj.author;

        editQuote = document.getElementById("favquoteEdit");
        editQuote.value = getBookObj.quote;

        editFinish = document.getElementById("finishCheckEdit");
        editFinish.checked = getBookObj.finished;

        editbookModal.showModal();





        const cancelEditSubmission = document.querySelector(".cancelEditSubmission");
        cancelEditSubmission.addEventListener("click", () => {
            editbookModal.close();
            editBookform.reset();
        })
    }


    if (event.target.closest(".deleteBtn")) {
        bookTodelete = event.target.closest(".bookCard");
        console.log("Delete button pressed");
        
        confirmation.showModal();

    }
});


editBookform.addEventListener("submit", () => {
    event.preventDefault();
    console.log(bookCollection[getBookID]);

    getBookObj.name = editName.value;
    getBookObj.author = editAuthor.value;
    getBookObj.quote = editQuote.value;
    getBookObj.finished = editFinish.checked;
    console.log(getBookObj);

    console.log(getBookID)
    console.log(`#${getBookID}`)

    const updateBookCardName = document.querySelector(`.${getBookID}_Title`);
    updateBookCardName.textContent = getBookObj.name;

    const updateBookCardAuthor = document.querySelector(`.${getBookID}_Author`);
    updateBookCardAuthor.textContent = getBookObj.author;

    const updateBookCardQoute = document.querySelector(`.${getBookID}_Qoute`);
    updateBookCardQoute.textContent = getBookObj.quote;

    if (getBookObj.finished) {
        document.querySelector(`.${getBookID}`).style.borderLeft = "10px solid rgb(0, 180, 0)";
        document.querySelector(`.${getBookID}_Title`).style.color = "rgb(0, 180, 0)";
        document.querySelector(`.${getBookID}_Author`).style.color = "rgb(0, 140, 0)";
    }
    else{
        if(getBookObj.quote){
            document.querySelector(`.${getBookID}`).style.borderLeft = "10px solid yellow";
            document.querySelector(`.${getBookID}_Title`).style.color = "yellow";
            document.querySelector(`.${getBookID}_Author`).style.color = "gold";
        } else {
            document.querySelector(`.${getBookID}`).style.borderLeft = "10px solid red";
            document.querySelector(`.${getBookID}_Title`).style.color = "red";
            document.querySelector(`.${getBookID}_Author`).style.color = "crimson";
        }
    }


    editbookModal.close();
    editBookform.reset();
})




document.getElementById("confirmDelete").addEventListener("click", () => {
    bookTodelete.remove();
    confirmation.close();
})

document.getElementById("cancelDelete").addEventListener("click", () => {
    bookTodelete = null;
    confirmation.close();
})