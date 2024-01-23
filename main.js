import * as THREE from 'three';
import * as YUKA from 'yuka';

const renderer = new THREE.WebGL1Renderer( {antialias: true} );

renderer.setSize(window.innerWidth, window.innerHeight);

document.appendChild(renderer.domElement);

const scene = new THREE.Scene();

renderer.setClearColor(0xA3A3A3);

const camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight,
    0.1, 1000
);

camera.position.set(0,20,0);
camera.lookAt(scene.position); 

function animate() {
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', onWindowResize, false);