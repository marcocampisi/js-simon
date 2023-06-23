const simonContainer = document.querySelector('.numbersContainer');
let simonNumbers = [];
let userNumbers = [];
let timer;

function playGame() {
    generateNumbers(simonNumbers);
    displayNumbers(simonContainer, simonNumbers);
    alert('Ricorda questi numeri, hai 30 secondi!');
    timer = setTimeout(checkUserInput, 5000);
}

function generateNumbers(numberArray) {
    for (let i = 0; i <  5; i++) {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        simonNumbers.push(randomNum);
    }
}

function displayNumbers(container, numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        container.innerHTML += simonNumbers[i];
    }
}

function checkUserInput() {
    for (let i = 0; i < 5; i++) {
        getUserInput(i, userNumbers);
    }
    checkResult(userNumbers, simonNumbers);
}

function getUserInput(index, userInput) {
    let input = parseInt(prompt(`Inserisci il numero ${index + 1}`));
    userInput.push(input);
    if (userInput.length === 5) {
        checkResult(userNumbers, simonNumbers);
    }
}

function checkResult(userInput, numberArray) {
    let correctNumbers = [];
    for (let i = 0; i < 5; i++) {
        if (userInput[i] === numberArray[i]) {
            correctNumbers.push(userInput[i]);
        }
    }

    if(correctNumbers.length > 0) {
        let result = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`;
        alert(result);
    }
    else {
        alert('Non hai indovinato nessun numero.');
    }
}