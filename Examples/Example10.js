var FoV = 45; //Field of view in degrees
var aspect_ratio = window.innerWidth/window.innerHeight;
var near_plane = 1;
var far_plane = 1000;
var camera = new THREE.PerspectiveCamera(FoV, aspect_ratio, near_plane, far_plane);
var cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
var sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial());
var sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial());
var escene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();

camera.position.z = 15;
cube.rotateY(Math.PI/4);
sphere1.position.x = 5;
sphere2.position.x = -5;
sphere2.position.z = -10;
escene.add(sphere1);
escene.add(sphere2);
escene.add(cube);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(escene, camera);