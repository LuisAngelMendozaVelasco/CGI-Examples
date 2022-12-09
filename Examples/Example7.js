var figure = new THREE.Shape();
figure.moveTo(10, 10);
figure.lineTo(10, 40);
figure.lineTo(40, 40);
figure.lineTo(10, 10);
var form = new THREE.ExtrudeGeometry(figure, {depth:10});
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();

mesh.rotateY(Math.PI/4);
scene.add(mesh);
camera.position.z = 100;
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);