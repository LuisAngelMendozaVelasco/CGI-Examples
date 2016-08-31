var estrella=new THREE.Shape();

estrella.moveTo(-35,35);
estrella.lineTo(-70,35);
estrella.lineTo(-45,-35);
estrella.lineTo(-70,-70);
estrella.lineTo(0,-45);
estrella.lineTo(70,-70);
estrella.lineTo(45,35);
estrella.lineTo(70,35);
estrella.lineTo(35,35);
estrella.lineTo(0,70);

var forma= new THREE.ShapeGeometry(estrella);
var material=new THREE.MeshBasicMaterial({color: 0xFFFF00});
var malla= new THREE.Mesh(forma,material);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=150;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
