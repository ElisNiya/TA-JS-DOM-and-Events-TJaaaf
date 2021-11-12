const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissors"]

const handleClick = () => {
    const userChoice = e.target.innerHTML
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    getResults(userChoice, computerChoice) 
}

choices.forEach(choice => {
    const button = document.createElement("button")
    button.innerText = choice;
    button.addEventListener("click", handleClick)
    choicesDisplay.appendChild(button)
    const getResults = (userChoice, computerChoice) => {
        switch(userChoice + computerChoice) {
            case "scissorspaper":
            case "rockscissors":
            case "paperrock":
                resultDisplay.innerHTML = You win
                break;
            case "paperscissors":
            case "scissorspaper":
            case "rockpaper":
                resultDisplay.innerHTML = You lose
                break;
            case "paperpaper":
            case "scissorscissor":
            case "rockrock":
                resultDisplay.innerHTML = It's a draw
                break;
        }
    }
})
