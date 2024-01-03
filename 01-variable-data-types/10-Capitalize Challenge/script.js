//Solution 1
function capitilizeFirstLetter(myString) {
  if (myString.length === 0) {
    return myString;
  }

  return myString.charAt(0).toUpperCase() + myString.slice(1);
}

const myString = 'developer';
const myNewString = capitilizeFirstLetter(myString);
//Solution 2
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);
//Solution 3
myNewString = myString[0].toUpperCase() + myString.substring(1);
//Solution 4
myNewString = myString[0].toUpperCase() + myString.substring(1);

// myNewString = myString.charAt(0);

// myNewString = myString.indexOf('v');

// myNewString = myString.toUpperCase();

// myNewString = myString.substring(2, 6);

// myNewString = myString.slice(1);

console.log(myNewString);
