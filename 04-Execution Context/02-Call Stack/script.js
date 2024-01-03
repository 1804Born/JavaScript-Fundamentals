// function first () {
//   console.log('first ...');
// };

// function second () {
//   console.log('Second...');
// }

// function third () {
//   console.log('Third...')
// };

// first();
// Second();
// third();

function first() {
  console.log('first ...');
  second();
}

function second() {
  console.log('Second...');
  third();
}

function third() {
  console.log('Third...');
}

first();
