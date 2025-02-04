// function fun1(){
//     console.log("Hello");
// }

// // ----------------------------------------------------------------------------------------
// // Displaying Duplicates

// let greet = function (name) {
//   return `Welcome ${name}`;
// };

// function findDuplicates(arr) {
//   let seen = new Array();
//   let duplicates = new Array();

//   for (let num of arr) {
//     if (seen.has(num)) {
//       duplicates.add(num);
//     } else {
//       seen.add(num);
//     }
//   }
//   console.log("Duplicate values:", [...duplicates]);
// }

// findDuplicates([1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1]);
// // -----------------------------------------------------------------------------------------------

// // Arrow Function

// let names = (name) => {
//   //same as below
//   return "Hello" + name;
// };

// let nam = (name) => "Hello" + name; //same as below

// const displayDuplicates = (arr, element) => ({
//   allDuplicates: [...new Set(arr.filter((item, i) => arr.indexOf(item) !== i))],
//   isDuplicate: arr.filter((item) => item === element).length > 1,
// });

// console.log(displayDuplicates([1, 2, 3, 2, 4, 5, 3, 6], 2));

// console.log(displayDuplicates([1, 2, 3, 4, 5], 6));
// //--------------------------------------------------------------------------------------------

// High Order Functions
//Not High Order Function
let add = function (a, b) {
  return a + b;
};

let multiply = function (a, b) {
  return a * b;
};
let manipulator = function (a, b, func) {
  return func(a, b);
};

const add = (a, b) => a + b; //High Order Function
const multiply = (a, b) => a * b;
const manipulator = (a, b, func) => func(a, b);

console.log(manipulator(3, 5, multiply));
