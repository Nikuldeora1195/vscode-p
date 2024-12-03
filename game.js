let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

function genCompChoice() {
    const options = ["rock", "paper", "scissor"];
    // rock , paper ,scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

}

gameDraw = () => {
    console.log("GAME WAS DRAW");
    msg.innerText = "Game Drawn,Try again!";
    msg.style.backgroundColor="white";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You win !!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
console.log("you lose!");
computerScore++;
compScorePara.innerText= computerScore;
msg.innerText = `You loose! Computer ${compChoice} beats your ${userChoice}`;
msg.style.backgroundColor="red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice= ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice= ", compChoice);

 if(userChoice === compChoice){
    gameDraw();
 }

else{
    let userWin = true;
    if (userChoice=== "rock"){
        //scissors,paper
    userWin = compChoice === "paper" ? false: true;
}  else if(userChoice === "paper") {
    //rock, scissors
    userWin = compChoice === "scissor" ? false: true;
} else{
    //rock,paper
   userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin, userChoice, compChoice, userChoice, compChoice);

}
    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(choice);
        const userChoice = choice.getAttribute("id");
        

        playGame(userChoice);
        });
    });
        

    
