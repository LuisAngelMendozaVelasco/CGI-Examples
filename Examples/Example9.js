var trunk_form = new THREE.CylinderGeometry(.25, .5, 1);
var sphere_form = new THREE.SphereGeometry(.65);
sphere_form.translate(0, 1, 0);

var trunk_mesh = new THREE.Mesh(trunk_form);
var sphere_mesh = new THREE.Mesh(sphere_form);
var tree_form = new THREE.Geometry();
tree_form.merge(trunk_mesh.geometry, trunk_mesh.matrix);
tree_form.merge(sphere_mesh.geometry,  sphere_mesh.matrix);

var material = new THREE.MeshNormalMaterial();
var tree_mesh = new THREE.Mesh(tree_form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();

scene.add(tree_mesh);
camera.position.z = 5;
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*0.95);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);