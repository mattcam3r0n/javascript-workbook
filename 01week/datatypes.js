'use strict';

// 1. Write a JavaScript program to display the current day and time.
function displayDateAndTime() {
  return Date();
}

console.log('\n\ndisplayDateAndTime');
console.log('------------------');
console.log('The current date and time is: ', displayDateAndTime());



// 2. Write a JavaScript program to convert a number to a string.
function convertNumberToString(num) {
  // ensure num is really a number, to handle strings, nulls, etc
  const convertedNum = Number(num);
  return convertedNum.toString();
}

console.log('\n\nconvertNumberToString');
console.log('---------------------');
console.log("5 should convert to '5': ", convertNumberToString(5) === '5');
console.log("5.5 should convert to '5.5': ", convertNumberToString(5.5) === '5.5');
console.log("5.5 should convert to '5.5': ", convertNumberToString(5.5) === '5.5');
console.log("'five' should convert to 'NaN': ", convertNumberToString() === 'NaN');
console.log("null should convert to '0': ", convertNumberToString(null) === '0');



// 3. Write a JavaScript program to convert a string to the number.
function convertStringToNumber(str) {
  return Number(str);
}

console.log('\n\nconvertStringToNumber');
console.log('---------------------');
console.log("'5' should convert to 5: ", convertStringToNumber('5') === 5);
console.log("'5.5' should convert to 5.5: ", convertStringToNumber('5.5') === 5.5);
console.log("'five' should convert to NaN: ", Number.isNaN(convertStringToNumber('five')));
console.log("'' should convert to 0: ", convertStringToNumber('') === 0);



// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//    Boolean
//    Null
//    Undefined
//    Number
//    NaN
//    String
function getDataType(val) {
  // NaN and null are special cases
  if (Number.isNaN(val)) return 'NaN';
  if (val === null) return 'null';

  return typeof val;
}

console.log('\n\ngetDataType');
console.log('-----------');
console.log("5 should return 'number': ", getDataType(5) === 'number');
console.log("'5' should return 'string': ", getDataType('5') === 'string');
console.log("true should return 'boolean': ", getDataType(true) === 'boolean');
console.log("null should return 'null': ", getDataType(null) === 'null');
console.log("undefined should return 'undefined': ", getDataType() === 'undefined');
console.log("NaN should return 'NaN': ", getDataType(NaN) === 'NaN');



// 5. Write a JavaScript program that adds 2 numbers together.
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log('\n\nsumOfTwoNumbers');
console.log('--------------');
console.log('2 + 2 should equal 4: ', sumOfTwoNumbers(2, 2) === 4);



// 6. Write a JavaScript program that runs only when 2 things are true.
function printSomethingWhenBothArgsAreTrue(arg1, arg2) {
  if (arg1 && arg2) {
    console.log('Both arguments are true!');
  }
}

console.log('\n\printSomethingWhenBothArgsAreTrue');
console.log('--------------------------------');
printSomethingWhenBothArgsAreTrue(true, false); // should print nothing
printSomethingWhenBothArgsAreTrue(1, 2); // should print 'both args are true'

// 7. Write a JavaScript program that runs when 1 of 2 things are true.
function printSomethingWhenOneArgIsTrue(arg1, arg2) {
  if (arg1 || arg2) {
    console.log('At least one argument is true!');
  }
}

console.log('\n\printSomethingWhenOneArgIsTrue');
console.log('-----------------------------');
printSomethingWhenOneArgIsTrue(true, false); // should print msg
printSomethingWhenOneArgIsTrue(0, null); // should print nothing



// 8. Write a JavaScript program that runs when both things are not true.
function printSomethingWhenBothArgsAreFalse(arg1, arg2) {
  if (!(arg1 || arg2)) {
    console.log('Neither argument is true!');
  }
}

console.log('\n\printSomethingWhenBothArgsAreFalse');
console.log('---------------------------------');
printSomethingWhenBothArgsAreFalse(true, 0);        // should not print msg
printSomethingWhenBothArgsAreFalse(null, undefined); // should print msg