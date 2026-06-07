// MAP
// Creates a new array with
// the results of calling a
// callback on every element
// in the array

const texts = ['rofl', 'lol', 'omg', 'ttyl'];

const caps = texts.map(function (t){
    return t.toUpperCase();
});
console.log(texts); // [ 'rofl', 'lol', 'omg', 'ttyl' ]
console.log(caps);  // [ 'ROFL', 'LOL', 'OMG', 'TTYL' ]

const numbers = [20, 10, 15, 30];
const newNums = numbers.map(myFunc);

function myFunc(n){
    return n * 10;
};


console.log(newNums);