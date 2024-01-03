// let x = Math.random() * 100 + 1;
// let y = Math.random() * 50 + 1;

// sumOutput = x + y;
// differenceOutput = x - y;
// productOutput = x * y;
// quotientOutput = x / y;
// rmOutput = x % y;

// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the Sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const difference = x - y;
const diffOutput = `${x} - ${y} = ${difference}`;
console.log(diffOutput);

// Get the Product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the Quotient
const quo = x / y;
const quoOutput = `${x} / ${y} = ${quo}`;
console.log(quoOutput);

// Get the Remainder
const rem = x % y;
const remOutput = `${x} % ${y} = ${rem}`;
console.log(remOutput);
