let x;

// Result: [6, 5, 4, 3, 2, 1];

const arr = [1, 2, 3, 4, 5];
x = arr.push(0, 6);
x = arr.sort();
x = arr.reverse();

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// arr.push(6);
// arr.unshift(0);
// arr.reverse();

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// arr3 = arr1.concat(arr2);
// x = arr3.filter();

const arr3 = arr1.slice(0, 4).concat(arr2);

// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

console.log(arr3);
