greeting();
function greeting() {
  console.log('hello');
}
greeting();

const num = 2;
const function1 = function() {
  console.log('hello2');
};

console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
  num: 2,
  fun: function() {
    console.log('hello3');
  }
};
object1.fun();

function display(param) {
  console.log(param);
}
display(2);

function run(param) {
  param();
}
run(function() {
  console.log('hello4');
});

setTimeout(function() {
  console.log('timeout');
  console.log('timeout2');
}, 3000);

console.log('next line');

/*
setInterval(function() {
  console.log('interval');
}, 3000);
*/

console.log('next line 2');

[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value, index) {
  if (value === 'wash dishes') {
    return;
  }
  
  console.log(index);
  console.log(value);
});

const add = function() {
  console.log(2 + 3);
};

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);

// Grouping the JavaScript code into a function
// is optional, but it is a bit cleaner.
function updateButton() {
  const button = document.querySelector('.js-button');

  button.innerHTML = 'Loading...';
  setTimeout(function() {
    button.innerHTML = 'Finished!';
  }, 1000);
}

let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  // First, cancel the previous timeout so that
  // it doesn't remove the message too quickly.
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    messageElement.innerHTML = '';
  }, 2000);
}

/*
let messages = 2;

// Save the intervalId in case we need to cancel it.
let intervalId;

// We'll use this variable to keep track of whether
// or not we're displaying the notification.
let isDisplayingNotification;

// Start displaying the notification in the tab
// when the page first loads.
displayNotification();

function displayNotification() {
  // If we're already displaying the notification,
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(function() {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = 'App';
}
*/