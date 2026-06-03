// A callback function is a function that is passed as an argument to another function and executed later.

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished.

function greet(callback){
    
    callback()
};

function sayHello(){
    console.log(`Hey George! How a you?`);
}

greet(sayHello);

//setimeout

// setTimeout() is an asynchronous function that takes a callback to execute after 2 seconds.
// The rest of the code continues executing without waiting.

    console.log("Execute immediately");
    console.log("Execute immediately");
    console.log("Execute immediately");
setTimeout(function(){
    console.log("Execute after 2 seconds");
}, 2000);

// 2. Callbacks in Functions Handling Operations
// When a function needs to execute different behaviors based on input, callbacks make the function flexible

function calculate(a, b, callback){
    return callback(a, b)
    // return add(2, 3);
}

function add(x, y){
    return x + y;
};

function mult(x, y){
    return x * y;
};

console.log(calculate(2, 3, add));
console.log(mult(4, 5, mult));

// 2. Error Handling Issues in Callbacks
// Error handling can get messy when dealing with nested callbacks.
function divide(a, b, callback){
    if(b === 0){
        callback(new Error("Cannot divide by zero"), null)
    } else {
        callback(null, a / b);
    }
};

function result(error, result){
    if(error){
        console.log("Error:", error.message);
    } else {
        console.log("Result:", result)
    }
}

console.log(divide(14, 7, result))
