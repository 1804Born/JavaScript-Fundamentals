// for ([initialExpression]; [conditionExpression];
//   [incrementExpression]);
//   statement

  // INITIAL EXPRESSION _ Initialize a variable/counter
  // CONDITION EXPRESSION _ Condition that the loop will continue to run as long as it is 
  // met or until the condition is false
  // INCREMENT EPRESSION _ Expression that will be executed after each iteration 
  //  of the loop. Usually increments the variable
  //  STATEMENT _ Code that will be executed each time the loop is run. To execute a
  //  `block of code`, use the `()` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   } 
// }

// Nested Loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 15; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//names[i] === 'John'
// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (i === 0) {
    console.log(names[i]   + ' is the best')
  } else {
    console.log(names[i]);
  }
}
