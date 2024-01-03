// const x = 5;
// const y = 2;

// if ((x, y)) {
//   sum = x + y;
//   console.log(sum);
// }

// if ((x, y)) {
//   sub = x - y;
//   console.log(sub);
// }

// if ((x, y)) {
//   mult = x * y;
//   console.log(mult);
// }

// if ((x, y)) {
//   div = x / y;
//   console.log(div);
// }

function calculator(num1, num2, Operator) {
  let result;

  switch (Operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }

  console.log(result);
  return result;
}

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');
