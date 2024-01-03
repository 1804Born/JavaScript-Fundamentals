//Processs of explicitly converting a value from one type to another
let amount = 'hello';

//    String  2  Number //
amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

//    Number  2  String //
// amount = amount.toString();
// amount = String(amount);

//   String  2  Decimal //
// amount = parseFloat(amount);

//  Number 2  Boolean
// amount = Boolean(amount);

console.log(amount, typeof amount);
