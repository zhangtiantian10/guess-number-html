const Generator = require('./generator');
const GuessNumberGame = require("./guess-number-game");

let generator = new Generator();
let guessNumber = new GuessNumberGame(generator);
let results = [];

document.getElementById("submit").addEventListener("click", function inputNumber() {
    let history = document.getElementById("history");
    if (results.length === 0) {
        history.innerHTML = "<tr><td>输入</td><td>输出</td></tr>"
    }
    const input = document.getElementById("input").value.split('').join(' ');
    let result = guessNumber.test(input)
    const splitResults = result.split('\n')

    results.push({input, result : splitResults[0]});

    history.innerHTML += `<tr><td>${input}</td><td>${splitResults[0]}</td></tr>`;

    if (splitResults.length > 1) {
        document.getElementById("message").innerText = splitResults[1]
        clearGame();
    } else if (result === '4A0B') {
        document.getElementById("message").innerText = "you win"
        clearGame();
    } else {
        document.getElementById("message").innerText ="";
    }
})

function clearGame() {
    results = [];
    guessNumber = new GuessNumberGame(generator);
}