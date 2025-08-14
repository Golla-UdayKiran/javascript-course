console.log(document.querySelector('button').innerHTML);
/*
document.querySelector('button')
  .innerHTML = 'Changed';
*/

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);

console.log(document.title);
// document.title = 'Changed';

console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
// document.body.innerHTML = '<button>Good job!</button>';

/*
document.body.innerHTML = 'hello';
document.title = 'Good job!';
*/

console.log(String(25));
console.log('25' - 5);
console.log('25' + 5);

console.log(window.document);
window.console.log('window');
console.log(window.alert);

console.log(document.querySelector('.js-9a'));

document.querySelector('.js-9b')
  .innerHTML = '9b done!';

function displayMessage() {
  const inputElement = document.querySelector('.js-name-input');
  document.querySelector('.js-message')
    .innerHTML = `Your name is: ${inputElement.value}`;
}

function handleCostKeydownUSD(event) {
  if (event.key === 'Enter') {
    calculateTotalUSD();
  }
}

/*
 * Issue = the calculation is inaccurate.
 * Fix = calculate the number in cents and then
 *       convert back to dollars at the end.
 */
function calculateTotalUSD() {
  const inputElement = document.querySelector('.js-cost-input-usd');

  // Convert the numbers to cents by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 4000) {
    cost = cost + 1000;
  }

  // Convert back to dollars at the end.
  document.querySelector('.js-total-cost-usd')
    .innerHTML = `$${cost / 100}`;
}

function handleCostKeydownINR(event) {
  if (event.key === 'Enter') {
    calculateTotalINR();
  }
}

/*
 * Issue = the calculation is inaccurate.
 * Fix = calculate the number in paise and then
 *       convert back to rupees at the end.
 */
function calculateTotalINR() {
  const inputElement = document.querySelector('.js-cost-input-inr');

  // Convert the numbers to paise by * 100.
  let cost = Number(inputElement.value) * 100;

  if (cost < 350520) {
    cost = cost + 87630;
  }

  // Convert back to rupees at the end.
  document.querySelector('.js-total-cost-inr')
    .innerHTML = `₹${cost / 100}`;
}