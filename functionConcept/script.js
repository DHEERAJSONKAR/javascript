function Add(v1=0,v2=0){  // default parameters ka matlab hai ki maine parameters me hi jo value dali hai vahi hamara default parameters hogo 
    console.log(v1+v2);

}
Add();

// jab argument kai sare ho to humein utne hi parameter banane padte hain, isse bachene ke liye , hum rest ka use karte hain ... agar ... function ke parameters
//  space me lage to wo rest oprator hai agar vo array aur object me lage to spread operator hai . dono ko present karte hai three dots se ...
function sum(...values){
    console.log(values); // ye ek array ban jayega jisme sare arguments store ho jayenge

}
sum(1,2,3,4,5,6,7,8,9); // ye sab arguments hain


// return matlab jaha se aaye ho vahi dal denge
function abcd(){
    return 5;
}





let val = abcd();
console.log(val);

// first class function -> function ko value ki tarah treat kar sakte hai 
function greet(val){
    val();

}
greet (function(){
    console.log("good morning.")
})

// high order function -> hof wo function hota hai jo ki return kare function ko ya fir accept kare ek function apne parameter mein
function hof(){
    return function(){
        console.log("I am a high order function");
    }

}
hof()();  // isme do brackets hain pehla hof ke liye aur dusra return wale function ke liye  

// pure vs impure functio
// pure function -> jo function same input pe hamesha same output de aur uske bahar ke kisi state ko change na kare
// impure function -> jo function same input pe alag alag output de sakta hai ya fir uske bahar ke kisi state ko change kar de

let a = 10;
// impure function
function impureFunction(b){
    return a + b; // ye function impure hai kyuki ye bahar ke variable a pe depend karta hai
}

console.log(impureFunction(5));

// pure function
function pureFunction(b){
    return b * 2; // ye function pure hai kyuki ye sirf apne parameter pe depend karta hai
}

console.log(pureFunction(5)); 


// closures ->  ek function jo return kare ek aur function aur return hone wala function humesha youse karega parent function ka koi variable.
function ab(){
    let b =13;
    return function(){
        console.log(b);

    }
}
ab()(); // ye bhi ek tarika hai closure ko call karne ka 

// lexical scope ->  ek function apne parent function ke variables ko access kar sakta hai
function abdd(){
    let n =20;
    function cd(){
        let m=30;
        function ef(){
            let o =50;
            function gh(){
                let p = 70;
            }
    }
}
}


// iife -> immediately invoked function expression
(function(){
    console.log("IIFE function");
})();

// hoisting-> function declaration ko hum jaha chahe waha call kar sakte hain chahe usse pehle hi kyu na ho lekin function expression ko hum uske baad hi call kar sakte hain
hoist();
function hoist(){
    console.log("Hoisting function");
}