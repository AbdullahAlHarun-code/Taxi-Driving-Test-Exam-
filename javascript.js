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

//difference between parseInt and parseFloat
console.log(Number('10')); // 10
console.log(Number('10.5')); // 10.5
console.log(Number('10abc')); // NaN because it's not a number

console.log(parseInt('10')); // 10
console.log(parseInt('10.5')); // 10
console.log(parseInt('10abc')); // 10
console.log(parseInt('abc10')); // NaN
console.log(parseInt('10', 2)); // 2 (binary interpretation)(explained in the video)
console.log(parseInt('10', 8)); // 8 (octal interpretation)(explained in the video)
console.log(parseInt('10', 16)); // 16 (hexadecimal interpretation)(explained in the video)


// now parseFloat
console.log(parseFloat('10')); // 10
console.log(parseFloat('10.5')); // 10.5
console.log(parseFloat('10abc')); // 10
console.log(parseFloat('abc10')); // NaN
console.log(parseFloat('10.5abc')); // 10.5
console.log(parseFloat('10.5abc10')); // 10.5
console.log(parseFloat('abc10.5abc')); // NaN because it's not a number and it's not at the start

// compare Number, parseInt and parseFloat with example
console.log(Number('10.5abc')); // NaN
console.log(parseInt('10.5abc')); // 10
console.log(parseFloat('10.5abc')); // 10.5

// ----------------------------
// now basic math module operators
let x = 10.5;
console.log(x);
console.log(Math.abs(x)); // absolute value example -10.5 will be 10.5
console.log(Math.sqrt(x)); // square root example 10.5 will be 3.24037034920393
console.log(Math.cbrt(x)); // cube root example 10.5 will be 2.223980090569315
console.log(Math.pow(x, 3)); // power example 10.5^3
console.log(Math.min(10, 20, 30, 40)); // minimum value example 10
console.log(Math.max(10, 20, 30, 40)); // maximum value example 40
console.log(Math.floor(x)); // floor means round down example 10.9 will be 10
console.log(Math.ceil(x)); // ceil means round up example 10.1 will be 11
console.log(Math.round(x)); // round means round to the nearest integer example 10.1 will be 10 and 10.9 will be 11
console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

// ----------------------------
// now basic math module constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.SQRT2); // 1.4142135623730951

// ----------------------------
// now basic math module trigonometry
let angle = 90;
console.log(angle);
console.log(Math.sin(angle)); // 0.8939966636005579
console.log(Math.cos(angle)); // -0.4480736161291701
console.log(Math.tan(angle)); // -1.995200412208242
console.log(Math.asin(angle)); // NaN
console.log(Math.acos(angle)); // NaN
console.log(Math.atan(angle)); // 1.5596856728972892
console.log(Math.atan2(10, 20)); // 0.4636476090008061
console.log(Math.sinh(angle)); // 6.102016471589204e+38
console.log(Math.cosh(angle)); // 6.102016471589204e+38
console.log(Math.tanh(angle)); // 1
console.log(Math.asinh(angle)); // 5.192987713658941
console.log(Math.acosh(angle)); // 5.192987713658941
console.log(Math.atanh(angle)); // NaN

// ----------------------------
// now basic math module logarithm
let num1 = 10;
console.log(num1);
console.log(Math.log(num1)); // 2.302585092994046
console.log(Math.log10(num1)); // 1
console.log(Math.log2(num1)); // 3.321928094887362
console.log(Math.exp(num1)); // 22026.465794806718
console.log(Math.expm1(num1)); // 22025.465794806718
console.log(Math.log1p(num1)); // 2.3978952727983707
console.log(Math.log2(num1)); // 3.321928094887362
console.log(Math.log10(num1)); // 1
console.log(Math.log1p(num1)); // 2.3978952727983707

// ----------------------------
// now basic math module rounding
let num2 = 10.5;
console.log(num2);
console.log(Math.round(num2)); // 11
console.log(Math.trunc(num2)); // 10    
console.log(Math.floor(num2)); // 10
console.log(Math.ceil(num2)); // 11
console.log(Math.sign(num2)); // 1
console.log(Math.sign(-num2)); // -1
console.log(Math.sign(0)); // 0

// ----------------------------
// now comparison    
let num3 = 10.5;
console.log(num3);
console.log(num3 == 10); // false in words it's equal to 10
console.log(num3 != 10); // true in words it's not equal to 10
console.log(num3 === 10); // false in words it's strictly equal to 10
console.log(num3 !== 10); // true in words it's not strictly equal to 10
console.log(num3 > 10); // true in words it's greater than 10
console.log(num3 >= 10); // true in words it's greater than or equal to 10
console.log(num3 < 10); // false in words it's less than 10
console.log(num3 <= 10); // false in words it's less than or equal to 10


