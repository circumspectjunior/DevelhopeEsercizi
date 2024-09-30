function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
}
