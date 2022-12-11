var point_light = new THREE.PointLight(0xFFFFFF);
var form = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#00cc00"});
var mesh = new THREE.Mesh(form, material);
var base = new THREE.Mesh(new THREE.BoxGeometry(5, 1.5, 5), 
                          new THREE.MeshLambertMaterial({color: 0xFFFFFF}));
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var canvas = document.getElementById("shadowlessLight");
var renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});

point_light.position.y = 20;
mesh.position.y = 2;
scene.add(mesh);
scene.add(base);
scene.add(point_light);
camera.position.z = 15;
camera.position.y = 5;
renderer.setSize(600, 600);
renderer.shadowMap.enabled = true;
mesh.castShadow = true;
base.receiveShadow = true;
point_light.castShadow = true;
renderer.render(scene, camera);