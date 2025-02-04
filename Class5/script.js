// function fun1(){
//     console.log("Hello");
// }

let greet = function (name) {
  return `Welcome ${name}`;
};

function findDuplicates(arr) {
  let seen = new Array();
  let duplicates = new Array();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  console.log("Duplicate values:", [...duplicates]);
}

findDuplicates([1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1]);
