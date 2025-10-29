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
].forEach((value, index) => {
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
document.querySelector('.js-button1')
  .addEventListener('click', () => {
    const button = document.querySelector('.js-button1');
    button.innerHTML = 'Loading...';

    // The function below was changed
    // to an arrow function.
    setTimeout(() => {
      button.innerHTML = 'Finished!';
    }, 1000);
  });

let timeoutId;

document.querySelector('.js-button2')
  .addEventListener('click', () => {
    const messageElement = document.querySelector('.js-message');
    messageElement.innerHTML = 'Added';

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      messageElement.innerHTML = '';
    }, 2000);
  });

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

document.querySelector('.js-button3')
  .addEventListener('click', () => {
    messages++;
    displayNotification();
  });

document.querySelector('.js-button4')
  .addEventListener('click', () => {
    if (messages > 0) {
      messages--;
      
      // If there are no new messages, stop displaying
      // the notification in the tab.
      if (messages === 0) {
        stopNotification();
      }
    }
  });

function displayNotification() {
  // If we're already displaying the notification,
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(() => {
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

const regularFunction = function(param, param2) {
  console.log('hello');
  return 5;
};

const arrowFunction = (param, param2) => {
  console.log('hello');
  return 5;
};
arrowFunction();

const oneParam = param => {
  console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());

const object2 = {
  method: () => {

  },
  method() {

  }
};

const buttonElement = document.querySelector('.js-button5');

const eventListener = () => {
  console.log('click');
};
buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
  console.log('click2');
});

console.log([1, -3, 5].filter((value, index) => {
  /*
  if (value >= 0) {
    return true;
  } else {
    return false;
  }
  */
  return value >= 0;
}));

console.log([1, 1, 3].map((value, index) => {
  return value * 2;
}));

console.log([1, 1, 3].map(value => value * 2));

const multiply = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

function countPositive(nums) {
  let positiveNumbers = 0;

  // When there is only 1 parameter,
  // the brackets are optional. So
  // we can also write: num => { ... }
  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });
  
  return positiveNumbers;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function addNum(array, num) {
  // When there is only 1 parameter,
  // the brackets are optional. So we
  // can also write: value => value + num
  return array.map((value) => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

function removeEgg(foods) {
  let eggsRemoved = 0;

  // If food is 'egg', the inner function returns false
  //   and the food is not included in the result.
  // Otherwise, the inner function returns true
  //   and the food is included in the result.
  return foods.filter((food) => {
    // If the food is 'egg', we should return false
    // but only if we haven't removed 2 eggs already.
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));