const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: 111-111-111 ,
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: 222-222-222,
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'john@gmail.com',
    phone: 333-333-333,
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: 444-444-444,
    age: 18,
  },
  {
    firstName: 'Jane',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: 555-555-555,
    age: 23,
  },
];

const youngPeople = people
.filter((item) => item.age && item.age >= 25)
.map((person) => ({
  name: person.firstName + ' ' + person.lastName,
  email: person.email,
}));

console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumber = numbers
.filter((number) => number > 0)
.reduce((acc, cur) => acc + cur, 0);

console.log(positiveNumber);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
})

console.log(cWords);