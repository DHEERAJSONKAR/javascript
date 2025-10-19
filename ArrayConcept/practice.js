// 1. create an array with 3 fruits and print the second fruits.
let fruit = ["apple", "banana", "orange"];
console.log(fruit[1]);

// 2. Add "Mango" at the end and "PineApple" at the beginning of this array.
let fruits = ["apple","grapes"];
fruits.unshift("PineApple");
fruits.push("Mango");
console.log(fruits);

// 3. replace "Banana" with "Kiwi" in the array above.
let arr = ["apple", "Banana"];
arr.pop();
arr.push("kiwi");
console.log(arr);

// 4. remove the last item from this array using method.
let number = [1,2,3,4];
number.pop();
console.log(number);

// 5. insert "red" and "blue" at index1 int this array.
let color = ["Green", "Yellow"];
color.splice(1,0,"red","Blue");
console.log(color);

// 6. extract only the middle 3 element from this array.
let item = [1,2,3,4,5,6];
let newarr=item.slice(2,5);
console.log(newarr);

// 7. sort this array alphabetically and then revrse it.
let names= ["Zara", "Arjun", "Dheeraj", "Shreya","Kajal"];
names.sort().reverse();
console.log(names);

// 8. Use .map() to square each number.
let array = [1,2,3,4];
let newArray = array.map(function(val){
    return val*val;
})
console.log(newArray);

// use .filter() to keep number greater than 10.
let num = [5,12,8,3,20];
let nums = num.filter(function(val){
     return val>10;
})
console.log(nums);

// use .reduce() to find this sum of array.
let point = [12,3,4,5,67];
let points = point.reduce(function(acc, val){
    return acc+val;
},0)
console.log("the sum of array:",points);

// use .find() to get the first number less than 10.
let a = [12,15,3,8,20];
let a1 = a.find(function(val){
    return val<10;
})
console.log("find the number less than ten:",a1);

// use .some() to check if any student has scoredd below 35.
let score = [45,60, 28, 90];
let scores = score.some(function(val){
    return val<35;
})
console.log(scores);

// use .every() to check allnumbers are even.
let even = [2,4,6,8,10];
let evens = even.every(function(val){
    return val%2==0;
})
console.log(evens);

// destructure this array to get firstname and llastname.
let fullname = ["Dheeraj", "Sonkar"];
let [firstname, lastname] = fullname;
console.log(firstname);
console.log(lastname);

// merge two arrays using spread operator.
let a2 = [2,3];
let b2 = [6,7];
let c2 = [...a2 , ...b2];
console.log(c2);

// Add "India" to the start of this array using spread.
let cuntries = ["USA", "UK"];
cuntries = ["INDIA", ...cuntries];
console.log(cuntries);

// clone the array properly (not by reference).
let b1 = [1,2,3];
let b5 = [...b1];
console.log(b1);
console.log(b5);