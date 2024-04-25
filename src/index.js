document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = event.target['new-task-description'].value;
    
    const newItem = document.createElement("li");
    newItem.textContent = taskName;

    const unorderedList = document,querySelector("#tasks");
    unorderedList.append(newItem);
  })
});