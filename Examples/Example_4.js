var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
var renderizador = new THREE.WebGLRenderer();
var forma = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial();
var cubo = new THREE.Mesh(forma, material);

camara.position.z = 5;
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
cubo.rotateX(-Math.PI/4);
cubo.rotateY(Math.PI/4);
escena.add(cubo);
renderizador.render(escena, camara);