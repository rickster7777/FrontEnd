/* 

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

*/

function myFunction() {
let input = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

if (input.length < 2 || input.length > 100) {
    console.log("Invalid String");
    return "Invalid String";

}

const arr = [];

for (let i=0; i < input.length; i++){
    arr[i] = input[i];
}
console.log(arr);

const arr_out = [];

for (let j=0; j < arr.length; j++){
    
    if (j % 2 != 0) {
        arr_out.push(arr[j]);
    }
}
console.log(arr_out);

}



//Other submittes solutions.
/************* MOst IMPRESSIVE ***************** */
function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" : 
    [...string].filter((x, i) => i % 2);
  }


const evenChars = string =>
string.length < 2 || string.length > 100 ? `invalid string` : [...string].filter((_, idx) => idx % 2);


function evenChars(s) {
    if(s.length<2 || s.length>100)
      return "invalid string";
    var output = [];
    for(var i = 1; i<s.length; i+=2)
    {
      output.push(s[i]);
    }
    return output;
  }


function evenChars(string) {
    if(2 > string.length || string.length > 100) return 'invalid string';
    return string.split('').filter(function(item, index) {
      return index % 2 != 0;
    });
  }


const evenChars = xs => xs.length < 2 || xs.length > 100 ? 'invalid string' : xs.split('').filter((x,i) => i % 2)

const evenChars = str => str.length < 2 || str.length > 100 
  ? 'invalid string'
  : [...`${ str }`].filter((v, i) => i % 2);


function evenChars(string) {
    if ( [...string].length < 2 || [...string].length > 100) return 'invalid string';
   return [...string].filter( ( value, index )  => (index + 1) % 2 == 0 );
  }

function evenChars(string) {
    //keep coding!
      return string.length < 2 || string.length > 99 ? 'invalid string' : string.split('').filter((a,ind) => (ind+1) % 2 == 0);
    }

