let n = Number(prompt("Enter a number:"));

let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

console.log(arr);   

const initialValue = 1; 
const sumWithInitial = arr.reduce(
    (accumulator , currentValue) => accumulator * currentValue , initialValue , );


    console.log(sumWithInitial);