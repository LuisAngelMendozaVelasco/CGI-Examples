var star = new THREE.Shape();

star.moveTo(-20, 20);
star.lineTo(-70, 0);
star.lineTo(-20, -20);
star.lineTo(0, -70);
star.lineTo(20, -20);
star.lineTo(70, 0);
star.lineTo(20, 20);
star.lineTo(0, 70);
star.lineTo(-20, 20);

var form =  new THREE.ShapeGeometry(star);
var material = new THREE.MeshBasicMaterial({color: 0xFFFF00});
var mesh = new THREE.Mesh(form, material);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();

scene.add(mesh);
camera.position.z = 150;
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);