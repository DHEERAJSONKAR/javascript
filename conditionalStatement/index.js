// if else else-if
// switch case 
// early return pattern
// paper rock scissors game using conditional statements
function rpsGame(user, computer){
    if(user === computer) return "draw";
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    return "computer wins";

}
console.log(rpsGame("paper","scissor")); // user wins
