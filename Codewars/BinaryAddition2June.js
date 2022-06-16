function myFunction() {
    let a = 6;
    let b = 7;
    let addn = a + b;
    let quot;
    let rem = ''
    while (addn != 0){
        rem = addn % 2;
        rem += rem;

        quot = addn/2;
        addn = Math.floor(quot);
    }
   console.log(rem);


}