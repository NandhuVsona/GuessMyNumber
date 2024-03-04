const check = document.getElementById("checkbtn");
let chance = document.querySelector(".current-score");
let score = 20;
let highScore = document.querySelector(".high-score");
let container = document.querySelector(".container");
let questionMark = document.getElementById("question");
let status = document.querySelector(".status");
const target = randomNumber();
document.getElementById("input").focus();

check.addEventListener("click", () => {
  const inputValue = document.getElementById("input").value;
  isGuessed(Number(inputValue));
});

function randomNumber() {
  let number = Math.floor(Math.random() * 21);
  return number;
}
console.log(target);

function isGuessed(number) {
  if (target === number) {
    let audio = new Audio();
    audio.src = "./358R4CH-correct-answer.mp3";
    audio.play();
    container.classList.remove("high");
    container.classList.remove("low");
    container.classList.add("guessed");
    highScore.innerHTML = `Highscore : ${score}`;
    questionMark.innerHTML = target;
    status.innerHTML = "You Guessed !";
  } else if (target > number) {
    container.classList.remove("high");
    let audio = new Audio();
    audio.src = "./buzzer-or-wrong-answer-20582.mp3";
    audio.play();
    score--;
    container.classList.add("low");

    status.innerHTML = "Your Guess is Too Low.!";
    chance.innerHTML = `Chance Left : ${score}`;
  } else if (target < number) {
    let audio = new Audio();
    audio.src = "./buzzer-or-wrong-answer-20582.mp3";
    audio.play();
    score--;
    container.classList.remove("low");
    container.classList.add("high");
    chance.innerHTML = `Chance Left : ${score}`;
    status.innerHTML = "Your Guess is Too High.!";
  }
}
