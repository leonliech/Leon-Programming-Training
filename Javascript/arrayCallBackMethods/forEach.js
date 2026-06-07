// Accepts a callback function.
// Calls the function once per element in the array.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// SYNTAX 
// Array.callBackMethod(callbackFunction(parameter){
    // do anything 
// });
nums.forEach(function (n){
    console.log(n * n);
});

console.log("=== PRINT EVEN NUMBERS ONLY ===");
nums.forEach(function(el){
    if(el % 2 === 0){
        console.log(el);
    }
})


