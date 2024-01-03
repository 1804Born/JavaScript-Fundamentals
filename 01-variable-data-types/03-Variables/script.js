// container for piece of data
// Ways of declaring a variable
// var, let, const
//primitive Types (stores in Stack)
//reference Types (stored in Heap)

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
