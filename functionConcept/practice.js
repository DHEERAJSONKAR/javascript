// 1. what the difference betwwen function declaration and function expression in term of hoisting?

// answer is thery term in function declaration hoisting is allowed but in function expression hoisting is not allowed
adcd();
function adcd(){
    console.log("function declaration hoisting");

}
// bcd(); // error function expression hoisting not allowed
let bcd = function(){
    console.log("function expression hoisting not allowed");
}

// 2. use rest parameter to accept any number of scores and return the total scores.
function getScores(...scores){
    let total =0;
    scores.forEach(function(val){
        total += val;
    })
    return total;
}
let totalScore=getScores(10,12,14,16,18,20);
console.log("Total Score:", totalScore);

// 3. pass a function into another function and execute it.
function abcd(val){
    val();

}
abcd(function(){
    console.log("Function passed as argument executed");
})

// 3. write a bmi calculator.
function bmiCalculator(weight, height){
    return weight / (height * height);

}
let bmi = bmiCalculator(70, 1.75).toFixed(2);
console.log("BMI Calculator is:", bmi);


// 4. create a resuable discountcalculator(hof)
function discountCalculator(discount){
    return function(price){
        return price - (price * discount/100);
    }

}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log("Price after 10% discount:", ten(300));
console.log("Price after 20% discount:", twenty(1200));

// 5. build a counter using closure.
function counter(){
    let count = 0;
    return function(){
        count ++;
        return count;

    }
}
let c = counter();
console.log("The Counter is: ", c());
console.log("The Counter is: ", c());
console.log("The Counter is: ", c());
console.log("The Counter is: ", c()); 

// 6. create a pure function to transform a value.
function pureTransform(value){
    return value * 3;
}
console.log("Pure Function Transform:", pureTransform(5));
console.log("Pure Function Transform:", pureTransform(10));

// 7. use IIFE isolate variables.
(function(){
    let password = "mySecretPassword123";
    console.log("IIFE executed, password is set:", password);
})();
