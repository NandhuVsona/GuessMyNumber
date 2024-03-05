const check = document.getElementById("checkbtn");
let chance = document.querySelector(".current-score");
let highScore = document.querySelector(".high-score");
let container = document.querySelector(".container");
let questionMark = document.getElementById("question");
let status = document.querySelector(".status");
let target = randomNumber();
let againBtn = document.getElementById("again");
document.getElementById("input").focus();
let score = 20;

againBtn.addEventListener("click", () => {
  score = 20;
  target = randomNumber();
  console.log(target);
  document.getElementById("input").value = "";
  questionMark.innerHTML =
    '<i class="fa-solid fa-question" style="color: #000000"></i>';
  chance.innerHTML = `Chance Left : ${score}`;
  container.classList.remove("high");
  container.classList.remove("low");
  container.classList.remove("guessed");
  status.innerHTML = "Start guessing...";
  container.style.backgroundColor = "black";
  check.removeAttribute("disabled");
});
check.addEventListener("click", () => {
  const inputValue = document.getElementById("input").value;
  if (!inputValue) {
    status.innerHTML = "Please type a number";
  } else {
    isGuessed(Number(inputValue));
  }
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
  } else if (score <= 1) {
    status.innerHTML = "You loose the game";
    check.setAttribute("disabled", true);
    questionMark.innerHTML = target;
  } else if (target > number) {
    container.classList.remove("high");
    let audio = new Audio();
    audio.src = "./neg-wrongbuzzer.mp3";
    audio.playbackRate = 2;
    audio.play();
    score--;
    container.classList.add("low");
    status.innerHTML = "Your Guess is Too Low.!";
    chance.innerHTML = `Chance Left : ${score}`;
  } else if (target < number) {
    let audio = new Audio();
    audio.src = "./neg-wrongbuzzer.mp3";
    audio.playbackRate = 2;
    audio.play();
    score--;
    container.classList.remove("low");
    container.classList.add("high");
    chance.innerHTML = `Chance Left : ${score}`;
    status.innerHTML = "Your Guess is Too High.!";
  }
}
