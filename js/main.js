const simonContainer = document.querySelector('.numbersContainer');
let simonNumbers = [];
let userNumbers = [];
let timer;

function playGame() {
    generateNumbers(simonNumbers);
    displayNumbers(simonContainer, simonNumbers);
    alert('Ricorda questi numeri, hai 30 secondi!');
    timer = setTimeout(checkUserInput, 30000);
}

function generateNumbers(simonNumbers) {
    for (let i = 0; i <  5; i++) {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        simonNumbers.push(randomNum);
    }
}

function displayNumbers(simonContainer, simonNumbers) {
    for (let i = 0; i < simonNumbers.length; i++) {
        simonContainer.innerHTML += simonNumbers[i];
    }
}

function checkUserInput(userNumbers) {
    for (let i = 0; i < 5; i++) {
        let userInput = parseInt(prompt(`Inserisci il numero ${i + 1}`));
        userNumbers.push(userInput);
    }

    let correctNumbers = [];
    for (let i = 0; i < 5; i++) {
        if (userInput[i] === simonNumbers[i]) {
            correctNumbers.push(userInput[i]);            
        }
    }
}
