// Write your code here:
// Name: Paxton Robertson
// Desc: Shopping List Creation and Deletion


function createItem() {
    let itemInput = document.querySelector("#shopping-form>input"); // brings element into function
    let itemText = itemInput.value; // pulls text from the element. Done this way so I get get the text box to clear and focus later

    let template = document.querySelector("template"); // bring in template
    let newItem = document.importNode(template.content, true); // import all template content 

    newItem.querySelector(".item-text").textContent = itemText; // set the new template item to the text input by user
    newItem.querySelector(".remove-btn").addEventListener("click", removeItem) // adds an event listener so the remove button will call function when clicked

    document.querySelector("#shopping-list").appendChild(newItem); // appends new li created from the template to the ul shopping-list

    itemInput.value = ""; // clears the input element
    itemInput.focus(); // focuses the cursor in input box so user can add another item

}


function removeItem() {
    document.querySelector("li").remove(); // removes list item related to the remove button
}

document.querySelector("#shopping-form>button").addEventListener("click", createItem); // adds event listener so the add button will call the createItem function