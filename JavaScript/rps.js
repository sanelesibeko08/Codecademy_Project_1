const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};
console.log(getComputerChoice());

function getPlayerChoice() {
    return "rock";
};


function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a Tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
};

function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(result);
};

playRound();

// Summary of logic flow:

//Define available choices → ["rock", "paper", "scissors"]

//Randomly pick a computer choice → Math.random()

//Get player choice (for now hardcoded)

//Compare both → determine winner

// Log results to terminal