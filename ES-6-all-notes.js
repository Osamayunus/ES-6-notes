// Es-6 6 conceptuals

// 1. var let const properties:
//     1-1 differences between var let const .
// var :can use dooble name and other things
// let can not use same name again but can change the valus ;

const salarys = [89, 809, 8000, 90000];
// can not change const properties
/* 
2. default parameters
*/
function num(num1, num2 = 90) {
    const add = num1 + num2;
    return add;
}
console.log(num(6,))
// output:96
console.log(num(6, 3))
// output :9
/*
set default values of parameter or the out put will be NaN.
*/

/* 
3. Template Strings
*/
const num = 40000;
const elements = `
<div>
<p>Osama Yunus</p>
<P>salary:${num}</p>
</div>
`;
/*
4. Arrow Function 
*/
const num = num => num * num;
console.log(num(5));
const nam = (strings) => (
    strings);
console.log(nam('Allah'));
const total = (index) => {
    return index;
};
/*
5.spread by (...);
*/
const age = [9, 9, 12, 30, 20, 25];
console.log(...age);
/**
 6. destructuring
 object arrays 
 */
/*destrucing Arrays
*/
const [myName, myFriend, myBrother] = ['osama', 'Ar Rahman', 'Muhammad (saw)'];
console.log(myFriend);
/*
Object destructuring 
*/
const { Lord, mName, brother } = { mName: 'Osama', Lord: 'Allah', brother: 'Muhammad (saw)' }
console.log(Lord, mName, brother);
/**
 All notes of ES 6 -----
 */
