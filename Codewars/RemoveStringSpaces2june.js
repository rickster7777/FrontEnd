function myFunction() {
    let v = 'is it possible'
    let x = "yes its possible"
    let output = ''
    for(let i=0; i < v.length; i++){
        if (v[i] != ' '){
            output += v[i];
        }
    }
    console.log(output);
    let result = x.trim()
    console.log(result);
}

//The trim() method removes whitespace from both sides of a string.
//In above case it'll not work.

// x.replace('y','a');
// output -> 'aes its possible';

// x.replaceAll(' ','');
// 'yesitspossible'


