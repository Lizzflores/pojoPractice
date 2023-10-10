/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/
//we are going to return an object so we have to create an empty one first
//split the string so it turns into an array
// then we have to iterate the array
// we can do that with for each
// check if the key already exist if it does we will increment the value
//if it doesnt we add it.
function stringConverter(string) {
  let obj = {};
  let array = string.split("");

  array.forEach((element) => {
    if (obj[element] === undefined) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  });

  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
