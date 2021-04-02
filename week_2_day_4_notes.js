//day 04 funcs, hoisting, literals  
/*
//literals 
//are vars in js have been hardcoded

let mascot = "bulldog";
let myAge = 30;
let arr = [];


//hoisting
//js puts vars declarations and functions
//into memory using compile phase of the code
//only works with var - not 'let'

console.log(name);
//the var name is hoised and returns as undefined
//the declaration is hoisted but not the value
var name = "em j";
//let and const are NEVER hoisted, only funcs and vars

//funcs
funcName();

function funcName() {};
//function declarations are like variables and they are hoisted

let funcVar = function() {
        console.log('this is a function expression')
    }
    //function expressions are not hoisted

//SCOPE
//hierarchy of scope = global, local, parent, child scope
*/
let coffeeOrigin = "ethiopia"; //global scope

function exampleFunction() {
    let x = "local scope is declared inside a function" //local scope
    console.log(x);
    console.log(coffeeOrigin);
}

exampleFunction();
console.log(x);

//FUNCTIONS
//block of codeused to perform a specific tasks