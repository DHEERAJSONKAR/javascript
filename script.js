// temporal dead zone 

console.log(a);
 var a =12;


var x = 1; // global scope
{
    var x =2; // global scope
}
console.log(x);


let y =10;
{
    let y =20;
    console.log("inside block", y);
}
console.log("outside block", y);

if(true){
    var m =100;
    let n =200;
    console.log(n);
    console.log(m);
}
console.log(m);
