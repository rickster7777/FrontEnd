function myFunction() {
    let classs = [2, 3];
    let score = 5;
    let add = 0;
    true
    for (let i in classs){
        add += classs[i]
    }
    console.log(add);
    console.log('add + score',add + score);
    console.log('classs.length',classs.length + 1)
    console.log((add + score)/(classs.length + 1));
}


//Other Solutions
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length;
  }
  
const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > classPoints.reduce((pre, val) => pre + val, yourPoints) / (classPoints.length + 1);

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length;
  }


const betterThanAverage = (classPoints, yourPoints) => yourPoints > average(classPoints);
const average = array => sum(array) / array.length;
const sum = array => array.reduce((a, b) => a + b);


function betterThanAverage(cp, me) {return cp.reduce((a,b)=>a+b)/cp.length>me?false:true}


function betterThanAverage(classPoints, yourPoints) {
    return ((classPoints.reduce((a,b) => a+b)+yourPoints) / (classPoints.length + 1) <= yourPoints)
  }