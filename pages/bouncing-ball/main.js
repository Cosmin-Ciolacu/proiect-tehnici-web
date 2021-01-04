// initializare variabile
const canvas = document.querySelector("canvas");
const speedPicker = document.querySelector("#speedPicker");
const speedSpan = document.querySelector("#speedSpan");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let currentSpeed = 2;
let dx = currentSpeed;
let dy = -currentSpeed;
speedSpan.innerHTML = currentSpeed;
// functie pentru construirea mingii

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

// functie pentru a genera miscarea mingii

const draw = () => {
  console.log(currentSpeed);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  // verificam daca mingea loveste marginea de sus sau de jos
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    // schimbam directia
    dx = -dx;
  }
  // verificam daca mingea loveste marginea din dreapta sau stanga
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    // schimbam directia
    dy = -dy;
  }
  x += dx;
  y += dy;
};

setInterval(draw, 10);

// functie pentru actualizarea vitezei

speedPicker.onchange = (e) => {
  currentSpeed = +e.target.value;
  dx = currentSpeed;
  dy = -currentSpeed;
  speedSpan.innerHTML = currentSpeed;
};
