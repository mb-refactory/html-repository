
const list = document.querySelector("ul")
const input = document.querySelector("input");
const addItemButton = document.querySelector("button");
input.focus();

// The function runs when the button is clicked
addItemButton.addEventListener("click", () => { addItem() });
addItemButton.addEventListener("click", () => { console.log("addItemButton Pressed!") });

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // Alternatively: addItemButton.click();
    addItem();
  }
});

function addItem() {
  // Stores the current value
  let item = input.value;
  // Input format check
  if (item != "") {
    // Empties the input element
    input.value = "";
    console.log(`${item} added to the list!`);
    // Creates the elements needed to add the item to the list 
    const span = document.createElement("span");
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.textContent = item;
    deleteButton.textContent = "Delete";
    // Alternatively: list.removeChild(li);
    deleteButton.addEventListener("click", () => { li.remove() });
    // Adds the list item to the <ul>
    list.appendChild(li)
    input.focus();
  }
}
