// sdfsdf
/* 
Number: 25, 10.42
BigInt: 10n
Boolean: true, false
String: 'Hello', "Hello"
Symbol: Symbol('symbol')
Null: null (null must be assigned and it has no value)
Undefined: undefined(the value is not assigned/set yet and don't initialize a variable with undefined and it will be undefined by default) 
NaN: Not a Number (typeof NaN is number example 0/0 more examples in the code)

*/
let a = 1; // declaration and initialization
console.log(a);

a = 2; // reassigning the value
console.log(a);

const b = 3; // constant variable
console.log(b);

// b=4; // error because b is constant and we can't reassign the value
console.log(b);

// ----------------------------

let num = 10;
console.log(num);
console.log(typeof num);
console.log(num + 10); // addition
console.log(num - 10); // subtraction
console.log(num * 10); // multiplication
console.log(num / 10); // division example 10/3 = 3.3333333333333335
console.log(num % 3);  // modulus example 10%3 = 1
console.log(num ** 3); // exponentiation example 10^3
console.log(num++); // post increment example num = 10 then num++ = 11
console.log(Math.floor(num / 3)); // floor means round down example 3.9 will be 3
console.log(Math.ceil(num / 3)); // ceil means round up example 3.1 will be 4
console.log(Math.round(num / 3)); // round means round to the nearest integer example 3.1 will be 3 and 3.9 will be 4 and 3.5 will be 4
console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

let strNum = '10';
console.log(strNum);
console.log(typeof strNum); // string example '10'
console.log(strNum + 10); // concatenation example '10' + 10 = '1010'
console.log(Number(strNum) + 10); // type conversion example '10' to 10 then 10 + 10 = 20
console.log(parseInt(strNum) + 10); // type conversion example '10' to 10 then 10 + 10 = 20
console.log(parseFloat(strNum) + 10); // type conversion example '10' to 10 then 10 + 10 = 20

// now same example for decimal number
let decNum = '10.5';
console.log(decNum);
console.log(typeof decNum); // string example '10.5'
console.log(decNum + 10); // concatenation example '10.5' + 10 = '10.510'
console.log(Number(decNum) + 10); // type conversion example '10.5' to 10.5 then 10.5 + 10 = 20.5
console.log(parseInt(decNum) + 10); // type conversion example '10.5' to 10 then 10 + 10 = 20
console.log(parseFloat(decNum) + 10); // type conversion example '10.5' to 10.5 then 10.5 + 10 = 20.5
