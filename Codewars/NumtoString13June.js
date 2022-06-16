function myFunction(){
    let num = 123;
    console.log(num.toString());
}

//other solutions
function numberToString(num) {
    // Return a string of the number here!
    return String(num);
  }

function numberToString(num) {
    return ''+num;
  }

const numberToString = num => `${num}`;

const numberToString = num => num.toString();

function numberToString(num) {
    // Return a string of the number here!
    return `${num}`;
  }

  function numberToString(num) {
    // could just do: return num + ''; But THAT would be cheating
    var str = '',
        mult = num < 0 ? -1 : 1;
    num *= mult;
  
    do {
      str = String.fromCharCode(num % 10 + 48) + str;
      num = ~~(num / 10);
    } while (num > 0);
    
    if(mult < 0) str = "-" + str;
    return str;
  }


  var numberToString=(num)=>(num.toString())
