document.getElementById("restart-button").addEventListener("click", restartGame);
document.getElementById("left-button").addEventListener("click", moveLeft);
document.getElementById("right-button").addEventListener("click", moveRight);

let score = 0;
let life = 3;
let gameIsOver = false;
let carPosition = 50;
let intervalId;
let speed = 4; // Adjusted speed

function startGame() {
  document.getElementById("start-button").style.display = "none";
  document.addEventListener("keydown", handleKeyDown);
  intervalId = setInterval(moveObstacles, 30); // Adjust obstacle movement speed
}

function restartGame() {
  clearInterval(intervalId);
  score = 0;
  life = 3; // Reset life
  document.getElementById("score-value").textContent = score;
  document.getElementById("life-value").textContent = life;
  carPosition = 50;
  document.getElementById("car").style.left = carPosition + "%";
  document.querySelectorAll('.competitor').forEach(comp => {
    comp.style.top = '-200px';
    comp.style.transform = 'rotate(180deg)'; // Rotate competitor
  });
  document.getElementById("obstacle").style.top = "-40px";
  gameIsOver = false;
  speed = 4; // Reset speed
  startGame();
}

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  }
}

function moveLeft() {
  const car = document.getElementById("car");
  if (carPosition > 10) {
    carPosition -= 10;
    car.style.left = carPosition + "%";
  }
}

function moveRight() {
  const car = document.getElementById("car");
  if (carPosition < 90) {
    carPosition += 10;
    car.style.left = carPosition + "%";
  }
}

function moveObstacles() {
  const obstacle = document.getElementById("obstacle");
  const road = document.getElementById("road");

  let obstacleTop = obstacle.offsetTop + speed;

  if (obstacleTop > road.offsetHeight) {
    obstacle.style.top = "-40px";
    obstacle.style.left = Math.random() * (road.offsetWidth - obstacle.offsetWidth) + "px";
    score++;
    document.getElementById("score-value").textContent = score;
    if (score % 5 === 0) { // Increase speed every 5 points
      speed += 1;
    }
  } else {
    obstacle.style.top = obstacleTop + "px";
  }

  check
