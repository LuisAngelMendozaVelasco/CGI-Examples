var form = new THREE.Geometry();
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();

form.vertices.push(new THREE.Vector3(1, -1, 1)); 
form.vertices.push(new THREE.Vector3(1, -1, -1)); 
form.vertices.push(new THREE.Vector3(-1, -1, -1)); 
form.vertices.push(new THREE.Vector3(-1, -1, 1)); 
form.vertices.push(new THREE.Vector3(1, 1, 1)); 
form.vertices.push(new THREE.Vector3(1, 1, -1)); 
form.vertices.push(new THREE.Vector3(-1, 1, -1)); 
form.vertices.push(new THREE.Vector3(-1, 1, 1)); 

form.faces.push(new THREE.Face3(0, 3, 2)); 
form.faces.push(new THREE.Face3(2, 1, 0)); 
form.faces.push(new THREE.Face3(4, 5, 6)); 
form.faces.push(new THREE.Face3(6, 7, 4)); 
form.faces.push(new THREE.Face3(7, 3, 0)); 
form.faces.push(new THREE.Face3(0, 4, 7)); 
form.faces.push(new THREE.Face3(2, 6, 5)); 
form.faces.push(new THREE.Face3(5, 1, 2)); 
form.faces.push(new THREE.Face3(0, 1, 5)); 
form.faces.push(new THREE.Face3(5, 4, 0)); 
form.faces.push(new THREE.Face3(3, 7, 6)); 
form.faces.push(new THREE.Face3(6, 2, 3)); 

form.computeBoundingSphere();
form.computeFaceNormals();

mesh.rotateX(Math.PI/4);
mesh.rotateY(Math.PI/4);
scene.add(mesh);
camera.position.z = 6;
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);