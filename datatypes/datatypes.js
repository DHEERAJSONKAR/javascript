// data types in javascript
// primitive data types -> aisi sari value jinko copy karne per tumhe ak real value mil jaye
// string, numeber, null, undefinde, boolean, bigint, symbol
// reference data types -> inko copy karne per  real value nhi milige  but apko reference milta hai parent ka
// array, object, function

// let a =12;
// let b = a;
// console.log(a)
// console.log(b);
// a = a+2;
// console.log(a);

// let d = null;
// console.log(d);
// let e;
// console.log(e);

// obj = {
//     uid:1,
//     name:"dheeraj",
//     age:22,
//     hobbies:["coding","gaming","reading"] 
// }
// console.log(obj); 
// let s1 = Symbol("uid");
// s1 = "001";
// console.log(s1);
// console.log(typeof s1);

let arr = [1,2,3,4,5];
let arr2 = arr;

arr.pop();
console.log(arr);
console.log(arr2);

console.log("5"+5);