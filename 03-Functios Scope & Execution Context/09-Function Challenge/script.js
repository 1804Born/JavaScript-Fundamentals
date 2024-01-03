// Challenge 1
// let fahrenheit = 285;
// let getCelsius = ((fahrenheit - 32) * 5) / 9;
// console.log(getCelsius(40));

// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The Temperature is ${getCelsius(32)} \*xB0c )`);

// Challenge 2
// const minMax = () => [1, 2, 3, 4, 5];

// console.log(...Math.min(), ...Math.max());

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([9, 2, 3, 66, 5, 6]));

//Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of
  ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(9, 6);
