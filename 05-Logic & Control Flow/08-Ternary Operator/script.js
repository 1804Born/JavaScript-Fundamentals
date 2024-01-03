const age = 3;

// Using an if statement
if (age >= 18) {
  console.log('You can Vote');
} else {
  console.log('You can not vote')
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log 
('You can not vote');

// Assigning a condition value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote)

// Multiple Statement
// let redirect;

const auth = true;
// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login'
// }

// const redirect = auth 
// ? (alert('Welcome to the dashboard'), '/dashboard') 
// : (alert('Access Denied'), '/login');
// This results in `redirect` being assigned the value '/dashboard' or '/login', 
// but the alert is not directly related to the assignment.

// console.log(redirect);

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');