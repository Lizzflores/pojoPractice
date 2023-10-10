/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/
// return how many times the keys have the word apple
// return the count
//lowerCase all the keys to check
//turn them to lowercase and then check wich ones include the word apple and increment the count for the ones who do
function appleCounter(appleObj) {
  // let appleCount = 0;

  // for(let key in appleObj){
  //   if(key.toLowerCase().includes("apple")){
  //     appleCount++;
  //   }

  // }

  // return appleCount;
  return Object.keys(appleObj).filter(key => key.toLowerCase().includes('apple')).length;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
