const simonContainer = document.querySelector('.numbersContainer');
let simonNumbers = [];
let userNumbers = [];

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
    alert('Ricorda questi numeri, hai 30 secondi!');
}

function checkUserInput(userNumbers) {
    for (let i = 0; i < 5; i++) {
        let userInput = parseInt(prompt(`Inserisci il numero ${i + 1}`));
        userNumbers.push(userInput);
    }
}

generateNumbers(simonNumbers);
displayNumbers(simonContainer, simonNumbers);
