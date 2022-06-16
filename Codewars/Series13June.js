//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


let num = 2;
let series = [];

for(let i=1; i < num*2; i++){
    if (i % 2 != 0){
        series.push(1/i);
    }
}
console.log(series);

let addn = 0;
for (let i in series) {
    console.log(series[i])
    addn += series[i]

}
console.log(addn.toFixed(2));   // toFixed function round it off to 2.

