var ambient_light = new THREE.AmbientLight(0xFFFFFF);
var form = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color:"#00cc00"});
var mesh = new THREE.Mesh(form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var canvas = document.getElementById("ambientLight");
var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});

scene.add(mesh);
scene.add(ambient_light);
camera.position.z = 5;
renderer.setSize(600, 600);
renderer.render(scene, camera);