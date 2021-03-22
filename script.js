//  Two Arrays
// arr1 = [1,2,3,1,1,11,1,1,1,23,41,1]
// arr2 = [0,1,2]

// is any number from array number two in the array number 1?

//

// const values = [3, 11, 7, 2, 9, 10];

// const getSum = function (array) {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     let element = array[index];
//     sum += element;
//   }
//   return sum;
// };

// // find max in array

// const getMax = function (array) {
//   let maxNum = 0;
//   for (let index = 0; index < values.length; index++) {
//     const element = values[index];
//     if (maxNum < element) {
//       maxNum = element;
//     }
//   }
//   return maxNum;
// };

// console.log(getSum(values));
// console.log(getMax(values));

// const getWords = function () {
//   let word = [];
//   let wordPlaceholder = "";
//   while (wordPlaceholder != "stop") {
//     wordPlaceholder = prompt("give me a word");
//     if (wordPlaceholder != "stop") {
//       word = word.concat(wordPlaceholder);
//     }
//   }
//   return word;
// };

// const wordInfo = function (word) {
//   let wordEval = word;
//   const vowels = ["a", "e", "i", "o", "u"];
//   let upperCase = 0;
//   let lowerCase = 0;
//   let length = 0;
//   let vowelsCount = 0;

//   length = wordEval.length;
//   for (let index = 0; index < wordEval.length; index++) {
//     const element = wordEval[index];

//     const checkCase = function () {
//       if (element === element.toUpperCase()) {
//         upperCase++;
//       } else {
//         lowerCase++;
//       }
//     };
//     const checkVowels = function () {
//       for (let index = 0; index < vowels.length; index++) {
//         const vowel = vowels[index];
//         if (vowel === element.toLowerCase()) {
//           vowelsCount++;
//         }
//       }
//     };
//     checkCase();
//     checkVowels();
//   }

//   console.log(`word length is ${length} character(s) long`);
//   console.log(`word has ${lowerCase} lowercase letter(s)`);
//   console.log(`word length ${upperCase} upper case letter(s)`);
//   console.log(`word has ${vowelsCount} vowel(s)`);
// };
// wordInfo(prompt("give me a word"));

//  reverse a string

// let string1 = "string";

// let newSting = string1.pop;
// console.log(newSting);

// let givenString = prompt("give word");
// let reversedString = "";

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("home"));
// reverseString(givenString);
// console.log(givenString);
// console.log(reversedString);

// if (givenString.toLocaleLowerCase() == reversedString.toLocaleLowerCase()) {
//   console.log("palindrome");
// }

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }
// console.log(max(4, 1, 9, -2)); // → 9

// let arr = ["I", "go", "home", "back", "red", "home"];

// alert(arr[1]); // undefined

// now arr = ["I",  , "home"];
// alert(arr.length); // 3

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element === "home") {
//     arr.slice([i], 1);
//   }
// }

// console.log(arr);

// let stringToProcess = "every-body-one";
// MY SOLUTION

// const camelize = function (str) {
//   let splitting = str.split("-");
//   for (let i = 1; i < splitting.length; i++) {
//     const element = splitting[i];
//     transformation = element.split("");
//     transformation.splice(
//       transformation[0],
//       1,
//       transformation[0].toUpperCase()
//     );
//     splitting[i] = transformation.join("");
//   }
//   return splitting.join("");
// };

// let camelizedString = camelize(stringToProcess);
// console.log(camelizedString);

// MODERN SOLUTION

// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)
// MY SOLUTION
// const filterRange = function (arr, min, max) {
//   let filteredValues = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= min && element <= max) {
//       filteredValues.push(element);
//     }
//   }
//   return filteredValues;
// };

// console.log(filterRange([1, 2, 3, 4, 5, , 5, 5, 5, 5, 6], 2, 5));
// // MODERN SOLUTION
// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter((item) => a <= item && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)

// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = function (arr, num1, num2) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element != num1 || element != num2) {
//       arr.splice(arr[i], 1);
//     }
//   }
//   return arr;
// };

// console.log(filterRangeInPlace(arr, 1, 4));

// alert( arr ); // [3, 1]

// PRINTER ERROR 7kyu

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(string) {
  const goodStreak = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ];
  const receivingString = [...string];
  let errorCount = 0;
  receivingString.forEach((streak) => {
    if (!goodStreak.includes(streak)) errorCount++;
  });

  return errorCount / receivingString.length;
}

const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

printerError(s);
