const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));

  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //  Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }
  // Create item DOM elelment
  addItemToDOM(newItem);

  // Added item to Local Storage
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';
}

function addItemToDOM(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  }
}

function removeItem(item) {
  if (confirm('Are you sure?')) {
    //Remove item from storage
    item.remove();

    // Remove item from Storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // console.log(itemsFromStorage);
  // filter out item to be rremove
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // re-set to Local Storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function addItemToStorage(item) {
  //  check to see if we have avaialabe item in the DOM
  // let itemsFromStorage;

  // if (localStorage.getItem('items') === null) {
  //   itemsFromStorage = [];
  // } else {
  //   itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  // }
  const itemsFromStorage = getItemsFromStorage();

  // Add new items to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local Storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
}

function clearItems() {
  // itemList.innerHTML = '';
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  //Clear from local Storage
  localStorage.removeItem(items);

  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    // console.log(item)/
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      // console.log(true);
      item.style.display = 'flex';
    } else {
      // console.log(false);
      item.style.display = 'none';
    }
  });

  console.log(text);
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  // console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Initialize app
function init() {
  // Event Listerner
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  // itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}

init();

///Local Storage

localStorage.setItem('name', 'Brad');
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name')
localStorage.clear();

// Add Item To localStorage
