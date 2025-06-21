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
