var forma=new THREE.Geometry();
forma.vertices.push(new THREE.Vector3(1,0,1)); //vector0
forma.vertices.push(new THREE.Vector3(1,0,-1)); //vector1
forma.vertices.push(new THREE.Vector3(-1,0,-1)); //vector2
forma.vertices.push(new THREE.Vector3(-1,0,1)); //vector3
forma.vertices.push(new THREE.Vector3(1,1,1)); //vector4
forma.vertices.push(new THREE.Vector3(1,1,-1)); //vector5
forma.vertices.push(new THREE.Vector3(-1,1,-1)); //vector6
forma.vertices.push(new THREE.Vector3(-1,1,1)); //vector7
forma.faces.push(new THREE.Face3(0,1,2)); //cara0
forma.faces.push(new THREE.Face3(0,2,3)); //cara1

forma.faces.push(new THREE.Face3(0,1,5)); //cara2
forma.faces.push(new THREE.Face3(0,4,5)); //cara3

forma.faces.push(new THREE.Face3(4,5,6)); //cara2
forma.faces.push(new THREE.Face3(4,6,7)); //cara3

forma.computeBoundingSphere();
forma.computeFaceNormals();
var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);
var escena=new THREE.Scene();
escena.add(malla);
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
