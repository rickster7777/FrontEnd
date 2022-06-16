function myFunction() {
    let p0 = 1500;
    let percent = 5;
    let aug = 100;
    let p = 5000;
    
    
    let addn = 0;
    let counter = 0;
    let i = 1;

    while (i == 1) {
        addn = p0 + (p0 * (percent / 100)) + aug;
        if (addn < p) {
            counter += 1
            p0 = addn;
            continue;
        }
        else {
            break
        }
    }
    console.log(counter+1);
}
//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript