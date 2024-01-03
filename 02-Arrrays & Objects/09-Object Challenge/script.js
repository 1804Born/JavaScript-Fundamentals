let x;
// STEP 1
const library = [
  {
    title: '1804',
    author: 'Last',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: '18041',
    author: 'Last',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: '18042',
    author: 'Last',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// STEP 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// x = library.status.read;
// library.status.read = 'true';
// console.log(x);

// STEP 3
const { title: firstBook } = library[0];
const { title: secondBook } = library[1];
const { title: thirdBook } = library[2];

console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);

// STEP 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
