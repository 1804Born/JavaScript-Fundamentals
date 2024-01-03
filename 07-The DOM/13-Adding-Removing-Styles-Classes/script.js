const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run () {
  // console.log(1) className
  console.log(itemList.className);
  text.className = 'card dark';

  // classList
  console.log(itemList.classList);

  itemList.classList.forEach((c) => console.log(c));

  
  // text.classList.add('dark');
  // text.classList.toogle('card');


  // text.classList.toogle('dark');
  // text.classList.toogle('hidden');

  text.classList.replace('card', 'dark');

  // Change Style
  // itemList.style.lineHeight  = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;