
//rest

function sum(...numbers) {

    const a = numbers.reduce((total, num) => total + num, 0)
    console.log(a); // 9
    

}
sum(2,3,4)

//spread
const ar1 = [2,3,4]
const ar2 = [4,5,6]
console.log(ar1.concat(ar2));// [ 2, 3, 4, 4, 5, 6 ]
console.log(...ar1,...ar2); //2 3 4 4 5 6










