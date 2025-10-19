let marks = [34, 23, 24, 25, 45, 56, 67];
console.log("Marks Array:", marks[0]);
console.log("Length of Marks Array:", marks[7]);
marks[2]= 100;
console.log("Updated Marks Array:", marks);
marks.forEach(function(val){
    console.log(val);
})

// map method -> map sirf tab use karna hai jab apko ak nya array banana hai
// pichle array ke data ke basis pe
// map dekte hi sath me ak black array bna liya karo

// jab bhi apko aisa koi case dikh jay jaha per ak array se nya array banega
// and vo nya array kuch value ko rakhega tab map lagega.
let newarray = marks.map(function(val){
    return 12;
})
console.log("New Array using map method:", newarray);

let array = [1,2,3,4,5,6,7,8,9];
let newarr = array.filter(function(val){
 if(val>4) return true;
})
console.log("New Array using filter method:", newarr);

let arr = [2,3,4,5,6,7];
let result = arr.reduce(function(accumulator, val){
    return accumulator + val;
}, 0);
console.log("Result using reduce method:", result);

let a = [2,3,4,5,6];
let [b,c, , , d] = a;
console.log("Destructured values:", b, c, d);

let brands = ["Apple", "Samsung", "OnePlus", "Nokia"];
let brands1= [...brands]; // using spread operator
console.log(brands);
console.log(brands1);
brands1.pop();
console.log(brands);
console.log(brands1);
