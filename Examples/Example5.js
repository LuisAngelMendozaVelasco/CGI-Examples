var form = new THREE.BufferGeometry();
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(form, material);
var scene  =new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();
const points = [
                new THREE.Vector3(-1, 1, -1),//c
                new THREE.Vector3(-1, -1, 1),//b
                new THREE.Vector3(1, 1, 1),//a   

                new THREE.Vector3(1, 1, 1),//a    
                new THREE.Vector3(1, -1, -1),//d  
                new THREE.Vector3(-1, 1, -1),//c

                new THREE.Vector3(-1, -1, 1),//b
                new THREE.Vector3(1, -1, -1),//d  
                new THREE.Vector3(1, 1, 1),//a

                new THREE.Vector3(-1, 1, -1),//c
                new THREE.Vector3(1, -1, -1),//d    
                new THREE.Vector3(-1, -1, 1),//b
                ];

form.setFromPoints(points);
form.computeVertexNormals();
mesh.rotateX(-Math.PI/4);
mesh.rotateY(Math.PI/4);
scene.add(mesh);
camera.position.z = 5;
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);