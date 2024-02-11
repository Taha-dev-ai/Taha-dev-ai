let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#your-score")
const compscorepara = document.querySelector("#comp-score")

// generat computer choice
const genComputerChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
}

const gameDraw = () => {
    // console.log("game was draw:");
    msg.innerText = "Game was draw' try again";
    msg.style.backgroundColor = "gray"
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        // console.log("you win!");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor = "red";
    }
        else{
            // console.log("you lose!");
            compscore++;
            compscorepara.innerText = compscore;
            msg.innerText = `you lose! ${compChoice}  beats your ${userChoice} `
            msg.style.backgroundColor = "green";
        }
   
}

// generat computer choice
const playGame = (userChoice) => {
    console.log("userChoice=",userChoice);

    // Access generat copmuter choice
    const compChoice = genComputerChoice();
    console.log("comp choice",compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
             //paper,rock
             userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
   
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choiced was clicked" , choiceid);
        playGame(userChoice);
    });
});
