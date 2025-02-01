// Array Creation Methods
let arr1 = ["a", "b", "c"];
let arr2 = new Array(1, 2, 3);
let arr3 = Array.from("hello"); // Creates array from iterable
let arr4 = [...arr1]; // Spread operator for copying

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

// Basic Array Operations
console.log("\n-- Basic Array Operations --");
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // Array length
fruits.push("mango"); // Add to end
fruits.unshift("grape"); // Add to beginning
console.log(fruits.pop()); // Remove and return last element
console.log(fruits.shift()); // Remove and return first element

// Array Access and Modification
console.log("\n-- Array Access and Modification --");
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Access by index
numbers[2] = 10; // Modify element
numbers.fill(0, 2, 4); // Fill with 0 from index 2 to 4

// Array Search Methods
console.log("\n-- Array Search Methods --");
let searchArray = [1, 2, 3, 2, 1];
console.log(searchArray.indexOf(2)); // First occurrence
console.log(searchArray.lastIndexOf(2)); // Last occurrence
console.log(searchArray.includes(3)); // Check existence
console.log(searchArray.find((x) => x > 2)); // Find first element meeting condition
console.log(searchArray.findIndex((x) => x > 2)); // Find index of first element meeting condition

// Array Transformation Methods
console.log("\n-- Array Transformation --");
let nums = [1, 2, 3, 4, 5];

// Map: Transform each element
let doubled = nums.map((x) => x * 2);

// Filter: Keep elements meeting condition
let evenNumbers = nums.filter((x) => x % 2 === 0);

// Reduce: Accumulate values
let sum = nums.reduce((acc, curr) => acc + curr, 0);

// Sorting and Reversing
console.log("\n-- Sorting and Reversing --");
let unsorted = [3, 1, 4, 1, 5];
console.log(unsorted.sort()); // Basic sort
console.log(unsorted.sort((a, b) => a - b)); // Numeric sort
console.log(unsorted.reverse()); // Reverse array

// Array Slicing and Splicing
console.log("\n-- Slicing and Splicing --");
let original = [1, 2, 3, 4, 5];
console.log(original.slice(1, 3)); // Extract section
original.splice(1, 2, "a", "b"); // Remove/insert elements
console.log(original);

// Array Flattening
console.log("\n-- Array Flattening --");
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // Flatten one level
console.log(nested.flat(2)); // Flatten two levels

// Array Iteration Methods
console.log("\n-- Array Iteration --");
let testArray = [1, 2, 3];

// forEach: Execute function for each element
testArray.forEach((x) => console.log(x));

// some: Check if any element meets condition
console.log(testArray.some((x) => x > 2));

// every: Check if all elements meet condition
console.log(testArray.every((x) => x > 0));

// Practical Examples
console.log("\n-- Practical Examples --");

// 1. Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// 2. Chunk array
function chunkArray(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));

// 3. Intersection of arrays
function intersection(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}
console.log(intersection([1, 2, 3], [2, 3, 4]));

// 4. Moving average
function movingAverage(arr, windowSize) {
  return arr
    .map((_, i, a) =>
      i < windowSize - 1
        ? null
        : a.slice(i - windowSize + 1, i + 1).reduce((sum, n) => sum + n, 0) /
          windowSize
    )
    .filter((x) => x !== null);
}
console.log(movingAverage([1, 2, 3, 4, 5], 3));
