const image = document.querySelector('img')

let start;
let done = false;

function step(timeStamp) {
  if (start === undefined) {
    start = timeStamp;
  }

  const elapsed = timeStamp - start;

  if (elapsed > 7000) {
    done = true;
  }

  if (done) {
    return;
  }

  // image.style.transform = `translateX(${elapsed / 20}px)`;
  // image.style.transform = `translateY(${elapsed / 20}px)`;
  // image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 20}deg)`;
  


  // console.log(elapsed);

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
