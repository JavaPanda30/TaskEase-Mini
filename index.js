function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const cardId = event.dataTransfer.getData("text");
  const cardElement = document.getElementById(cardId);
  const dropzone = event.target;
  dropzone.appendChild(cardElement);
}

function addnewTask(event) {
  event.preventDefault();
  var task = prompt("Enter new Task");
  if (task) {
    const elements = document.getElementsByClassName("draggable-card");
    var len = elements.length + 1;
    const tasknew = document.createElement("div");
    tasknew.setAttribute("id", len);
    tasknew.classList.add("draggable-card");
    tasknew.setAttribute("draggable", "true");
    tasknew.setAttribute("ondragstart", "drag(event)");
    const deletebtn = `<div id="part2" class="lft"><a href="#" onClick="deletetask(event)" class="${len}"><h5 class="${len}">Delete</h5><div id="deleteclr"></div></a></div>`;
    const donebtn = `<div id="part2" class="lft"><a href="#" onClick="deletetask(event)" class="${len}"><h5 class="${len}">Done</h5><div id="swipeclr"></div></a></div>`;
    tasknew.innerHTML =
      task + `<span style="display:flex">${deletebtn + donebtn}</span>`;
    const column1 = document.getElementById("column1");
    column1.appendChild(tasknew);
  }
}

function deletetask(event) {
  event.preventDefault();
  const chk = confirm("Are You sure ?");
  if (chk) {
    var deleteId = event.target.classList;
    console.log(deleteId[0]);
    const tasks = document.querySelectorAll(".draggable-card");
    console.log(tasks);
    tasks.forEach((e) => {
      if (e.id === deleteId[0]) {
        e.remove();
      }
    });
  }
}
