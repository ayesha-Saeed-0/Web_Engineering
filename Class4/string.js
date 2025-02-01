// String Creation Methods
let str1 = "Regular string";
let str2 = new String("String object"); // Not recommended
let str3 = `Template literal`;
let value = 42;
let templateStr = `Value is: ${value}`; // Template literal with interpolation

console.log(str1);
console.log(str2);
console.log(str3);
console.log(templateStr);

// String Properties
console.log("-- String Properties --");
console.log(str1.length); // Get string length

// String Access Methods
console.log("\n-- String Access --");
console.log(str1[0]); // Access character by index
console.log(str1.charAt(0)); // Same as above, but safer

// String Search Methods
console.log("\n-- String Search Methods --");
let searchStr = "Hello World World";
console.log(searchStr.indexOf("World")); // First occurrence
console.log(searchStr.lastIndexOf("World")); // Last occurrence
console.log(searchStr.search(/World/)); // With regex
console.log(searchStr.includes("World")); // Returns boolean
console.log(searchStr.startsWith("Hello")); // Check start
console.log(searchStr.endsWith("World")); // Check end

// String Extraction Methods
console.log("\n-- String Extraction --");
let text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13)); // Extract from index 7 to 13
console.log(text.slice(-12, -6)); // Using negative indices
console.log(text.substring(7, 13)); // Similar to slice but can't use negative
console.log(text.substr(7, 6)); // Second parameter is length

// String Modification Methods
console.log("\n-- String Modification --");
let modStr = "   Hello World   ";
console.log(modStr.trim()); // Remove whitespace from both ends
console.log(modStr.trimStart()); // Remove whitespace from start
console.log(modStr.trimEnd()); // Remove whitespace from end
console.log(modStr.toUpperCase()); // Convert to uppercase
console.log(modStr.toLowerCase()); // Convert to lowercase

// String Replacement Methods
console.log("\n-- String Replacement --");
let replaceStr = "Hello World";
console.log(replaceStr.replace("World", "JavaScript")); // Replace first occurrence
console.log(replaceStr.replaceAll("l", "L")); // Replace all occurrences

// String Split and Join
console.log("\n-- String Split and Join --");
let csvStr = "apple,banana,kiwi";
let arr = csvStr.split(","); // Split string into array
console.log(arr);
console.log(arr.join("-")); // Join array elements with separator

// String Comparison
console.log("\n-- String Comparison --");
let str4 = "apple";
let str5 = "apple";
console.log(str4.localeCompare(str5)); // Compare strings

// Newer ES2021+ Methods
console.log("\n-- Modern String Methods --");
let longString = "Hello".repeat(3); // Repeat string
console.log(longString);
