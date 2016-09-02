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

var torre2=new THREE.Shape();

torre2.moveTo(-30,90);
torre2.lineTo(-30,30);
torre2.lineTo(-90,30);
torre2.lineTo(-90,-30);
torre2.lineTo(-30,-30);
torre2.lineTo(-30,-90);
torre2.lineTo(30,-90);
torre2.lineTo(30,-30);
torre2.lineTo(90,-30);
torre2.lineTo(90,30);
torre2.lineTo(30,30);
torre2.lineTo(30,90);
torre2.lineTo(-30,90);

var forma2= new THREE.ExtrudeGeometry(torre2,{amount:40});
var material2=new THREE.MeshNormalMaterial();
var malla2= new THREE.Mesh(forma2,material2);
malla2.translate(0,140,0);


var escena=new THREE.Scene();
escena.add(malla);
escena.add(malla2);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
