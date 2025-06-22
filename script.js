const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Pala
let paddleY = 150;
const paddleHeight = 100;
const paddleWidth = 10;

// Pelota
let ballX = 300;
let ballY = 200;
let ballSpeedX = 4;
let ballSpeedY = 4;
const ballRadius = 10;

// Puntaje y vidas
let score = 0;
let vidas = 3;

// Elementos del DOM
const scoreDisplay = document.getElementById("score");
const vidasDisplay = document.getElementById("vidas");
const mensaje = document.getElementById("mensaje");

function draw() {
  if (vidas <= 0) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar pala
  ctx.fillStyle = "white";
  ctx.fillRect(0, paddleY, paddleWidth, paddleHeight);

  // Dibujar pelota
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fill();

  // Movimiento
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Rebote vertical
  if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    ballSpeedY *= -1;
  }

  // Colisión con pala
  if (
    ballX - ballRadius < paddleWidth &&
    ballY > paddleY &&
    ballY < paddleY + paddleHeight
  ) {
    ballSpeedX *= -1;
    score++;
    scoreDisplay.textContent = score;
  }

  // Pérdida de vida
  if (ballX < 0) {
    vidas--;
    vidasDisplay.textContent = vidas;
    resetBall();
    if (vidas === 0) {
      mensaje.classList.remove("oculto");
    }
  }

  // Rebote lado derecho
  if (ballX + ballRadius > canvas.width) {
    ballSpeedX *= -1;
  }
}

function movePaddle(event) {
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  paddleY = mouseY - paddleHeight / 2;
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = 4;
  ballSpeedY = 4;
}

canvas.addEventListener("mousemove", movePaddle);
setInterval(draw, 1000 / 60);

