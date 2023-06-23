const simonContainer = document.querySelector('.numbersContainer');
let simonNumbers = [];

function generateNumbers(simonNumbers) {
    for (let i = 0; i <  5; i++) {
        let randomNum = Math.floor((Math.random() * 10) + 1);
        simonNumbers.push(randomNum);
    }
}