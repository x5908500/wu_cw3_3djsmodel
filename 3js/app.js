// import './style.css';
// import { OrbitControls } from './OrbitControls';


const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),
});
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


function addStar() {
    const geometry = new THREE.SphereGeometry(0.1, 55, 55);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(200));
  
    star.position.set(x, y, z);
    scene.add(star);
  }
  
  Array(600).fill().forEach(addStar);

//   const spaceTexture = new THREE.TextureLoader().load('space.jpg');
//   scene.background = spaceTexture;

const jeffTexture = new THREE.TextureLoader().load('jeff.png');

const jeff = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshBasicMaterial({ map: jeffTexture }));

// scene.add(jeff);


// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
scene.add(moon);



//  moon.position.z = 30;
//  moon.position.setX(-10);

// jeff.position.z = -5;
// jeff.position.x = 2;


let Mesh;
let Mesh1;
let Mesh2;
let Mesh3;
// let light;

function init() {
    scene.background = new THREE.Color('black');
    camera.position.set(0, 10, 20);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

// function setLight() {
//     light = new THREE.AmbientLight(0xffffff);
//     pointLight.position.set(5, 5, 5); // soft white light
//     scene.add(light);
// }

function loadGLTF() {
    let balloonLoader = new THREE.GLTFLoader();

    balloonLoader.load('./model/E.glb', (glb) => {
        Mesh = glb.scene;
        Mesh.scale.set(0.5,0.5,0.5);
        scene.add(Mesh);
        Mesh.position.x = 1;
        Mesh.position.y = 10;
        Mesh.position.z = 15;
      
    });
    
}



function loadGLTF1() {
  let balloonLoader1 = new THREE.GLTFLoader();

  balloonLoader1.load('./model/untitled.gltf', (gltf) => {
      Mesh1 = gltf.scene;
      Mesh1.scale.set(1,1,1);
      scene.add(Mesh1);
      Mesh1.position.x= -10;
      Mesh1.position.y = 5;
      Mesh1.position.z = 30;
  });
  
}

function loadGLTF2() {
  let balloonLoader1 = new THREE.GLTFLoader();

  balloonLoader1.load('./model/untitled.gltf', (gltf) => {
      Mesh2 = gltf.scene;
      Mesh2.scale.set(1,1,1);
      scene.add(Mesh2);
      Mesh2.position.x= -13;
      Mesh2.position.y = 5;
      Mesh2.position.z = 55;
  });
  
}
function loadGLTF3() {
  let balloonLoader1 = new THREE.GLTFLoader();

  balloonLoader1.load('./model/untitled.gltf', (gltf) => {
      Mesh3 = gltf.scene;
      Mesh3.scale.set(1,1,1);
      scene.add(Mesh3);
      Mesh3.position.x= -10;
      Mesh3.position.y = 5;
      Mesh3.position.z = 75;
  });
  
}


function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;
  
    // sun.rotation.x += 0.05;
    // sun.rotation.y += 0.075;
    // sun.rotation.z += 0.05;
  
    // sun2.rotation.x += 0.05;
    // sun2.rotation.y += 0.075;
    // sun2.rotation.z += 0.05;
  
     jeff.rotation.y += 0.01;
     jeff.rotation.z += 0.01;
  
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();

function animate() {
    requestAnimationFrame(animate);
    if (Mesh && Mesh.rotation) {
        Mesh.rotation.y -= 0.005;
    }
    if (Mesh1 && Mesh1.rotation) {
      Mesh1.rotation.y -= 0.005;
  }
  if (Mesh2 && Mesh2.rotation) {
    Mesh2.rotation.y -= 0.005;
}
if (Mesh3 && Mesh3.rotation) {
  Mesh3.rotation.y -= 0.005;
}

    moon.rotation.x += 0.001;
    renderer.render(scene, camera);
}

init();
// setLight();
loadGLTF();
loadGLTF1();
loadGLTF2();
loadGLTF3();
animate();