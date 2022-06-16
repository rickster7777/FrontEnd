function myFunction() {

    let numbers = [1, 2, 2];
    let output = 0

    for (let i in numbers) {
        output += numbers[i]**2;
        //console.log(output)
        //console.log(numbers[i])
    }
    console.log(output)
}

//Other solutions

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }
  
function squareSum(numbers){
    var sum = 0;

    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }


//cleverest

const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)


function squareSum(numbers) {
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
  }

  function squareSum(numbers){
    return Math.round(Math.hypot(...numbers)**2);
  }
