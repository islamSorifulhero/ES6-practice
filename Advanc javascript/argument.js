// function add(num1, num2){
//     return num1 + num2;
// }
// const result = add(2, 3, 4);
// console.log(result);

// function add(num1, num2){
//     console.log(arguments);
//     return num1 + num2;
// }
// const result = add(2, 3, 4);
// console.log(result);


// function add(num1, num2){
//     console.log(arguments);
//     return num1 + num2 + arguments[2];
// }
// const result = add(2, 3, 4);
// console.log(result);

function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}
const result = add(2, 3, 4, 7);
console.log(result);