var point_light = new THREE.PointLight(0xFFFFFF);
var form = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#00cc00"});
var mesh = new THREE.Mesh(form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var canvas = document.getElementById("lambertMaterial");
var renderer = new THREE.WebGLRenderer({canvas: canvas, antiAlias:true});

point_light.position.x = 10;
point_light.position.y = 10;
point_light.position.z = 10;
scene.add(mesh);
scene.add(point_light);
camera.position.z = 5;
renderer.setSize(600, 600);
renderer.render(scene, camera);