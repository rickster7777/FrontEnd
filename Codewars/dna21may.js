function myFunction() {
let input = "AAAA"
let output = "";

for(let i=0; i < input.length; i++) {
    if (input[i] == 'A') {
        output += 'T';
    }

    else if(input[i] == 'T') {
        output += 'A';
    }

    else if(input[i] == 'C') {
        output += 'G';
    }

    else if(input[i] == 'G') {
        output += 'C';
    }
}
console.log(output);
}