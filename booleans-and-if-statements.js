/*
true
false

console.log(3 > 5 - 5);

console.log(5 === '5.00');

if (false) {
  console.log('hello');
} else {
  console.log('else');
}

const age = 15;

if (age >= 16) {
  console.log('You can drive');
  console.log('Congrats');
} else if (age >= 14) {
  console.log('Almost there!');
} else {
  console.log('You can not drive');
}
*/

/*
console.log(true && false);
console.log(0.2 >= 0 && 0.2 < 1 / 3);

console.log(true || false);
console.log(!false);
*/

/*
if (0) {
  console.log('truthy');
}

const cartQuantity = 5;

if (cartQuantity) {
  console.log('cart has products');
}

console.log(!0);

console.log('text' / 5);

const variable1 = undefined;
console.log(variable1);
*/

const result1 = 0 ? 'truthy' : 'falsy';
console.log(result1);

false && console.log('hello');

const message = 5 && 'hello';
console.log(message);

const currency1 = undefined || 'USD';
console.log(currency1);
const currency2 = undefined || 'INR';
console.log(currency2);

// Try changing this variable to
// display different messages.
const hour = 9;
const name = 'Uday';

if (hour >= 6 && hour <= 12) {
  console.log(`Good morning ${name}!`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon ${name}!`);
} else {
  console.log(`Good night ${name}!`);
}

const age = 5;
const isHoliday = true;

// && has a higher priority than || so for
// this to work correctly, we need to add
// brackets () around the || check to make
// sure that it gets done first.
if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log('Discount');
} else {
  console.log('No discount');
}

const randomNumber = Math.random();
const result2 = randomNumber < 0.5 ? 'heads' : 'tails';

const guess = 'heads';
console.log(guess === result2 ? 'You win!' : 'You lose!');

let cartQuantity = 0;