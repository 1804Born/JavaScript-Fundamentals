function insertAfter(newEl, exisitingEl) {
  exisitingEl.parentElement.insertBefore(newEl, exisitingEl.nextSibling);
}

// const insert = 'Insert Me After'

//New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After';
// li.innerHTML = `${insert}
{/* <i class="fa-solid fa-xmark"></i>
`; */}

// Exisiting element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);


// function insertAfterItem() {
//   const ul = document.querySelector('ul');

//   const li = document.createElement('li');
//   li.textContent = 'insert Me After';

//   const fourthItem = document.querySelector('li:nth-child(4)');

//   const insertAfter = fourthItem.insertAdjacentText('afterend', 'li');

//   insertAfter(li, fourthItem);
// }

// insertAfterItem();


