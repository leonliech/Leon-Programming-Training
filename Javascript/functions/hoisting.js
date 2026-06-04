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
//  In this case, printHello is defined in the global scope, so the function is hoisted to the top of the global scope.
//  Through hoisting, the function (including the logic) becomes accessible even before the line it was declared in the code.


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

