//My solution on codewars.
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    n = Math.sqrt(sq)
    let output = (n - Math.floor(n)) !== 0;
  
    if (output) {
        return -1;
    }
    else {
        let square = n+1;
        return square*square;
        }
    
    }

//Refer bool.js for the working code in VS Code.

// Other solutions on codewars for the same problem
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }

function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
  }


function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
  }


function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
  }


function findNextSquare(sq) {
    let result = Math.sqrt(sq)
    if(result.toString().split('.')[1]) return -1
    return (+result + 1) ** 2
  }
  

function findNextSquare(sq) {
    r=sq**(1/2)
    return Number.isInteger(r)?(r+1)**2:-1
 }