// ----------------------------
// now logical operators
let num4 = 10;
console.log(num4);
console.log(num4 == 10 && num4 == 20); // false because both conditions are not true
console.log(num4 == 10 || num4 == 20); // true because one condition is true
console.log(!(num4 == 10)); // false because the condition is true
console.log(!(num4 == 20)); // true because the condition is false

// ----------------------------
// Nan example all poosible ways to get NaN
console.log(10 / 'a'); // NaN
console.log(10 / '10'); // 1
console.log(10 / 'abc'); // NaN
console.log(10 / NaN); // NaN
console.log(10 / undefined); // NaN
console.log(10 / null); // Infinity
console.log(10 / ''); // Infinity
console.log(10 / ' '); // Infinity
console.log(10 / '0'); // Infinity
console.log(10 / '0.0'); // Infinity
console.log(10 / '0.00'); // Infinity
console.log(10 / '0.000'); // Infinity
console.log(10 / '0.0000'); // Infinity
console.log(10 / '0.00000'); // Infinity

// ----------------------------
// now wraper functions
let str = 'Hello World';
console.log(str);
console.log(str.length); // 11
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e
console.log(str.charAt(2)); // l
console.log(str.charAt(3)); // l
console.log(str.charAt(4)); // o
console.log(str.charAt(5)); //
console.log(str.charAt(6)); // W
console.log(str.charAt(7)); // o
console.log(str.charAt(8)); // r
console.log(str.charAt(9)); // l
console.log(str.charAt(10)); // d
console.log(str.charAt(11)); // empty
console.log(str.charCodeAt(0)); // 72 (ASCII value of H)
console.log(str.charCodeAt(1)); // 101 (ASCII value of e)
console.log(str.charCodeAt(2)); // 108 (ASCII value of l)
console.log(str.charCodeAt(3)); // 108 (ASCII value of l)
console.log(str.charCodeAt(4)); // 111 (ASCII value of o)
console.log(str.charCodeAt(5)); // 32 (ASCII value of space)
console.log(str.charCodeAt(6)); // 87 (ASCII value of W)
console.log(str.charCodeAt(7)); // 111 (ASCII value of o)
console.log(str.charCodeAt(8)); // 114 (ASCII value of r)
console.log(str.charCodeAt(9)); // 108 (ASCII value of l)
console.log(str.charCodeAt(10)); // 100 (ASCII value of d)
console.log(str.charCodeAt(11)); // NaN
console.log(str.concat('!')); // Hello World!
console.log(str.concat('!', '!', '!', '!', '!')); // Hello World!!!!!   
console.log(str.indexOf('H')); // 0
console.log(str.indexOf('e')); // 1
console.log(BigInt(str.indexOf('e'))); // 1n

// ----------------------------
// single cot and double cot and bactriot all operations with example include escape character and  and new line and tab and backslash and single cot and double cot
let str1 = 'Hello World'; // single cot
let str2 = "Hello World"; // double cot
let str3 = `Hello World`;   // backtick

