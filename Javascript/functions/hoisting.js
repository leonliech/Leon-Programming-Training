// Hoisting is a concept or behavior in JavaScript where the declaration of a function, 
// variable, or class goes to the top of the scope they were defined in. 
// What does this mean?

// Hoisting is a concept you may find in some programming languages (such as JavaScript) and not in others.
//  It's a special behavior of the JavaScript interpreter.

printHello();

function printHello(){
    console.log("Hello World!!")
};  
// Before the interpreter executes the whole code, it first hoists (raises, or lifts) the declared function to the top of the scope it is defined in.
// In this case, printHello is defined in the global scope, so the function is hoisted to the top of the global scope.
// Through hoisting, the function (including the logic) becomes accessible even before the line it was declared in the code.


printHello2()
// hello

// printDillion()
// ReferenceError: printDillion is not defined

function printHello2() {
    printDillion()

  console.log('hello')

  function printDillion() {
    console.log("dillion")
  }
}

// As you see here, we declare printHello. In this function, we first execute console.log('hello') then we declare another function called printDillion which executes console.log('dillion') when called.

// Before printHello is declared in the code, we try to access it by executing printHello(). It's accessible (since it is hoisted to the top of the global scope), so we have "hello" printed on the console.

// But then we try to access printDillion, and we get a reference error: printDillion is not defined. Does hoisting not occur on printDillion?

// printDillion is hoisted, but it is only lifted to the top of the scope it was declared in. In this case, it is declared in a local scope--in printHello. Therefore, it would only be accessible in the function.


// Variable Hoisting

// With variables declared var, the variable declaration is hoisted but with a default value of undefined. The actual value is initialized when the declaration line is executed.

// By accessing the variable after that line, we get the actual value


console.log(varHoist); // undefined
var varHoist = "This is variable hoisting";
console.log(varHoist); // This is variable hoisting


print()
//  console.log(name); // ReferenceError: name is not defined
function print(){
  console.log(name) // undefined
  var name = "Leon";
  console.log(name) // Leon
}

// Hoisting let variables
console.log(name)
// ReferenceError: Cannot access 'name' before initialization

let name = "Dillion"
console.log(name) // Dillion

// Here, we get a reference error: Cannot access 'name' before initialization. 
// Do you notice that the error does not say name is not defined? 
// That's because the interpreter is "aware" of a name variable because the variable is hoisted.

// "Cannot access 'name' before initialization" occurs because variables declared with let do not have a default value when hoisted. 
// As we saw in var, the variables have a default value of undefined until the line where the declaration/initialization is executed.
//  But with let, the variables are uninitialized.


// Hoisting const variables - same concept as Hoisting let variables