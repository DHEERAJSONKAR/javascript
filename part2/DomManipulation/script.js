// dom manipulation
// html se element select karna
// text badalna
// html badalna
// css badalna
// attribute
// event listners

// let abcd = document.querySelector("h1");
// abcd.innerHTML = "<i>hello boy</>";
// console.dir(abcd); 

// let a = document.querySelector("a");
// a.href="https://www.google.com";
// console.log(a);

// let img = document.querySelector("img")
// img.setAttribute("src","https://images.unsplash.com/file-1715651741414-859baba4300dimage?auto=format&fit=crop&q=60&w=416&dpr=2")
 
// let a = document.querySelector("a");
// console.log(a.getAttribute("href")); 

// let a = document.querySelector("a");
// a.removeAttribute("href"); 

// create element
// append/prepend jaha bhi element chahiye waha 

// let h2 = document.createElement("h2");
// h2.textContent = "this is a new h2 tag"; 
// document.querySelector("body").append(h2);
// console.log(h2);

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "black"; 
// h1.style.textAlign = "center";
// h1.style.fontFamily="Gilroy"
// h1.classList.add("human");


// 1. what is the Dom? how does it represent the html structure.
// 2. name the type of nodes in the DOM tree.
// 3. what is difference between element node and text node?
// 4. what is difference between innerText , textContent and innerHTML? 
// 5. whaen should you use textcontent instead of innertext?
// 6. select a paragraph and replace its content with:
// <b> updated </b> by javascript
let p =document.querySelector("p");
p.innerHTML = "<b> updated </b> <br> <br> by director dheeraj"; 
let img = document.querySelector("img")
console.log(img.src);
