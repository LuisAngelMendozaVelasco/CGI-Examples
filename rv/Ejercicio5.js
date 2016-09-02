var torre=[];

torre.push(new THREE.Vector2(100,0));
torre.push(new THREE.Vector2(100,20));
torre.push(new THREE.Vector2(90,20));
torre.push(new THREE.Vector2(90,40));
torre.push(new THREE.Vector2(70,60));
torre.push(new THREE.Vector2(70,120));
torre.push(new THREE.Vector2(90,140));

var forma=new THREE.LatheGeometry(torre);
var material=new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(forma,material);
//malla2.rotateX(Math.PI/6);


var escena=new THREE.Scene();
escena.add(malla);
escena.add(malla2);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
