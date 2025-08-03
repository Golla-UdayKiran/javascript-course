const product = {
  name: 'socks',
  price: 1090
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    console.log('function inside object');
  }
};
console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);

console.log(product2.rating.count);
product2.fun();

console.log(typeof console.log);

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
  message: 'hello',
  price: 799
};
const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

const object3 = {
  message: 'Good job!',
  price: 799
};
console.log(object1 === object3);

// const message = object1.message;
const { message, price: cost } = object1;
console.log(message);
console.log(cost);

const object4 = {
  // message: message,
  message,
  // method: function function1() {
  
  // },
  // method: function() {
  
  // },
  method() {

  }
};

const product3 = {
  name: 'basketball',
  price: 2095
};
console.log(product3);

product3.price += 500;
console.log(product3);

product3['delivery-time'] = '3 days';
console.log(product3);

function comparePrice(product4, product5) {
  if (product4.price < product5.price) {
    return product4;
  } else {
    return product5;
  }
}

const product4 = {
  name: 'basketball',
  price: 2095
};

const product5 = {
  name: 'socks',
  price: 1090
};

console.log(comparePrice(product4, product5));

function isSameProduct(product4, product5) {
  if (
    product4.name === product5.name &&
    product4.price === product5.price
  ) {
    return true;
  } else {
    return false;
  }
}

// Here is an alternative solution that uses less code.
function isSameProduct(product4, product5) {
  return (
    product4.name === product5.name &&
    product4.price === product5.price
  );
}

const product6 = {
  name: 'basketball',
  price: 2095
};

console.log(isSameProduct(product4, product5));
console.log(isSameProduct(product4, product6));

console.log('Good Morning'.toLowerCase());
console.log('TESTING'.toLowerCase());

console.log('hello'.repeat(2));
console.log('test'.repeat(3));