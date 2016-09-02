var torre1=[];

torre1.push(new THREE.Vector2(100,-50));
torre1.push(new THREE.Vector2(100,-30));
torre1.push(new THREE.Vector2(90,-30));
torre1.push(new THREE.Vector2(90,-10));
torre1.push(new THREE.Vector2(70,10));
torre1.push(new THREE.Vector2(70,70));
torre1.push(new THREE.Vector2(100,90));

var torre2=new THREE.Shape();

torre2.moveTo(-30,30);
torre2.lineTo(-30,90);
torre2.lineTo(-73.65,73.65);
torre2.lineTo(-90,30);
torre2.lineTo(-30,30);
torre2.moveTo(-30,-30);
torre2.lineTo(-90,-30);
torre2.lineTo(-73.65,-73.65);
torre2.lineTo(-30,-90);
torre2.lineTo(-30,-30);
torre2.moveTo(30,-30);
torre2.lineTo(30,-90);
torre2.lineTo(73.65,-73.65);
torre2.lineTo(90,-30);
torre2.lineTo(30,-30);
torre2.moveTo(30,30);
torre2.lineTo(90,30);
torre2.lineTo(73.65,73.65);
torre2.lineTo(30,90);
torre2.lineTo(30,30);
torre2.moveTo(-30,30);

var forma1=new THREE.LatheGeometry(torre1);
var forma2= new THREE.ExtrudeGeometry(torre2,{amount:20});
forma2.rotateX(90*Math.PI/180)
forma2.translate(0,115,0);

var torre1Malla=new THREE.Mesh(forma1);
var torre2Malla=new THREE.Mesh(forma2);

var torreForma=new THREE.Geometry();

torreForma.merge(torre1Malla.geometry,torre1Malla.matrix);
torreForma.merge(torre2Malla.geometry,torre2Malla.matrix);

var material=new THREE.MeshNormalMaterial();
var torreMalla=new THREE.Mesh(torreForma,material);

torreMalla.rotateX(Math.PI/6);
var escena=new THREE.Scene();
escena.add(torreMalla);
//escena.add(malla2);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
