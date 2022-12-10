var form = new THREE.SphereGeometry(1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var mesh = new THREE.Mesh(form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var canvas = document.getElementById("basicMaterial");
var renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});

scene.add(mesh);
camera.position.z = 5;
renderer.setSize(600, 600);
renderer.render(scene, camera);