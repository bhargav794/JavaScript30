const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem("itemss")) || [];


function addItem(e) {
  e.preventDefault();
  const item = (this.querySelector("[name=item]")).value;

  const arrItem = {
    item,
    done : false
  }
  items.push(arrItem);
  populateList(items,itemsList);
  localStorage.setItem("itemss",JSON.stringify(items));
  this.reset();
}

function populateList(arrPassed = [], htmlToPlace) {

  htmlToPlace.innerHTML = arrPassed.map( (plate,i) => {
    return `
    <li>
    <input type = "checkbox" data-index = ${i} id = "item${i}" ${(plate.done) ? 'checked' : ""} /> 
    <label for = "item${i}">${plate.item}</label>
    </li>
  ` //JS in HTML attributes
  }).join("");
}


function toggleUpdate(e) {
  if(!e.target.matches('input')) return;
  console.log(e);
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("itemss",JSON.stringify(items));
  //populateList(items,itemsList)
}

  addItems.addEventListener('submit',addItem);
  itemsList.addEventListener('click',toggleUpdate);//instead of checkbox event is added on its parent so that event is triggered for newly created checkboxes also.This is called Event Delegation

  populateList(items,itemsList);
