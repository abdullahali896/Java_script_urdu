const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// console.log(balance.tofixed(1));   //Error 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const numbers = 1000000000
console.log(numbers.toLocaleString());

// +++++++++++++++++++++ MATHS ++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(9, 6, 3, 8));
console.log(Math.max(9, 6, 3, 8));