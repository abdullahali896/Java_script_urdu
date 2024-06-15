let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" = NaN(Not a Number)
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Anas" => true

// ******************** Operations *********************

 let value = 3
 let negvalue = -value

// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Anas"
let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2); => 12
// console.log(1 + "2"); => 12
// console.log("1" + 2 +2); => 122
// console.log(1 + 2 +"2"); => 32

// console.log(true); => true
// console.log(+true); => 1
// console.log(+""); => 0

let gameCounter = 100
gameCounter++;
console.log(gameCounter);