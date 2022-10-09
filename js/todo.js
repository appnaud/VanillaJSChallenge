const form = document.querySelector("#todoform");
const input = document.querySelector("#todoinput");
const list = document.querySelector("#todolist");
let tdlist = [];
const saved = JSON.parse(localStorage.getItem("todolist"));

function paintToDo() {
  list.innerHTML = "";
  tdlist.forEach((item) => {
    const li = document.createElement("li");
    li.id = item.id;
    li.innerText = item.text + " ";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", (event) => {
      tdlist = tdlist.filter(
        (i) => i.id !== parseInt(event.target.parentElement.id)
      );
      event.target.parentElement.remove();
      saveToDo();
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function saveToDo() {
  localStorage.setItem("todolist", JSON.stringify(tdlist));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  tdlist.push({ id: Date.now(), text: input.value });
  input.value = "";
  saveToDo();
  paintToDo();
});

if (saved !== null) {
  tdlist = saved;
  paintToDo();
}
