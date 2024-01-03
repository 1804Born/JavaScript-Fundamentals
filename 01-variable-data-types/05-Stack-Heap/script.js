//These values are stored on the stack
const name = 'john';
const age = 30;

//Reference value stores on the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Promise';

console.log(name, newName);
console.log(person, newPerson);
