// current area of a specific area of code
alert('Hello');
console.log(innerHeight);

const x = 100; //global scope
// variable shadowing

console.log(x, 'in global');

function run() {
  console.log(window.innerWidth);
  console.log(x, 'in function');
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1;
  const y = 50; //function scoped
  console.log(x + y);
}

add();
