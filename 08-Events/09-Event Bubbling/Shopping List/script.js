const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', () => {
  alert('Button Was Clicked');
})

div.addEventListener('click', () => {
  alert('Div Was Clicked');
});

form.addEventListener('click', (e) => {
  alert('Form was Clicked');
  e.stopPropagation();
})

document.body.addEventListener('click', () => {
  alert('Body was Clicked');
});
