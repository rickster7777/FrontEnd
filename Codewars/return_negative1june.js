//My solutions
function myFunction() {
    n = 1;
    if (n > 0){
        console.log(-n);
    }
    else{
        console.log(n);
    }
}

//Other solutions
function makeNegative(num) {
    return -Math.abs(num);
  }

function makeNegative(num) {
    return num < 0 ? num : -num;
  }

function makeNegative(num) {
    return num > 0 ? -num : num;
  }
  
function makeNegative(num) {
    return num <= 0 ? num : num*-1;
  }




// Beginner Series #1 School Paperwork

//My solutions
function paperwork(n, m) {
  if ((n < 0) || (m < 0)){
    return 0;
  }
  else{
    return n*m;
  }
}

//Other solutions
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }

MAKEUPPERCASE
//MY SOLUTION
  function makeUpperCase(str) {
    return str.toUpperCase();
  }
//OTHER SOLUTIONS

const makeUpperCase = str => str.toUpperCase();

function makeUpperCase(str) {return str.toUpperCase();}


function makeUpperCase(str) {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    const chr = (charCode >= 97 && charCode <= 122) ? String.fromCharCode(charCode - 32) : str[i];

    output += chr;
  }
  
  return output;
}