// Premitive
let x;

const name = 'John';
const age = 31;

x = 'Hello, my name is ' + name + ' and i am ' + age + ' years old';

//Template Literals

x = `Hello, my name is ${name} and i am ${age} years 
old`;

//String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

//Access value by key
x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(6);
x = s.indexOf('H');

x = s.substring(2, 10);
x = s.substring(7);

x = s.slice(-11, -6);

x = '            Hello World';

x = x.trim();
x = s.replace('World', 'Promise');

x = s.includes('KTB');
x = s.valueOf();

x = s.split('');

x = console.log(x);
