function isogram(){
    let a = 'Dermatoglyphics';
    let b = a;
    let count = 0;

    for(let i=0; i < b.length; i++){
        for(let j=0; j < a.length; j++){
            if (b[i] == a[j]) {
                count += 1;
            }
        }
        if(count == 2){
            console.log(false);
            return true;
        }
        count = 0;
    }
}