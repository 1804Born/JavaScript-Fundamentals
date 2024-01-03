console.log();

console.log('Hello World');

console.log(20, 'Hello, true');

const x = 100;

console.log(x);

console.error('Alert');

console.warn('warning');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.log(x);
console.error('Alert');
console.warn('warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);

// COMMENTS & SHORTCUTS

// container for piece of data
// Ways of declaring a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Converntions
// Only, letters, numbers, underscores and dollar signs
// Can't start with a number

//Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = pascalCase
// firstname = lowercase

//  Re-assigning variables  //
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
  name: 'Prime',
};

person.name = 'Promise';

person.email = 'prime1804@gmail.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(d);
console.log(a);

// DATA TYPES
// Primitive { String, Number, Boolean, Null, Undefined, Symbol, BigInt}
// Reference { Objects ( object literals, arrays & functions) }

// STRINGS
