// <ul>
//     <div class="row bg-success p-2" id="unorderli">
//       <div class="col-10">
//         <li class="list-group-item" >Task 123</li>
//       </div>
//       <div class="col-1">
//         <button class="btn btn-danger">Delete</button>
//       </div>
//       <div class="col-1">
//         <button class="btn btn-primary">Edit</button>
//       </div>
//     </div>
//   </ul>

function addtoItem() {
  const radioButtons = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  console.log(radioButtons);

  let inptext = document.getElementById("inputext").value;

  if (inptext != null && inptext != "") {
    const row = document.createElement("div");
    row.classList.add("row", "p-2", radioButtons);

    const divcol9 = document.createElement("div");
    divcol9.classList.add("col-10");

    const listitem = document.createElement("li");
    listitem.classList.add("list-group-item");
    listitem.innerHTML = inptext;

    // Add Event handler li to add a line through;
    divcol9.appendChild(listitem);

    const listItemArray = document.getElementsByClassName("list-group-item");

    for (let i = 0; i < listItemArray.length; i++) {
      listItemArray[i].onclick = function () {
        this.style = "text-decoration: line-through";
      };
    }

    listitem.onclick = function () {
      this.style = "text-decoration: line-through";
    };

    // Delete

    const divcol2 = document.createElement("div");
    divcol2.classList.add("col-1");

    const delbtn = document.createElement("button");
    delbtn.classList.add("btn", "btn-primary");
    delbtn.innerHTML = "Delete";

    // Add event handler
    divcol2.appendChild(delbtn);

    divcol2.onclick = function () {
      this.parentNode.style.display = "none";
    };

    // Edit

    const divcol1 = document.createElement("div");
    divcol1.classList.add("col-1");
    const editbtn = document.createElement("button");
    editbtn.classList.add("btn", "btn-secondary");
    editbtn.innerHTML = "Edit";

    editbtn.dataset.bsToggle = "modal";
    editbtn.dataset.bsTarget = "#exampleModal";

    divcol1.appendChild(editbtn);

    // Add event handler

    const saveEdit = document.getElementById("saveEditText");
    saveEdit.onclick = function () {
      let editText = document.getElementById("editText").value;
      // $('#exampleModal').modal('show');
      listitem.innerHTML = editText;
    };

    // make div to child of col3 and row
    row.appendChild(divcol9);
    row.appendChild(divcol2);

    row.appendChild(divcol1);

    //
    let unoderli = document.getElementById("unorderli");
    unoderli.appendChild(row);

    // Clear input box

    document.getElementById("inputext").value = "";

    document.getElementsByClassName("container").appendChild(unoderli);
  }
}

// const deletebutton = document
function searchitem() {
  const searchkey = document.getElementById("toDoSearch").value;

  const listItemArray = document.getElementsByClassName("list-group-item");

  for (let i = 0; i < listItemArray.length; i++) {
    if (
      listItemArray[i].innerHTML
        .toLowerCase()
        .indexOf(searchkey.toLowerCase()) > -1
    ) {
      listItemArray[i].parentElement.parentElement.style.display = "";
    } else {
      listItemArray[i].parentElement.parentElement.style.display = "none";
    }
  }
}

// bg-danger
function filterItemDanger() {
  const filterby = "bg-danger";

  const listItemArray = document.getElementsByClassName("list-group-item");

  for (let i = 0; i < listItemArray.length; i++) {
    console.log(listItemArray[i].parentElement.parentElement.className);
    if (
      listItemArray[i].parentElement.parentElement.className.indexOf(filterby) >
      -1
    ) {
      listItemArray[i].parentElement.parentElement.style.display = "";
    } else {
      listItemArray[i].parentElement.parentElement.style.display = "none";
    }
  }
}
// bg-warning
function filterItemWarning() {
  const filterby = "bg-warning";

  const listItemArray = document.getElementsByClassName("list-group-item");

  for (let i = 0; i < listItemArray.length; i++) {
    console.log(listItemArray[i].parentElement.parentElement.className);
    if (
      listItemArray[i].parentElement.parentElement.className.indexOf(filterby) >
      -1
    ) {
      listItemArray[i].parentElement.parentElement.style.display = "";
    } else {
      listItemArray[i].parentElement.parentElement.style.display = "none";
    }
  }
}

// bg-success
function filterItemSuccess() {
  const filterby = "bg-success";

  const listItemArray = document.getElementsByClassName("list-group-item");

  for (let i = 0; i < listItemArray.length; i++) {
    console.log(listItemArray[i].parentElement.parentElement.className);
    if (
      listItemArray[i].parentElement.parentElement.className.indexOf(filterby) >
      -1
    ) {
      listItemArray[i].parentElement.parentElement.style.display = "";
    } else {
      listItemArray[i].parentElement.parentElement.style.display = "none";
    }
  }
}

function nofilterItem() {
  const listItemArray = document.getElementsByClassName("list-group-item");

  for (let i = 0; i < listItemArray.length; i++) {
    if (listItemArray[i].parentElement.parentElement) {
      listItemArray[i].parentElement.parentElement.style.display = "";
    } else {
      listItemArray[i].parentElement.parentElement.style.display = "none";
    }
  }
}
