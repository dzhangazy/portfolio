// Переключение страниц
const pages = document.querySelectorAll(".page");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
let currentIndex = 0;

pages[currentIndex].classList.add("active");

function showPage(index) {
  if (index < 0 || index >= pages.length) return;
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
  currentIndex = index;
}

upBtn.onclick = () => showPage(currentIndex - 1);
downBtn.onclick = () => showPage(currentIndex + 1);

// Поддержка прокрутки мышкой
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) showPage(currentIndex + 1);
  else showPage(currentIndex - 1);
});

// Жидкая анимация на canvas
const canvas = document.getElementById("liquidCanvas");
const ctx = canvas.getContext("2d");
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;
function drawLiquid() {
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  ctx.moveTo(0, h / 2);

  for (let x = 0; x < w; x++) {
    const y =
      h / 2 + Math.sin(x * 0.01 + t) * 30 + Math.cos(x * 0.02 + t * 1.5) * 20;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "#6ce5ff";
  ctx.lineWidth = 2;
  ctx.stroke();
  t += 0.03;
  requestAnimationFrame(drawLiquid);
}
drawLiquid();
