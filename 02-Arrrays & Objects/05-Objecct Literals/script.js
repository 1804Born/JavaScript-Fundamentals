let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.isAdmin;
x = person.hobbies[1];

person.name = 'Jane Pussy';
person['isAdmin'] = false;

delete person.name;

person.isSavage = true;

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'Promise',
  'last name': '1804',
};

x = person2['first name'];

console.log(x);
