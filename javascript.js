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
cosnole.log(str5.trimEnd()); // Hello World
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






