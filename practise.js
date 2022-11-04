// const allFriend = (nameAll) => {
//     const index = nameAll;
//     for (i = 0; i < index.length; i++) {
//         const name = index[i];
//         const length = name.length % 2;
//         if (length !== 0) {
//             const add =
//         }
//     }
// };
// console.log(allFriend(['osama', 'Muhammad', 'raba', 'Allah']));
const square = (a, b = 0) => {
    const num1 = a * a;
    const num2 = b * b;
    const sum = num1 + num2;
    const average = sum / 2;
    return average;
};
console.log(square(2, 8));
const maxNumber = (array1, array2) => {
    const mainArray = [...array1, ...array2];
    return Math.max(...mainArray);
};
console.log(maxNumber([34, 23, 12, 56, 1, 900, 32], [78, 32, 43, 342, 223, 200, 11]));


let num = (num) => {
    const name = num;
    return (this);
}
console.log(num(8));
function func() {
    return this;
}
console.log(func);
console.log(nam);

const nam = 'Allah';


