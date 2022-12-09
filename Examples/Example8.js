var points = []; 
for (var i=0; i<50; i++){
    points.push(new THREE.Vector2(Math.sin(i*0.2)*15+50, (i-5)*2)); 
}
var form = new THREE.LatheGeometry(points); 
var material = new THREE.MeshNormalMaterial(); 
var mesh = new THREE.Mesh(form, material); 
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(); 
var renderer = new THREE.WebGLRenderer(); 

mesh.rotateX(Math.PI/6); 
scene.add(mesh); 
camera.position.z = 500; 
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95); 
document.body.appendChild(renderer.domElement); 
renderer.render(scene, camera); 