var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();
var form = new THREE.CylinderGeometry(0.5, 0.5, 2);
var form2 = new THREE.SphereGeometry(1.5, 8, 6);
var material = new THREE.MeshBasicMaterial({color: 0x2A1B0A});
var material2 = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cylinder = new THREE.Mesh(form, material);
var sphere = new THREE.Mesh(form2, material2);

camera.position.z = 7;
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
sphere.position.set(0, 0.9, 0);
cylinder.position.set(0, -1, 0);
scene.add(cylinder, sphere);
renderer.render(scene, camera);