import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isWeekend from '../modules/weekend.js';
import isSatSun from '../modules/weekend.js';

const today = dayjs();
let date = today.add(5, 'days');
console.log(date.format('MMMM D'));

date = today.add(1, 'month');
console.log(date.format('MMMM D'));

date = today.subtract(1, 'month');
console.log(date.format('MMMM D'));

date = dayjs();
console.log(date.format('dddd'));

// Test this function using a few different dates.
date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

// Test this function using a few different dates.
date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));