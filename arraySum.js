const readline = require('readline-sync');

let a = Number(readline.question());
let arr = [];
for (let i = 0; i < a; i++) {
    arr.push(Number(readline.question()));
}
console.log(arr);

let arraySum = arr.reduce((acc, sum) => acc + sum, 0);
console.log(arraySum);