//arrays & objects


//array 
//highlevel list that you can traverse and mutate
//use integers as indices, start at 0
//can be accessed by a bracket or dot notation
// starts with 0 
// you can access last element of array with [object.length-1]
/*
let british = ["rolls royce", "bentley", "aston martin", "caterham"];

//array methods 

console.log(british[british.length - 1]);

//you can't just print british.length-1 bc it will just return 
//the index number - 1

british.push("minicooper");

console.log(british.splice(0, 2, "jag", "royce"));
//splice takes array, index to start at, how many to remove, and new element
console.log(british);

let bpop = british.pop(); //removes last element of an array
console.log(bpop); //shows you the popped element
console.log(british);
//unshift adds array elements to beginning and returns array length
british.unshift("bentley", "land rover");
console.log(british);
british.shift(); //removes start element of array
console.log(british.indexOf("land rover"));
//searches and array for the indexof an element.  add 2nd paramto select search start index
//second param would be useful if there is an array within an array

//Advanced Array Manipulation
*/

let german = ["BMW", "Mercedes", "Audi", "Porsche", "Alpina", "Volkswagon"];
/*
for (cars of german) {
    console.log(cars);
}

//array foreach method runs a function for each element in an array 
//most powerful tool for arrays
//for in gives you indexes, foreach gives you the elements
//utilizes call back funcs accepts up to three arguments

german.forEach(function(car) { console.log(car) });
//these two funcs are the same - the arrow is a function shorthand
german.forEach(car => console.log(car));


//array.map() -- transforms eleents in original array via a callback func
//and returns a new modified array 

let germanUpperCase = german.map(car => car.toUpperCase());
console.log(germanUpperCase);

//array.filter() -> creates a new array with elements that pass 
//the test in a given func

console.log(german.filter(car => car.startsWith("A")));

//objects 
//containers for values in a JSON format (js object notation)
-exists as a string
-has properties and methods



//defind JS object with an object literal (hard coded)

let car = {
    make: "porsche",
    model: "911",
    country: "germany",
    driver: "walter",
    efficiency: {
        highwaympg: 45,
        citympg: 25,
    }
}

//accessing object values

console.log(car.make);
console.log(car["model"]) // returns same output as preceding command
let returnKeys = Object.keys(car);
console.log(returnKeys);
console.table(car);

//object property reassignment
car.make = "maserati";
console.log(car.make);
console.table(car);
console.log(car.efficiency.citympg); //accesses a third layer within the object
*/

let client = new Object;
console.log(client);
client.contact = "Jac";
client.companyName = "FPG";
client.location = "NYC";
console.table(client);