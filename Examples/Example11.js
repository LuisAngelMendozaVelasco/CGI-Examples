var camera = new THREE.OrthographicCamera();
var cube = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30), new THREE.MeshNormalMaterial());
var sphere1 = new THREE.Mesh(new THREE.SphereGeometry(15), new THREE.MeshNormalMaterial());
var sphere2 = new THREE.Mesh(new THREE.SphereGeometry(15), new THREE.MeshNormalMaterial());
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();

camera.left = window.innerWidth/-2;
camera.right = window.innerWidth/2;
camera.top = window.innerHeight/2;
camera.bottom = window.innerHeight/-2;
camera.near = 0.1;
camera.far = 1000;
camera.updateProjectionMatrix();
camera.position.z = 100;
cube.rotateY(Math.PI/4);
sphere1.position.x = 50;
sphere2.position.x = -50;
sphere2.position.z = -100;
scene.add(sphere1);
scene.add(sphere2);
scene.add(cube);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera)