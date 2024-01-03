const itemInput = document.getElementById('item-input');

// fires once
const onKeyPress = () => {
  console.log('Keypress');
};

// fires on realses
const onKeyUp = () => {
  console.log('Keyup');
};

// hold it down
const onKeyDown = (e) => {
  // console.log('Keydown')
  if (e.key === 'Enter') {
    alert('You pressed enter');
  }

  if (e.code === 13) {
    alert('you pressed Enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
