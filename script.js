const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 150;
const paddleHeight = 100;
const paddleWidth = 10;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);
}

setInterval(draw, 1000 / 60);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 150;
const paddleHeight = 100;
const paddleWidth = 10;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);
}

canvas.addEventListener("mousemove", function(event) {
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  paddleY = mouseY - paddleHeight / 2;
});

setInterval(draw, 1000 / 60);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 150;
const paddleHeight = 100;
const paddleWidth = 10;

let ballX = 300;
let ballY = 200;
let ballSpeedX = 4;
let ballSpeedY = 4;
const ballRadius = 10;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pala
  ctx.fillStyle = "white";
  ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);

  // Pelota
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fill();

  // Movimiento pelota
  ballX += ballSpeedX;
  ballY += ballSpeedY;
}

canvas.addEventListener("mousemove", function(event) {
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  paddleY = mouseY - paddleHeight / 2;
});

setInterval(draw, 1000 / 60);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleY = 150;
const paddleHeight = 100;
const paddleWidth = 10;

let ballX = 300;
let ballY = 200;
let ballSpeedX = 4;
let ballSpeedY = 4;
const ballRadius = 10;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pala
  ctx.fillStyle = "white";
  ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);

  // Pelota
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fill();

  // Movimiento
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Rebote arriba y abajo
  if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    ballSpeedY *= -1;
  }

  // Rebote con la pala
  if (
    ballX - ballRadius < paddleWidth &&
    ballY > paddleY &&
    ballY < paddleY + paddleHeight
  ) {
    ballSpeedX *= -1;
  }
}

canvas.addEventListener("mousemove", function(event) {
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  paddleY = mouseY - paddleHeight / 2;
});

setInterval(draw, 1000 / 60);
