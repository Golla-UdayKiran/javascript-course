// Basics of Math:
console.log(2 + 2);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 2);

console.log(2 + 2 + 2);
console.log(2.2 + 2.2);

console.log(10.90 * 2 + 20.95);
console.log(925.05 * 2 + 1773.79);
console.log(10.90 * 2 + 20.95 + 4.99);
console.log(925.05 * 2 + 1773.79 + 423.49);

// Order of operations:
console.log(1 + 1 * 3);
console.log((1 + 1) * 3);

console.log(20.95 + 7.99 * 2);
console.log(1773.79 + 676.50 * 2);
console.log(36.93 * 0.1);
console.log(3126.79 * 0.1);
console.log((20.95 + 7.99 * 2) * 0.1);
console.log((1773.79 + 676.50 * 2) * 0.1);

// Inaccuracies with Floats:
console.log(0.1 + 0.2);
console.log(20.95 + 7.99);
console.log(1773.79 + 676.50);
console.log((2095 + 799) / 100);
console.log((177379 + 67650) / 100);

// How to round numbers:
console.log(Math.round(2.2));
console.log(Math.round(2.8));

console.log(((2095 + 799) * 0.1) / 100);
console.log(((177379 + 67650) * 0.1) / 100);
console.log(Math.round((2095 + 799) * 0.1) / 100);
console.log(Math.round((177379 + 67650) * 0.1) / 100);

console.log(10 + 3 * 8 + 5);
console.log(848.55 + 3 * 678.84 + 424.28);

console.log((10 + 3 * 8 + 5) / 3);
console.log((848.55 + 3 * 678.84 + 424.28) / 3);

console.log(18.5 + 2 * 7.5);
console.log(1569.82 + 2 * 636.41);

console.log((18.5 + 2 * 7.5) * 0.1);
console.log((1569.82 + 2 * 636.41) * 0.1);

console.log((18.5 + 2 * 7.5) * 0.2);
console.log((1569.82 + 2 * 636.41) * 0.2);

console.log((2095 + 799 + 1899) / 100);
console.log((177379 + 67650 + 161140) / 100);

console.log((2095 + 799 + 1899 + 499) / 100);
console.log((177379 + 67650 + 161140 + 42349) / 100);

console.log(Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100);
console.log(Math.round((177379 + 67650 + 161140 + 42349) * 0.1) / 100);

console.log((2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100);
console.log((177379 + 67650 + 161140 + 42349) / 100 + Math.round((177379 + 67650 + 161140 + 42349) * 0.1) / 100);

console.log(Math.floor(2.8));

console.log(Math.ceil(2.2));

console.log((25 * 9 / 5) + 32);

console.log((86 - 32) * 5 / 9);

console.log((-5 * 9 / 5) + 32);