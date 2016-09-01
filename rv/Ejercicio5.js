var torre=new [];

torre.push(100,0);
torre.push(100,10);
torre.push(85,10);

var puntos=[];
for (var i=10;i<30;i++){
  puntos.push(new THREE.Vector2(
                  Math.sin(i*0.2)*15+50,(i-5)*2));
                  }
                  
var forma=new THREE.LatheGeometry(puntos);
var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/6);

var forma2=new THREE.LatheGeometry(torre);
var material2=new THREE.MeshBasicMaterial({color: 0xFFFF00});
var malla2= new THREE.Mesh(forma2,material2);
malla2.rotateX(Math.PI/6);

var escena=new THREE.Scene();
escena.add(malla);
escena.add(malla2);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
