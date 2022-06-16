
//my solution
function returnstring(){
    if (b == true) {
        return "true";
    }
    else{
        return "false";
    }

}

// Other solutions on codewars for the same problem
function booleanToString(b){
    return b.toString();
  }

function booleanToString(b){
    return b ? 'true' : 'false';
  }


function booleanToString(b){
    return String(b);
  }


function booleanToString(b){
    if (typeof b == 'boolean') {
      return String(b);
    }
  }

//arrow function
const booleanToString = b => String(b);
