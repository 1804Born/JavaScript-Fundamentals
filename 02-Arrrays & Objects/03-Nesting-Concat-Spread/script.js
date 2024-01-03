// having array as index inside of another array
let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'tesberry'];

// fruits.push(berries);

// x = fruits[3][2];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// taking items from one arr and adding them to sep on same level
// [concat]

x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatttern Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// x = arr.flat();

// Static Methods On Array Object

// check if is an array
x = Array.isArray('Hello');

// create from arr
x = Array.from('12345');

// create an arr from set of value
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
