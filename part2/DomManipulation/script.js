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
// let p =document.querySelector("p");
// p.innerHTML = "<b> updated </b> <br> <br> by director dheeraj"; 
// let img = document.querySelector("img")
// console.log(img.src);
// 7. select the link and update its href to point to https://ddheeraj.tech
// let a = document.querySelector("a")
// a.href = "https://ddheeraj.tech"
// console.log(a.href);

// add a title attribute to a div dynamically.
// let div = document.querySelector("div");
// div.setAttribute("title", "this is a div element");
// console.log(div);

// remove the disabled attribute from the button.


// let button = document.querySelector("button");
// button.removeAttribute("disabled");
// console.log(button);

// what does createElement() do? what's returned?
// what the difference between appendchild() and prepend()?
// create a new list item <li> NewTask </li> and add it to the end of <ul>.
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Task";
// ul.appendChild(li);
// console.log(ul);

// create a new image element with a placeholder source and add it at the top of the div.
// let newImg = document.createElement("img");
// newImg.setAttribute("src","https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80");
// div.prepend(newImg);
// console.log(div);

// select the first item in a list and delete it from the Dom.
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);
// console.log(ul);

// let p = document.querySelector("p");
// p.addEventListener("dblclick", function(){
//     p.style.color = "red";
// });
// let input = document.querySelector("input");
// input.addEventListener("input", function(dets){
//     if(dets.data !== null)
// {
//     console.log(dets.data);
// }})

let select = document.querySelector("select");
let device = document.querySelector("#device");
select.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} device selected`;
})