var torre=[];

torre.push(new THREE.Vector2(50,0));
torre.push(new THREE.Vector2(50,10));
torre.push(new THREE.Vector2(45,10));
torre.push(new THREE.Vector2(45,20));
torre.push(new THREE.Vector2(35,30));
torre.push(new THREE.Vector2(35,60));
torre.push(new THREE.Vector2(45,70));

var forma2=new THREE.LatheGeometry(torre);
var material2=new THREE.MeshNormalMaterial();
var malla2= new THREE.Mesh(forma2,material2);
//malla2.rotateX(Math.PI/6);

var escena=new THREE.Scene();
escena.add(malla2);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
