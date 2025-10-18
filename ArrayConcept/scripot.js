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

