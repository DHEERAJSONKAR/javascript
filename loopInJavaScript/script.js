// kuch bhi repeat karne ko hi loop kehte hain JavaScript mein
// 1.print 1-10 using for loop
// for (let i =1; i<=10; ++i){
//     console.log(i);
// }

// 2.print numbers from 10 to 1 using while loop
// let i =10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// 3.print even numbers from 1 to 20 using for loop
// for (let i =1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// 4.print odd numbers from 1 to 15 using while loop
// let i = 1;
// while(i<=15){
//     if(i%2 !==0){
//         console.log(i);
//     }
//     i++;
// }

// 5. print the multiplication table of 5.
// for (let i = 1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// let i = 1;
// while(i<=10){
//     console.log(`10 X ${i} = ${10*i}`)
//     i++;
// }

// 6. find the sum of the number from 1 to 100 using a loop
// let sum = 0;
// for (let i = 1; i<=100; i++){
//     sum += i; // sum = sum + i
// }
// console.log("Sum from 1 to 100 is: " + sum);

// 7. print all numbers between 1 to 50 that are divisible by 3.
// for(let i = 1; i <=50; i++){
//     if(i%3==0){
//         console.log(i);
        
//     }
// }

// 8. ask the user for a number and print whether each number from 1 to that numberis even or odd.
// let num = prompt("Enter a number: ");
// for(let i =1; i<=num; i++){
//     if(i%2===0){
//         console.log(i + " is even");
//     }
//     else{
//         console.log(i + " is odd");
//     }
// }

// 9. skip multiples of 3
// write a loop from 1 to 20 that:
// . skips numbers divisible by 3
// . print all other number
// use continue
// for(let i = 1; i<=20; i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }

// 10/ print first 5 odd number only
// write a loop from 1 to 100 that:
// . print only 5 odd numbers
// . then stop the loop
// use both if, continue and a counter + break
let counter = 0;
for(let i = 1; i<=100; i++){
    if(i%2===1){
        
        counter++;
        console.log(i);
    }
    if(counter===5){
        break;
    }
}