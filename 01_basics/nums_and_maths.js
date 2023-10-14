const score = 100
console.log(score);

const balance = new Number(500)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const other = 23.8966
console.log(other.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++
console.log(Math.abs(-4));

console.log(Math.round(6.8342));
console.log(Math.ceil(7.8))


console.log((Math.random()*10) + 1)//Min value 1

const min = 40
const max = 80

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