console.log(str1);
console.log(str2);
console.log(str1 == str2); // true
console.log(str1 === str2); // true
console.log(str1 + ' ' + str2); // Hello World Hello World
console.log(str1 + ' ' + str2 + ' ' + str1); // Hello World Hello World Hello World
console.log(str1 + ' ' + str2 + ' ' + str1 + ' ' + str2); // Hello World Hello World Hello World Hello World
console.log(`test ${str1} test`); // test Hello World test
// make difference between single cot and double cot and backtick
console.log('test ${str1} test'); // test ${str1} test because single cot doesn't support variable
console.log("test ${str1} test"); // test ${str1} test because double cot doesn't support variable
console.log(`test ${str1} test`); // test Hello World test because backtick supports variable
// concatination possible all the way
console.log('test ' + str1 + ' test'); // test Hello World test
console.log("test " + str1 + " test"); // test Hello World test
console.log(`test ${str1} test`); // test Hello World test
// escape character
console.log('Hello \'World\''); // Hello 'World'
console.log("Hello \"World\""); // Hello "World"
console.log(`Hello 'World'`); // Hello 'World' 
console.log('Hello \\World\\'); // Hello \World\    
console.log("Hello \\World\\"); // Hello \World\
console.log(`Hello \\World\\`); // Hello \World\ 
console.log('Hello \nWorld'); // Hello World (new line)
console.log("Hello \nWorld"); // Hello World (new line)
console.log(`Hello \nWorld`); // Hello World (new line)
console.log('Hello \tWorld'); // Hello World (tab)
console.log("Hello \tWorld"); // Hello World (tab)
console.log(`Hello \tWorld`); // Hello World (tab)
console.log('Hello \bWorld'); // Hello World (backspace)
console.log("Hello \bWorld"); // Hello World (backspace)
console.log(`Hello \bWorld`); // Hello World (backspace)
console.log('Hello \rWorld'); // World (carriage return)
console.log("Hello \rWorld"); // World (carriage return)
console.log(`Hello \rWorld`); // World (carriage return)
console.log('Hello \fWorld'); // Hello World (form feed)
console.log("Hello \fWorld"); // Hello World (form feed)
console.log(`Hello \fWorld`); // Hello World (form feed)
console.log('Hello \vWorld'); // Hello World (vertical tab)
console.log("Hello \vWorld"); // Hello World (vertical tab)
console.log(`Hello \vWorld`); // Hello World (vertical tab)
console.log('Hello \0World'); // Hello World (null)
console.log("Hello \0World"); // Hello World (null)
console.log(`Hello \0World`); // Hello World (null)
console.log('Hello \x00World'); // Hello World (null)
// big string example with new line concatination
console.log('Hello ' +  
'World'); // Hello World
console.log("Hello " +
"World"); // Hello World
console.log(`Hello
World`); // Hello World
// big string example with new line concatination and variable
console.log('Hello ' +
str1); // Hello Hello World
console.log("Hello " +
str1); // Hello Hello World
console.log(`Hello
${str1}`); // Hello Hello World
// ----------------------------
// now string operations
let str4 = 'Hello World';
console.log(str4);
console.log(str4.length); // 11
console.log(str4.charAt(0)); // H
// substring
console.log(str4.substring(0, 5)); // Hello
console.log(str4.substring(6, 11)); // World
console.log(str4.substring(0, 11)); // Hello World
// substr
console.log(str4.substr(0, 5)); // Hello
console.log(str4.substr(6, 5)); // World
console.log(str4.substr(0, 11)); // Hello World
// slice
console.log(str4.slice(0, 5)); // Hello
console.log(str4.slice(6, 11)); // World
console.log(str4.slice(0, 11)); // Hello World
// replace
console.log(str4.replace('Hello', 'Hi')); // Hi World
// split
console.log(str4.split(' ')); // ['Hello', 'World']
// trim
let str5 = '   Hello World   '; // extra space
console.log(str5.trim()); // Hello World
console.log(str5.trim().length); // 11
//cosnole.log(str5.trimEnd()); // Hello World
console.log(str5.trimEnd().length); // 14
console.log(str5.trimStart()); // Hello World
console.log(str5.trimStart().length); // 14
// repeat
console.log(str4.repeat(2)); // Hello WorldHello World
// includes
console.log(str4.includes('Hello')); // true
console.log(str4.includes('Hi')); // false
// startsWith
console.log(str4.startsWith('Hello')); // true
console.log(str4.startsWith('Hi')); // false
// endsWith
console.log(str4.endsWith('World')); // true
console.log(str4.endsWith('Hi')); // false
// search
console.log(str4.search('Hello')); // 0
console.log(str4.search('Hi')); // -1
// match
console.log(str4.match('Hello')); // ['Hello', index: 0, input: 'Hello World', groups: undefined]
console.log(str4.match('Hi')); // null be

// ----------------------------
// now object
let obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(obj);
console.log(obj.name); // John
console.log(obj.age); // 30
console.log(obj.city); // New York
console.log(obj['name']); // John
console.log(obj['age']); // 30
console.log(obj['city']); // New York 
// update
obj.name = 'Smith';
console.log(obj.name); // Smith
// add
obj.country = 'USA';
console.log(obj.country); // USA
// delete
delete obj.country;
console.log(obj.country); // undefined
// jsonstringify
let json = JSON.stringify(obj);
console.log(json); // {"name":"Smith","age":30,"city":"New York"}
// jsonparse
let obj1 = JSON.parse(json);
console.log(obj1); // {name: "Smith", age: 30, city: "New York"}
// difference between jsonstringify and jsonparse
console.log(obj == obj1); // false
console.log(obj === obj1); // false
// Map example
// Methods: set(), get(), delete(), has(), clear(), size.
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');
console.log(map); // Map(3) {"name" => "John", "age" => 30, "city" => "New York"}
console.log(map.get('name')); // John
// remove
map.delete('name');
// add
map.set('country', 'USA');
console.log(map); // Map(3) {"age" => 30, "city" => "New York", "country" => "USA"}
// update
map.set('city', 'Los Angeles');
console.log(map); // Map(3) {"age" => 30, "city" => "Los Angeles", "country" => "USA"}
// clear
map.clear();
console.log(map); // Map(0) {}
// Set example
let set = new Set();
set.add('John');
set.add(30);
set.add('New York');
console.log(set); // Set(3) {"John", 30, "New York"}    
console.log(set.has('John')); // true
console.log(set.has(30)); // true
console.log(set.has('New York')); // true
// remove
set.delete('John');
// add
set.add('USA');
console.log(set); // Set(3) {30, "New York", "USA"}
// clear
set.clear();
console.log(set); // Set(0) {}
// WeakMap example
let weakMap = new WeakMap();
let key = {
    name: 'John'
};
weakMap.set(key, 'John');
/*
Summary
Object: Key-value pairs with string keys, unordered.
Map: Key-value pairs with keys of any type, ordered by insertion.
Set: Unique values, ordered by insertion.
*/

