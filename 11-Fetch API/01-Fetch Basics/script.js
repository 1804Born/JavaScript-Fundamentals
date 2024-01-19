// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) =>  console.log(data));

  // Fetching a text file
  fetch('./test.txt')
  .then((response) => response.text())
  .ten((data) => console.log(data));

  // Fetching feom an API
  fetch('http://api.github.com/users/bradtraversery')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.
  login));