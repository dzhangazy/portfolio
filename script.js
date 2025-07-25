// Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 13;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("webgl-bg").appendChild(renderer.domElement);

// Чёрная спираль
const geometry = new THREE.TorusGeometry(11, 4, 15, 50);
const material = new THREE.MeshBasicMaterial({
  color: 0x000000, // чёрный цвет
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Анимация
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.003;
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Управление секциями
let currentScreen = 0;
const container = document.getElementById("container");

function goDown() {
  if (currentScreen < 1) {
    currentScreen++;
    container.style.transform = `translateY(-${currentScreen * 100}vh)`;
  }
}

function goUp() {
  if (currentScreen > 0) {
    currentScreen--;
    container.style.transform = `translateY(-${currentScreen * 100}vh)`;
  }
}
