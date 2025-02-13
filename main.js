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
    this.finished = finished;
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
    // #########################################################################
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
    
    

    // ##############################################################################################

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
    document.getElementById("addNewBookModalForm").reset();
})


const confirmation = document.querySelector(".deleteConfirmDiv");
let bookTodelete = null;
document.getElementById("container").addEventListener("click", (event) => {
    if (event.target.closest(".editBtn")) {
        console.log("Edit button pressed");
        
    }

    if (event.target.closest(".deleteBtn")) {
        bookTodelete = event.target.closest(".bookCard");
        console.log("Delete button pressed");
        
        confirmation.style.display = "block";
    }
});


document.getElementById("confirmDelete").addEventListener("click", () => {
    bookTodelete.remove();
    confirmation.style.display = "none";
})

document.getElementById("cancelDelete").addEventListener("click", () => {
    bookTodelete = null;
    confirmation.style.display = "none";
})