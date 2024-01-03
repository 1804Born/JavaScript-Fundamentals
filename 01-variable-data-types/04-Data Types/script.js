// DATA TYPES
const firstName = 'sara';

//Number
const age = 30;
const temp = 98.9;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//Undefined
// let score;
const score = undefined;

//Symbol
const id = Symbol('id');

//BigInt
const n = 738494934948349394;

//Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Prime',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);
