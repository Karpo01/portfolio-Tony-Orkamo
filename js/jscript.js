// Luo canvas-elementti ja aseta sen leveys ja korkeus
const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// Hae canvas-konteksti
const ctx = canvas.getContext("2d");

// Määritä hahmon koko ja aloituspaikka
const SIZE = 50;
let x = canvas.width / 2 - SIZE / 2;
let y = canvas.height / 2 - SIZE / 2;

// Piirrä neliö hahmoksi
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, SIZE, SIZE);
}

// Liikuta hahmoa ylös
function moveUp() {
  y -= 10;
  if (y < 0) {
    y = 0;
  }
  draw();
}

// Liikuta hahmoa alas
function moveDown() {
  y += 10;
  if (y + SIZE > canvas.height) {
    y = canvas.height - SIZE;
  }
  draw();
}

// Liikuta hahmoa vasemmalle
function moveLeft() {
  x -= 10;
  if (x < 0) {
    x = 0;
  }
  draw();
}

// Liikuta hahmoa oikealle
function moveRight() {
  x += 10;
  if (x + SIZE > canvas.width) {
    x = canvas.width - SIZE;
  }
  draw();
}

// Kuuntele näppäimistöä
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "w":
      moveUp();
      break;
    case "s":
      moveDown();
      break;
    case "a":
      moveLeft();
      break;
    case "d":
      moveRight();
      break;
  }
});
