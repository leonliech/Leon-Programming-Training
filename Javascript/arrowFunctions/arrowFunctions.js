// ARROW
// FUNCTIONS
// "syntactically compact alternative" to a regular function expression

// use empty parens for functions with no parameters
const name = () => {
    return "Leon"
}
console.log(name());

// Parens are optional if you only have one parameter
const squared = x => {
    return x * x;
}
console.log(squared(4));

// IMPLICIT RETURN
const isEven = num => (
    num % 2 === 0
);
console.log(isEven(4)); // true

const evenNums = n => n % 2 === 0;
console.log(evenNums(6));

