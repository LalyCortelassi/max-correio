const canvas = document.getElementById("stars-canvas");
const ctx = canvas.getContext("2d");

let stars = [];
let mouse = { x: 0, y: 0 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      delta: Math.random() * 0.015 + 0.005,
      offsetX: 0,
      offsetY: 0
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    // deslocamento sutil baseado no mouse (parallax)
    let dx = (mouse.x - canvas.width / 2) * 0.001;
    let dy = (mouse.y - canvas.height / 2) * 0.001;
    star.offsetX = dx * star.radius * 50;
    star.offsetY = dy * star.radius * 50;

    ctx.beginPath();
    ctx.arc(star.x + star.offsetX, star.y + star.offsetY, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();

    star.alpha += star.delta;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.delta = -star.delta;
    }
  }
  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createStars(150);
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Inicializa
resizeCanvas();
createStars(150);
drawStars();
