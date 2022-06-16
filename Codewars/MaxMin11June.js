// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5


//My solution when using max and min function with list 
var min = function(list){
    
    mi = Math.min(...list);
    return mi;
  }
  
  var max = function(list){
      
    ma = Math.max(...list);
    return ma;
  }

//Other Solutions
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}
var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}


var min = function(list){
    return Math.min.apply(null,list);
}
var max = function(list){
    return Math.max.apply(null,list);
}


const min = list => list.sort((a, b) => a - b)[0];
const max = list => list.sort((a, b) => b - a)[0];


const max = list => list.sort((a ,b) => a - b).pop();
const min = list => list.sort((a ,b) => a - b).shift();



// Second Problem
//If number is even multiply by 8 else multiply by 9.
//my solutions.
function simpleMultiplication(number) {
  if (number%2 == 0) {
    return number*8
  }
  else return number*9;
}
//Other solutions.

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }

const simpleMultiplication=n=>n*(n%2?9:8)

function simpleMultiplication(number){
    return (number % 2 == 0)? number * 8 : number * 9;
}

simpleMultiplication = n => n * (8 + n % 2)

simpleMultiplication = x => x * (x % 2 ? 9 : 8);
