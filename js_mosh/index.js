//how to bundle JS files and serve it to the client
//document.write("Programming with Mosh");
// In ES6 var is changed to let for declaring variables.
console.log('hello world');
let name = "rishav";
console.log(name);

//cannot be reserved keyword
//should be meaningful
//cannot start with a number
//no spaces and hyphen(-)
//are case sensetive

//declaring in a single line
let firstName = 'Mosh' , lastName = 'Hamedani';

//best practice is to declare it in   lines
let firsTName = 'Mosh';
let lasTName = 'Hamedani';


//Const
const interestrate = 0.3;
//interestrate = 1 //it throws an error
console.log(interestrate)


//Primitive : String, Integer ,boolenan, undefined, symbols introduced in ES6

let fname = 'Mosh';
let age = 30;
let isApproved = false;
let firsname = undefined;
let lasname = null;  //used when value is to be cleared

//In Js int and  float both are numbers
//in chrome console
//typeof(variable)





//Objects
//curly braces here is called object literals
let person = {
    name : "Mosh",
    age : 30
}

//Dot Notation
person.name = 'John';
console.log(person.name);

//Bracket Notation
person['name'] = 'Marry';
// In scenarios when user is entering key from frontend and to use it dynamically 
// bracket notation is used intead of dot notation
//dynamic use-case
let selection = 'name';
person[selection] = 'Marry';
console.log(person.name);


//Arrays
//length and values in arrray can be dynamic which means single array can have values of multiple types
let selectedColors = ['red', 'blue' ,'green'];
selectedColors[3] = 'orange';
selectedColors[4] = 1 ;
console.log(selectedColors);//putting dot after selectedColors will display all it's properties


//function
function greet(name){ //parameters
    console.log('Hello' + name)

}

greet('max'); //arguements

//deault values of variable in js is undefined

function square(number){
    return number * number;
}

console.log(square(2));