// ----------------------------
// now array define array all possible ways
let arr = [10, 20, 30];
console.log(arr);
console.log(arr[0]); // 10
console.log(arr[1]); // 20
// array methods
console.log(arr.length); // 3
console.log(arr.push(40)); // 4 (add 40 at the end)
console.log(arr); // [10, 20, 30, 40]
console.log(arr.pop()); // 40 (remove 40 from the end)
console.log(arr); // [10, 20, 30]
console.log(arr.unshift(0)); // 4 (add 0 at the start)
console.log(arr); // [0, 10, 20, 30]
console.log(arr.shift()); // 0 (remove 0 from the start)
console.log(arr); // [10, 20, 30]
console.log(arr.indexOf(10)); // 0
console.log(arr.indexOf(20)); // 1
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(40)); // -1
console.log(arr.includes(10)); // true
console.log(arr.includes(20)); // true
console.log(arr.includes(30)); // true
console.log(arr.includes(40)); // false
console.log(arr.join()); // 10,20,30 (default separator is comma)
console.log(arr.join('')); // 102030 (no separator)
console.log(arr.join('-')); // 10-20-30 (separator is -)
console.log(arr.join(' ')); // 10 20 30 (separator is space)
console.log(arr.reverse()); // [30, 20, 10]
console.log(arr.sort()); // [10, 20, 30]    
console.log(arr.concat(40, 50)); // [10, 20, 30, 40, 50] example 40 and 50 are added at the end of the array.
console.log(arr.concat([40, 50])); // [10, 20, 30, 40, 50] example 40 and 50 are added at the end of the array.
console.log(arr.concat([40, 50], [60, 70])); // [10, 20, 30, 40, 50, 60, 70] example 40, 50, 60 and 70 are added at the end of the array.
console.log(arr.slice(0, 2)); // [10, 20] example 10 and 20 are sliced from the array.
console.log(arr.slice(1, 3)); // [20, 30] example 20 and
console.log(arr.slice(0, 3)); // [10, 20, 30] example 10
console.log(arr.slice(1, 2)); // [20] example 20 is sliced from the array.
console.log(arr.slice(1, 1)); // [] example nothing is sliced from the array.
console.log(arr.slice(1, 0)); // [] example nothing is sliced from the array.
console.log(arr.slice(2, 1)); // [] example nothing is sliced from the array.
console.log(arr.slice(2, 0)); // [] example nothing is sliced from the array.
console.log(arr.slice(0, 0)); // [] example nothing is sliced from the array.
console.log(arr.slice(0, 1)); // [10] example 10 is sliced from the array.
console.log(arr.slice(0, 2)); // [10, 20] example 10 and
// now other methods
console.log(arr.toString()); // 10,20,30 (default separator is comma)
console.log(arr.toString('')); // 102030 (no separator)
console.log(arr.toString('-')); // 10-20-30 (separator is -)
console.log(arr.toString(' ')); // 10 20 30 (separator is space)
console.log(arr.toString()); // 10,20,30 (default separator is comma)
// now other all methods exccept previous

arr = [10, 20, 30];

// concat()
console.log(arr.concat([40, 50], [60, 70])); // [10, 20, 30, 40, 50, 60, 70] example 40, 50, 60 and 70 are added at the end of the array.

