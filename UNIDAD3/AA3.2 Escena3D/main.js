import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141826);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 8, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 200),
  new THREE.MeshStandardMaterial({ color: 0x202534, roughness: 1 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.08;
scene.add(ground);

// An oval road strip made from paired outer and inner ellipse vertices.
const trackGeometry = new THREE.BufferGeometry();
const trackPositions = [];
const trackIndices = [];
const segmentCount = 128;
const outerRadius = { x: 3.8, z: 2.5 };
const innerRadius = { x: 2.7, z: 1.5 };

for (let index = 0; index < segmentCount; index += 1) {
  const angle = (index / segmentCount) * Math.PI * 2;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  trackPositions.push(
    outerRadius.x * cos, 0, outerRadius.z * sin,
    innerRadius.x * cos, 0, innerRadius.z * sin
  );
}

for (let index = 0; index < segmentCount; index += 1) {
  const next = (index + 1) % segmentCount;
  const outer = index * 2;
  const inner = outer + 1;
  const nextOuter = next * 2;
  const nextInner = nextOuter + 1;
  trackIndices.push(outer, nextOuter, inner, nextOuter, nextInner, inner);
}

trackGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(trackPositions, 3)
);
trackGeometry.setIndex(trackIndices);
trackGeometry.computeVertexNormals();
const track = new THREE.Mesh(
  trackGeometry,
  new THREE.MeshStandardMaterial({
    color: 0x555b68,
    roughness: 0.9,
    side: THREE.DoubleSide
  })
);
track.position.y = 0.01;
scene.add(track);

const laneMaterial = new THREE.LineBasicMaterial({ color: 0xe9dfc8 });
for (const radius of [outerRadius, innerRadius]) {
  const points = [];
  for (let index = 0; index < segmentCount; index += 1) {
    const angle = (index / segmentCount) * Math.PI * 2;
    points.push(new THREE.Vector3(
      radius.x * Math.cos(angle),
      0.035,
      radius.z * Math.sin(angle)
    ));
  }
  scene.add(new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(points),
    laneMaterial
  ));
}

const car = new THREE.Group();
scene.add(car);

const redPaint = new THREE.MeshStandardMaterial({
  color: 0xd71920,
  roughness: 0.35,
  metalness: 0.12
});
const windowMaterial = new THREE.MeshStandardMaterial({
  color: 0x9ec9d8,
  roughness: 0.25,
  metalness: 0.1
});
const tireMaterial = new THREE.MeshStandardMaterial({ color: 0x17191e });

const body = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.28, 1.2), redPaint);
body.position.y = 0.34;
car.add(body);

const cabin = new THREE.Mesh(
  new THREE.BoxGeometry(0.52, 0.3, 0.58),
  windowMaterial
);
cabin.position.set(0, 0.62, -0.06);
car.add(cabin);

const hood = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.12, 0.32), redPaint);
hood.position.set(0, 0.48, 0.42);
car.add(hood);

const wheels = [];
for (const x of [-0.38, 0.38]) {
  for (const z of [-0.38, 0.4]) {
    const wheel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.17, 0.17, 0.12, 16),
      tireMaterial
    );
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(x, 0.2, z);
    car.add(wheel);
    wheels.push(wheel);
  }
}

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
sunLight.position.set(4, 8, 5);
scene.add(sunLight);

const clock = new THREE.Clock();
let travel = 0;

function animate() {
  requestAnimationFrame(animate);
  travel += clock.getDelta() * 0.55;

  const radiusX = (outerRadius.x + innerRadius.x) / 2;
  const radiusZ = (outerRadius.z + innerRadius.z) / 2;
  car.position.set(radiusX * Math.cos(travel), 0, radiusZ * Math.sin(travel));
  car.rotation.y = Math.atan2(
    radiusX * Math.cos(travel),
    -radiusZ * Math.sin(travel)
  );
  for (const wheel of wheels) {
    wheel.rotation.x += 0.08;
  }

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
