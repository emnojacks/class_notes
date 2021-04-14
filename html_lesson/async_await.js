//function expression vs function declartion vs fat arrow funcs
//let standardFunction = standardFunc()
/*

// function declaration
function sayHiStranger() {
    return 'Hi, stranger!'
}
// call the function
sayHiStranger()


//You can also write the same
//function as a function expression, like this:
const sayHiStranger = function() {
    return 'Hi, stranger!'
}

//arrow functions are always expressions. 
//Here’s how you could rewrite the 
//function above using the fat arrow notation:
const sayHiStranger = () => 'Hi, stranger'

//function declaration 
function standardFunction() {
    return console.log("this is a standard function");
}

async function asyncFunction() {
    return console.log("this returns a promise");
}

//The benefits of this include:
//just one line of code 
// no function keyword
//no return keyword
// no curly braces {}


//asynchronous JS funcs
//awaits a promise 
//async returns a promise



//func above is the same as
//async function asyncFunction() {
//return Promise.resolve("this is resolved");
//}

async function asyncAction() {
    setTimeout(() => {
        console.log("async finally hit u")
    }, 3000);
}
//python is a synchronous language so it fires off line by line

function addNums(x, y) {
    let sum = x + y;
    return sum
}
console.log(sum); 

function addNums(x, y) {
    let sum = x + y;
    return sum;
}

let currentNum = addNums(5, 5);
*/


// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 2) {
//         resolve("promise successful and resolved");
//     } else {
//         //only handled as a rejection if the resource cannot be reched 
//         //otherwise it's treated as pending
//         //async allows us to wait for a resource until it's available
//         reject("promise rejected")
//     }
// })

// p.then((message) => {
//     console.log("this is the .then statement")
// }).catch((message) => {
//     console.log("this is the .catch statement");
// })


// //Error handling - Try, Catch, Throw, Finally


// try {
//     callingFuncthatdoesntexist();
//     //tests a block of code 
//     console.log("start of a try")
// } catch (err) {
//     //handles the error
//     console.log("error has occurred")
// } finally {
//     //executes no matter what after both try and catch
//     console.log("finally always runs")
// }

//json is a string first then converted into an object

let json = `{"age": 30}`;

try {
    let user = JSON.parse(json);
    //the above statemetn converts from a string to an object
    if (user.name) {
        throw new SyntaxError("incomplete data: no name")
    }
} catch (error) {
    console.log(`JSON error: ${error}`);
}