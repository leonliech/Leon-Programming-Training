// Accepts a callback function.
// Calls the function once per element in the array.

// const numsTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const num = [2, 3, 4, 5, 6, 7];
console.log(num);

// SYNTAX
// Array.callBackMethod(callbackFunction(parameter){
// do anything
// });
// nums.forEach(function (n){
//     console.log(n * n);
// });
num.forEach(n => console.log(n * n));

console.log("=== PRINT EVEN NUMBERS ONLY ===");
// nums.forEach(function(el){
//     if(el % 2 === 0){
//         console.log(el);
//     }
// })
