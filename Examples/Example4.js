var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();
var form = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(form, material);

camera.position.z = 5;
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
cube.rotateX(-Math.PI/4);
cube.rotateY(Math.PI/4);
scene.add(cube);
renderer.render(scene, camera);