// slice()
console.log(arr.slice(0, 2)); // [10, 20] example 10 and 20 are sliced from the array.
console.log(arr.slice(1, 3)); // [20, 30] example 20 and 30 are sliced from the array.
console.log(arr.slice(0, 3)); // [10, 20, 30] example 10, 20 and 30 are sliced from the array.
console.log(arr.slice(1, 2)); // [20] example 20 is sliced from the array.
console.log(arr.slice(1, 1)); // [] example nothing is sliced from the array.
console.log(arr.slice(1, 0)); // [] example nothing is sliced from the array.
console.log(arr.slice(2, 1)); // [] example nothing is sliced from the array.
console.log(arr.slice(2, 0)); // [] example nothing is sliced from the array.
console.log(arr.slice(0, 0)); // [] example nothing is sliced from the array.
console.log(arr.slice(0, 1)); // [10] example 10 is sliced from the array.
console.log(arr.slice(0, 2)); // [10, 20] example 10 and 20 are sliced from the array.

// toString()
console.log(arr.toString()); // 10,20,30 (default separator is comma)
console.log(arr.toString('')); // 102030 (no separator)
console.log(arr.toString('-')); // 10-20-30 (separator is -)
console.log(arr.toString(' ')); // 10 20 30 (separator is space)
console.log(arr.toString()); // 10,20,30 (default separator is comma)

// push()
arr.push(40); // [10, 20, 30, 40]
console.log(arr); // [10, 20, 30, 40]

// pop()
let lastElement = arr.pop(); // 40
console.log(arr); // [10, 20, 30]
console.log(lastElement); // 40

// shift()
let firstElement = arr.shift(); // 10
console.log(arr); // [20, 30]
console.log(firstElement); // 10

// unshift()
arr.unshift(0); // [0, 20, 30]
console.log(arr); // [0, 20, 30]

// splice()
arr.splice(1, 1, 25, 35); // [0, 25, 35, 30]
console.log(arr); // [0, 25, 35, 30]

// forEach()
arr.forEach(function(element) {
    console.log(element); // 0, 25, 35, 30
});

// map()
let newArr = arr.map(function(element) {
    return element * 2;
});
console.log(newArr); // [0, 50, 70, 60]

// filter()
let filteredArr = arr.filter(function(element) {
    return element > 20;
});
console.log(filteredArr); // [25, 35, 30]

// reduce() example 0 + 25 + 35 + 30 = 90
// reduce function explanation how it works 
let sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 90

// find()
let found = arr.find(function(element) {
    return element > 20;
});
console.log(found); // 25

// findIndex()
let index = arr.findIndex(function(element) {
    return element > 20;
});
console.log(index); // 1

// includes()
let hasValue = arr.includes(25);
console.log(hasValue); // true

// indexOf()
index = arr.indexOf(25);
console.log(index); // 1

// join()
let str = arr.join('-');
console.log(str); // "0-25-35-30"

// reverse()
arr.reverse();
console.log(arr); // [30, 35, 25, 0]

// sort()
arr.sort();
console.log(arr); // [0, 25, 30, 35]

// ----------------------------

// now function define function all possible ways
function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // 30
// function expression
let sub = function(a, b) {
    return a - b;
};
console.log(sub(20, 10)); // 10
// arrow function
let mul = (a, b) => a * b;
console.log(mul(10, 20)); // 200
// function constructor
let div = new Function('a', 'b', 'return a / b'); // not recommended because of security
console.log(div(20, 10)); // 2
// self-invoking function
(function() {
    console.log('Hello World');
})(); // Hello World
// function inside object
let obj2 = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(obj2.add(10, 20)); // 30
// function inside object shorthand
let obj3 = {
    add(a, b) {
        return a + b;
    }
};
console.log(obj3.add(10, 20)); // 30
// function inside object arrow function
let obj4 = {
    add: (a, b) => a + b
};
console.log(obj4.add(10, 20)); // 30
// function inside object arrow function shorthand
let obj5 = {
    add(a, b) {
        return a + b;
    }
};
console.log(obj5.add(10, 20)); // 30
// function inside function
function outer() {
    function inner() {
        console.log('Hello World');
    }
    inner();
}
outer(); // Hello World
// function inside function with return
function outer() {
    function inner() {
        return 'Hello World';
    }
    return inner();
}
console.log(outer()); // Hello World
// function inside function with return and parameter
function outer() {
    function inner(name) {
        return 'Hello ' + name;
    }
    return inner('John');
}
console.log(outer()); // Hello John
console.log(outer('Smith')); // Hello John or Hello Smith which one is correct answer? and why? and how to fix it? 
function outer(name) {
    function inner(name='john') {
        return 'Hello ' + name;
    }
    return inner(name);
}
console.log(outer('Smith')); // Hello Smith
// function inside function with return and parameter

// ----------------------------
// function call in parameter from another function
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 20, add)); // 30
console.log(calculate(20, 10, sub)); // 10
console.log(calculate(10, 20, mul)); // 200
console.log(calculate(20, 10, div)); // 2









