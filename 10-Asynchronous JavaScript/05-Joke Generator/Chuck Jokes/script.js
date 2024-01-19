const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;    
      } else {
        jokeEl.innerHTML = 'Something went wrong (Not Funny)'

      }
    }
  };

  xhr.send();
}



jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)






// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://api.chucknorris.io/jokes/random');

// // console.log(joke)
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);

    
//     data.forEach(value => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${value}</strong>`
//         console.log(li)
//     })
//   }
// };


// joke.send();