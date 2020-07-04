// selectors
const circle = document.querySelector(".container");
const scoreText = document.querySelector(".score");
var score;

// listeners
document.addEventListener("DOMContentLoaded", getScore);
circle.addEventListener("click", scoreAdd);

// functions
function scoreAdd() {
    score++;
    localStorage.setItem("score", score);
    scoreText.innerText = `points: ${score}`
}

function getScore() {
    if (localStorage.getItem("score") === null) {
        score = 0
    } else {
        score = localStorage.getItem("score");
    }
    scoreText.innerText = `points: ${score}`
}