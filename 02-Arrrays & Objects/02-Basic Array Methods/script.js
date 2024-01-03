let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100);

// arr.pop();
//  used to remove and
//  return the last element
//  from an array

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(200);

x = arr.indexOf(34);
// if the number you add is not in the
// array like (17), it displays a (-1)

x = arr.slice(1, 4);
// does not change the original arr

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().charAt(0);
// chain method

console.log(x);
