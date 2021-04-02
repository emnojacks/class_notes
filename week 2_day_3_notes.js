//conditionals
//if else
//switch
//ternary
/*
let isOpen = true;

if (isOpen == true) {
    console.log("the door is open")
}

//evaluates the same as above 
if (isOpen) {
    console.log("the door is open")
}

//if else tests two conditions


let isOpen = false;

if (isOpen == true) {
    console.log("the door is open");
} else {
    console.log("the door is closed");
}

let temp = 70;
if (temp >= 66) {
    console.log("its nice out");
} else {
    console.log("sweater weather");
}
*/
//else if allows us to check more than two conditions
//ex fizz buzz challenge day 2
/*
let temp = 30;
if (temp >= 80) {
    console.log("its nice and warm out");
} else if (temp >= 60) {
    console.log("sweater weather");
} else if (temp >= 30) {
    console.log("its freaking cold");
} else {
    console.log("im not leaving my house")
}

//switch statments- better for non numeric conditions
//ex fizz buzz day 2

let favColor = "purple";

switch (favColor) {
    case "green":
        console.log('Your favorite color is green');
        break;
    case "blue":
        console.log('Your favorite color is blue');
        break;
    case "purple":
        console.log('Your favorite color is purple');
        break;
    case "red":
        console.log('Your favorite color is red');
        break;
    case "black":
        console.log('Your favorite color is black');
        break;
    default:
        console.log(`${favColor} is beautiful too`);
}

var doYouLikePizza = "yes"

switch (doYouLikePizza) {
    case "yes":
    case "yeah":
    case "of course":
        console.log("You are a good person");
        break;
    case "no":
    case "nah":
    case "not really":
        console.log("You are a bad person");
        break;
}

//ternaries 
//best used for comparing two possible results 
//ex fizz buzz

var temp = 70;

temp > 75 ? console.log("Yo it's nice out") : console.log("It's cold brrr");


let num = 13;
(num > 0) ? console.log("its a positive number"):
    (num > 0) ? console.log("its a negative number") :
    console.log("number is 0");


*/

//LOops
//loops have three parameters 
//each separated by a semi colon
//1 is initial expression, 2 is the condition, 3 is the incrementer/decrementer

/*
for (i = 0; i <= 10; i++) {
    console.log(i);
}
for (i = 10; i >= 0; i--) {
    console.log(i);
}



for (i = 0; i <= 20; i += 2) {
    console.log(i);
}


for (i = 20; i <= 0; i -= 2) {
    console.log(i);
}
*/

//printing each letter with a loop 
//string will behave like an array 
let word = "cortapelo";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}