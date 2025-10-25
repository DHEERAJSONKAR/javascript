// dom manipulation
// html se element select karna
// text badalna
// html badalna
// css badalna
// attribute
// event listners

let abcd = document.querySelector("h1");
abcd.innerHTML = "<i>hello boy</>";
console.dir(abcd); 

// let a = document.querySelector("a");
// a.href="https://www.google.com";
// console.log(a);

let img = document.querySelector("img")
img.setAttribute("src","https://images.unsplash.com/file-1715651741414-859baba4300dimage?auto=format&fit=crop&q=60&w=416&dpr=2")
 
// let a = document.querySelector("a");
// console.log(a.getAttribute("href")); 

let a = document.querySelector("a");
a.removeAttribute("href"); 