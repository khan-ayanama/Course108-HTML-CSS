const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

const thickness = 10;

x = 0;
y = 0;
w = 400;
h = 400;

let i = 1;

while (i <= 20) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  if (i % 2 == 1) {
    ctx.fillStyle = `rgb(${x * 9}, ${y * 2}, ${x + y * 5})`;
  } else {
    ctx.fillStyle = "white";
  }
  ctx.fill();
  x = x + thickness;
  y = y + thickness;
  w = w - thickness - thickness;
  h = h - thickness - thickness;
  i = i + 1;
}

// ctx.beginPath();
// ctx.rect(0, 0, 400, 400);
// ctx.fillStyle = "blue";
// ctx.fill();
