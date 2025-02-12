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