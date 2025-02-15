const addNewbookButton = document.querySelector(".addNew");
const cancelSubmission = document.querySelector(".cancelSubmission");
const addbookModal = document.querySelector(".addBookModal");


const bookCollection = {};
const addBookform = document.getElementById("addNewBookModalForm");

addNewbookButton.addEventListener("click", () => {
    addbookModal.showModal();
})
 
cancelSubmission.addEventListener("click", () => {
    addbookModal.close();
    addBookform.reset();
})

function changeColorCode(getBookID){

    const getBookObj = bookCollection[getBookID]

    let borderColor;
    let titleColor;
    let authorColor;

    if (getBookObj.finishStatus) {
        borderColor = "10px solid rgb(0, 180, 0)";
        titleColor = "rgb(0, 180, 0)";
        authorColor = "rgb(0, 140, 0)";
    }
    else{
        if(getBookObj.quote){
            borderColor = "10px solid yellow";
            titleColor = "yellow";
            authorColor = "gold";
        } else {
            borderColor = "10px solid red";
            titleColor = "red";
            authorColor = "crimson";
        }
    }
    document.querySelector(`.${getBookID}`).style.borderLeft = borderColor;
    document.querySelector(`.${getBookID}_Title`).style.color = titleColor;
    document.querySelector(`.${getBookID}_Author`).style.color = authorColor;
}

// Creates Book and adds it to the collection Object
function createBook(bookID, name, author, quote, finishStatus){

    function Book(bookID, name, author, quote, finishStatus){
        this.bookID = bookID;
        this.name = name;
        this.author = author;
        this.quote = quote;
        this.finishStatus = finishStatus;
    }

    const book = new Book(bookID, name, author, quote, finishStatus);
    bookCollection[bookID] = book;

    console.log(`bookID in create Book" Func = ${bookID}`)
    console.log("Book Object in create Book Func = " + JSON.stringify(book, null, 2));
}

// Creates Book Card
function createBookCard(bookID){

    const getBookObj = bookCollection[bookID]
    console.log(`BookID in create Book card Func = ${bookID}`)
    console.log("Book Object in create Book card Func = " + JSON.stringify(getBookObj, null, 2))

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard", bookID);


    const cardAction = document.createElement("div")
    cardAction.classList.add("cardAction")
    
    // Add Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn", "cardActBtns");

    const editBtnicon = document.createElement("img");
    editBtnicon.classList.add("editBtnicon", "icon");
    editBtnicon.src = "icons/edit.svg";
    editBtnicon.alt = "Edit icon";

    editBtn.appendChild(editBtnicon);

    cardAction.appendChild(editBtn);
    
    // Add Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn", "cardActBtns");

    const deleteBtnicon = document.createElement("img");
    deleteBtnicon.classList.add("deleteBtnicon", "icon");
    deleteBtnicon.src = "icons/delete.svg";
    deleteBtnicon.alt = "delete icon";

    deleteBtn.appendChild(deleteBtnicon);

    cardAction.appendChild(deleteBtn)
    
    // Add Action buttons to book card
    bookCard.appendChild(cardAction)
    
    // Book card title Div
    const bookCardTitle = document.createElement("div") 
    bookCardTitle.classList.add("bookCardTitle", `${bookID}_Title`)
    bookCardTitle.textContent = getBookObj.name
    bookCard.appendChild(bookCardTitle)

    // Book card Author Div
    const bookCardAuthor = document.createElement("div"); 
    bookCardAuthor.classList.add("bookCardAuthor", `${bookID}_Author`)
    bookCardAuthor.textContent = `—${getBookObj.author}`
    bookCard.appendChild(bookCardAuthor);


    // Add book card quote div
    const bookCardQoute = document.createElement("div");
    bookCardQoute.classList.add("bookCardQoute", `${bookID}_Qoute`)
    if(getBookObj.quote){
        bookCardQoute.textContent= `"${getBookObj.quote}"`
    }
    bookCard.appendChild(bookCardQoute);
    

    // Add bookcard to the container
    const container = document.getElementById("container");
    container.appendChild(bookCard); 

    // Add color code based on read status
    changeColorCode(bookID);
}

// ************************************************************************************************************************************

createBook("Demo_1", "The Alchemist", "Paulo Coelho", "It's the possibility of having a dream come true that makes life interesting.", true);
createBookCard("Demo_1")

createBook("Demo_2", "To Kill a Mockingbird", "Harper Lee", 'Atticus said to Jem one day, "I’d rather you shot at tin cans in the backyard, but I know you’ll go after birds. Shoot all the blue jays you want, if you can hit ‘em, but remember it’s a sin to kill a mockingbird." That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. "Your father’s right," she said. "Mockingbirds don’t do one thing except make music for us to enjoy. They don’t eat up people’s gardens, don’t nest in corn cribs, they don’t do one thing but sing their hearts out for us. That’s why it’s a sin to kill a mockingbird.', false);
createBookCard("Demo_2")

