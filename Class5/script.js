// function fun1(){
//     console.log("Hello");
// }

//----------------------------------------------------------------------------------------
//Displaying Duplicates

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
//-----------------------------------------------------------------------------------------------

// Arrow Function

let names = (name) => {
  //same as below
  return "Hello" + name;
};

let nam = (name) => "Hello" + name; //same as below

const displayDuplicates = (arr, element) => ({
  allDuplicates: [...new Set(arr.filter((item, i) => arr.indexOf(item) !== i))],
  isDuplicate: arr.filter((item) => item === element).length > 1,
});

console.log(displayDuplicates([1, 2, 3, 2, 4, 5, 3, 6], 2));

console.log(displayDuplicates([1, 2, 3, 4, 5], 6));
