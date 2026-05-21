import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({

  canvas:document.getElementById('webgl'),
  antialias:true

});

renderer.setSize(window.innerWidth,window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 8;

const ambient = new THREE.AmbientLight(0xffffff,1.4);

scene.add(ambient);

const light = new THREE.PointLight(0x53f7ff,4);

light.position.set(4,5,5);

scene.add(light);

const geometry = new THREE.TorusKnotGeometry(
  1.5,
  0.4,
  300,
  32
);

const material = new THREE.MeshPhysicalMaterial({

  color:0x53f7ff,

  metalness:1,

  roughness:0.12,

  clearcoat:1,

  transmission:0.3,

  emissive:0x112244,

  emissiveIntensity:1.2

});

const knot = new THREE.Mesh(
  geometry,
  material
);

scene.add(knot);

function animate(){

  requestAnimationFrame(animate);

  knot.rotation.x += 0.003;
  knot.rotation.y += 0.004;

  renderer.render(scene,camera);

}

animate();

window.addEventListener('resize',()=>{

  camera.aspect = window.innerWidth/window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});
