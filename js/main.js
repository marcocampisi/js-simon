const simonContainer = document.querySelector('.numbersContainer');
let simonNumbers = [];
let userNumbers = [];
let timer;

function playGame() {
    generateNumbers(simonNumbers);
    displayNumbers(simonContainer, simonNumbers);
    alert('Ricorda questi numeri, hai 30 secondi!');
    simonContainer.classList.remove('d-none');
    timer = setTimeout(function() {
        simonContainer.classList.add('d-none');
        setTimeout(checkUserInput, 500);
    }, 30000);
}

function generateNumbers(numberArray) {
    for (let i = 0; i <  5; i++) {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        simonNumbers.push(randomNum);
    }
}

function displayNumbers(container, numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        let span = document.createElement('span');
        span.textContent = numberArray[i];
        container.appendChild(span);
    }
}

function checkUserInput() {
    for (let i = 0; i < 5; i++) {
        getUserInput(i, userNumbers);
    }
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
        setTimeout(function() {
            alert(result);
            resetGame();
          }, 200);
        } else {
          setTimeout(function() {
            alert('Non hai indovinato nessun numero.');
            resetGame();
            }, 200);
        }
}

function resetGame() {
    simonNumbers = [];
    userNumbers = [];
    clearTimeout(timer);
    simonContainer.innerHTML = "";
  }