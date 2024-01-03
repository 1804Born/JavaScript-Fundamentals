console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Return the right side operand when the left is null
// or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = '' ?? 20;
c = 0 ?? 30;

console.log(c);


// <input type="number" name="amount" value="0.0100000" required min="0.01" step="0.01" id="money" onfocus="calcthis();" oninput="calcthis();" onblur="calcthis();" class="mat-input">
 