//const greet = () => "hello world!";

function greet(){
    let a = 36345;
    let text = a.toString();

    const desc = [];
    for(let i=0; i < text.length; i++){
        console.log(text[i]);
        console.log("using parseInt",parseInt(text[i]));
        num = parseInt(text[i]);
        console.log("using Number",Number(text[i]));

        //desc.push(parseInt(text[i]))  // directly putting this wasn't working.
        desc.push(num);
    }
    console.log(desc)
    sorted = desc.sort()
    reverse= sorted.reverse();
    console.log(reverse);

    let desc_order ='';
    for (let j=0; j < reverse.length; j++){
        desc_order += reverse[j].toString();
    }
    console.log(parseInt(desc_order));
    //return a;
    //return "hello world";
    //document.write("hello world");

}


// var a = 1234;
// a.toString;
// above line of code is returning ƒ toString() { [native code] }  instead of '1234'.

// let num = 15;
// let text = num.toString();
//this piece of code return '15'

// let aa = 1234;
// aa.toString; 
// this also returns '1234';

//https://buzzcoder.gitbooks.io/codecraft-javascript/content/string/loop-through-a-string.html
//https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l




const desc = [];
for(let i=0; i < text.length; i++){
    num = parseInt(text[i]);
    desc.push(num);
}
sorted = desc.sort()
reverse= sorted.reverse();

let desc_order ='';
for (let j=0; j < reverse.length; j++){
    desc_order += reverse[j].toString();
}
//return parseInt(desc_order);