createBook("Demo_3", "1984", "George Orwell", "War is peace. Freedom is slavery. Ignorance is strength.", false);
createBookCard("Demo_3");

createBook("Demo_4", "The Wind in the Willows", "Kenneth Grahame", "", false);
createBookCard("Demo_4");

createBook("Demo_5", "Pride and Prejudice", "Jane Austen", "Vanity and pride are different things, though the words are often used synonymously.", true);
createBookCard("Demo_5");

createBook("Demo_6", "The Great Gatsby", "F. Scott Fitzgerald", "", true);
createBookCard("Demo_6");

createBook("Demo_7", "Moby-Dick", "Herman Melville", "Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off - then, I account it high time to get to sea as soon as I can" , false);
createBookCard("Demo_7");

createBook("Demo_8", "Brave New World", "Aldous Huxley", "But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.", true);
createBookCard("Demo_8");

createBook("Demo_9", "The Catcher in the Rye", "J.D. Salinger", "I am always saying 'Glad to've met you' to somebody I'm not at all glad I met.", false);
createBookCard("Demo_9");

createBook("Demo_10", "Crime and Punishment", "Fyodor Dostoevsky", "Pain and suffering are always inevitable for a large intelligence and a deep heart.", true);
createBookCard("Demo_10");

createBook("Demo_11", "Wuthering Heights", "Emily Brontë", "", false);
createBookCard("Demo_11");



// ************************************************************************************************************************************



// Add new book form submission
addBookform.addEventListener("submit", () => {
    event.preventDefault();
    addbookModal.close();

    const CreateUniqueID = `book_${Math.floor(Math.random() * 1000000)}`;
    const name = document.getElementById("bookName").value;
    const author = document.getElementById("authorName").value;
    const quote = document.getElementById("favquote").value;
    const finishStatus = document.getElementById("finishCheck").checked;

    createBook(CreateUniqueID, name, author, quote, finishStatus);
    createBookCard(CreateUniqueID);

    console.log()
    addBookform.reset();
})


const confirmation = document.querySelector(".deleteConfirmDiv");
let bookTodelete;
let bookToedit;
let getBookID;
let getBookObj;

let editName;
let editAuthor;
let editQuote;
let editFinish;

const editbookModal = document.querySelector(".editBookModal");
const editBookform = document.getElementById("editBookModalForm");

document.getElementById("container").addEventListener("click", (e) => {
    // Edit Book and bookCard
    if (e.target.closest(".editBtn")) {

        bookToedit = e.target.closest(".bookCard");
        console.log("Edit button pressed");
        getBookID = bookToedit.classList[1];
        getBookObj = bookCollection[getBookID];

        // Load book information to book edit form
        editName = document.getElementById("bookNameEdit");
        editName.value = getBookObj.name;

        editAuthor = document.getElementById("authorNameEdit");
        editAuthor.value = getBookObj.author;

        editQuote = document.getElementById("favquoteEdit");
        editQuote.value = getBookObj.quote;

        editFinish = document.getElementById("finishCheckEdit");
        editFinish.checked = getBookObj.finishStatus;

        editbookModal.showModal();




        // Cancel Edit
        const cancelEditSubmission = document.querySelector(".cancelEditSubmission");
        cancelEditSubmission.addEventListener("click", () => {
            editbookModal.close();
            editBookform.reset();
        })
    }

    // Delete Book and bookCard
    if (event.target.closest(".deleteBtn")) {
        bookTodelete = event.target.closest(".bookCard");
        console.log("Delete button pressed");
        
        confirmation.showModal();

    }
});

// Book Edit form Submission
editBookform.addEventListener("submit", () => {
    event.preventDefault();
    console.log(bookCollection[getBookID]);


    // Update Book information
    getBookObj.name = editName.value;
    getBookObj.author = editAuthor.value;
    getBookObj.quote = editQuote.value;
    getBookObj.finishStatus = editFinish.checked;

    console.log(getBookID)
    console.log(`#${getBookID}`)

    // Update the book card
    const updateBookCardName = document.querySelector(`.${getBookID}_Title`);
    updateBookCardName.textContent = getBookObj.name;

    const updateBookCardAuthor = document.querySelector(`.${getBookID}_Author`);
    updateBookCardAuthor.textContent = `—${getBookObj.author}`;
    
    const updateBookCardQoute = document.querySelector(`.${getBookID}_Qoute`);
    updateBookCardQoute.textContent = `\"${getBookObj.quote}\"`;

    // Update the colorCode
    changeColorCode(getBookID);


    editbookModal.close();
    editBookform.reset();
})


// Delete book
document.getElementById("confirmDelete").addEventListener("click", () => {
    bookTodelete.remove();
    confirmation.close();
})

// Cancel Book Deletion
document.getElementById("cancelDelete").addEventListener("click", () => {
    bookTodelete = null;
    confirmation.close();
})