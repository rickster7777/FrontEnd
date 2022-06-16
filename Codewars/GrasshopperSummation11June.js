function myFunction() {
    let num = 8;
    let addn = 0;

    for (let i=1; i < (num+1); i++) {
        console.log(i);
        addn += i;  
    }
    console.log(addn);
}


//Other Solutions
//PAY ATTENTION TO BELOW LINE OF CODE EXTREMELY CLEVEREST ....
const summation = n => n * (n + 1) / 2;
