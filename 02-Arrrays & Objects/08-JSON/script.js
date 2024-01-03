// store data in a readable human format
const post = {
  id: 1,
  tittle: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str.id);
// undefined, Parse First

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
  {
    id: 1,
    tittle: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    tittle: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
