var puntos=[];
var puntos2=[];
for (var i=30;i<50;i++){
  puntos.push(new THREE.Vector2(
                  Math.sin(i*0.2)*15+50,(i-5)*2));
                  }
var forma=new THREE.LatheGeometry(puntos);

for (var i=0;i<15;i++){
  puntos2.push(new THREE.Vector2(
                  100,i+1));
                  }
var forma2=new THREE.LatheGeometry(puntos2);

var material=new THREE.MeshNormalMaterial();

var malla=new THREE.Mesh(forma,material);
var malla2=new THREE.Mesh(forma2,material);
malla.rotateX(Math.PI/6);
malla2.rotateX(Math.PI/6);
malla.position.set(0,0.9,0);
malla2.position.set(0,-15,0);

var escena=new THREE.Scene();
escena.add(malla);
escena.add(malla2);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
