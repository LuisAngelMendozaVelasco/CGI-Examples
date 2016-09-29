//Definición de la geometría
var cubo=new THREE.BoxGeometry(10,10,10);
////////////////////////
var TEXTURA=new Object();
////////////////////////

//Materiales
var hueso=new THREE.MeshLambertMaterial({color: 0xE3DAC9});
var cafe1=new THREE.MeshLambertMaterial({color: 0x804000});
var cafe2=new THREE.MeshLambertMaterial({color: 0x400000});

//Creación del tablero
var tablero=new THREE.Group();
var k=0;
for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    if(k%2==0){
      var malla=new THREE.Mesh(cubo,hueso);
    }
    else{
      var malla= new THREE.Mesh(cubo,cafe1);  
    }
    malla.position.x=(j+1)*10;//Columnas
    malla.position.y=(i+1)*10;//Filas
    malla.matrixAutoUpdate=false;
    malla.updateMatrix();
    malla.receiveShadow=true;
    tablero.add(malla);
    k++;
  }
k++;
}

//Creación borde alto
var borde1= new THREE.Group();
for(var l=0;l<10;l++){//columnas
  for(var m=0;m<2;m++){//filas
  var malla2= new THREE.Mesh(cubo,cafe2);
  if(m==1){
    malla2.position.y=90;
  }
  malla2.position.x=(l*10);
  malla2.matrixAutoUpdate = false;
  malla2.updateMatrix();
  malla2.receiveShadow=true;
  borde1.add(malla2);
  }
}

//Creación del brode ancho
var borde2=new THREE.Group();
for (var n=1;n<9;n++){//Filas
  for (var o=0;o<2;o++){//Columnas
  var malla3=new THREE.Mesh(cubo,cafe2);
  if (o==1){
    malla3.position.x=90;
  }
  malla3.position.y=(n)*10
  malla3.matrixAutoUpdate = false;
  malla3.updateMatrix();
  malla3.receiveShadow=true;
  borde2.add(malla3);
  }
}
////////////////////////////////////////////////////
var torre1=[];

torre1.push(new THREE.Vector2(120,-50));
torre1.push(new THREE.Vector2(120,-30));
torre1.push(new THREE.Vector2(100,-30));
torre1.push(new THREE.Vector2(100,-10));
torre1.push(new THREE.Vector2(70,10));
torre1.push(new THREE.Vector2(70,100));
torre1.push(new THREE.Vector2(90,120));

var torre2=new THREE.Shape();

torre2.moveTo(-30,84.85);
torre2.lineTo(-30,57.43);
torre2.lineTo(-57.43,30);
torre2.lineTo(-84.85,30);
torre2.lineTo(-63.64,63.64);
torre2.lineTo(-30,84.85);

var torre2_1=new THREE.Shape();

torre2_1.moveTo(-30,-84.85);
torre2_1.lineTo(-30,-57.43);
torre2_1.lineTo(-57.43,-30);
torre2_1.lineTo(-84.85,-30);
torre2_1.lineTo(-63.64,-63.64);
torre2_1.lineTo(-30,-84.85);

var torre2_2=new THREE.Shape();

torre2_2.moveTo(30,-84.85);
torre2_2.lineTo(30,-57.43);
torre2_2.lineTo(57.43,-30);
torre2_2.lineTo(84.85,-30);
torre2_2.lineTo(63.64,-63.64);
torre2_2.lineTo(30,-84.85);

var torre2_3=new THREE.Shape();

torre2_3.moveTo(30,84.85);
torre2_3.lineTo(30,57.43);
torre2_3.lineTo(57.43,30);
torre2_3.lineTo(84.85,30);
torre2_3.lineTo(63.64,63.64);
torre2_3.lineTo(30,84.85);

var torre3 = new THREE.CylinderGeometry(90,90,5,32);

var forma1=new THREE.LatheGeometry(torre1);
var forma2= new THREE.ExtrudeGeometry(torre2,{amount:40});
var forma2_1= new THREE.ExtrudeGeometry(torre2_1,{amount:40});
var forma2_2= new THREE.ExtrudeGeometry(torre2_2,{amount:40});
var forma2_3= new THREE.ExtrudeGeometry(torre2_3,{amount:40});
var forma3=torre3;
forma2.rotateX(90*Math.PI/180)
forma2.translate(0,163,0);
forma2_1.rotateX(90*Math.PI/180)
forma2_1.translate(0,163,0);
forma2_2.rotateX(90*Math.PI/180)
forma2_2.translate(0,163,0);
forma2_3.rotateX(90*Math.PI/180)
forma2_3.translate(0,163,0);
forma3.translate(0,118,0);

var torre1Malla=new THREE.Mesh(forma1);
var torre2Malla=new THREE.Mesh(forma2);
var torre2_1Malla=new THREE.Mesh(forma2_1);
var torre2_2Malla=new THREE.Mesh(forma2_2);
var torre2_3Malla=new THREE.Mesh(forma2_3);
var torre3Malla=new THREE.Mesh(forma3);

var torreForma=new THREE.Geometry();

torreForma.merge(torre1Malla.geometry,torre1Malla.matrix);
torreForma.merge(torre2Malla.geometry,torre2Malla.matrix);
torreForma.merge(torre2_1Malla.geometry,torre2_1Malla.matrix);
torreForma.merge(torre2_2Malla.geometry,torre2_2Malla.matrix);
torreForma.merge(torre2_3Malla.geometry,torre2_3Malla.matrix);
torreForma.merge(torre3Malla.geometry,torre3Malla.matrix);

var materialBlanca1=new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 1});
var materialBlanca2=new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 0.75});
var torreBlancaMalla1=new THREE.Mesh(torreForma,materialBlanca1);
var torreBlancaMalla2=new THREE.Mesh(torreForma,materialBlanca2);
///////////////////
TEXTURA.retrollamada=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  TEXTURA.malla=new THREE.Mesh(torreForma,material);
  TEXTURA.malla.scale.set(0.05,0.05,0.05)
  TEXTURA.escena.add(TEXTURA.malla);
 }
////////////////////////////
var materialNegra1=new THREE.MeshLambertMaterial({color: 0x000000, transparent: true, opacity: 0.5});
var materialNegra2=new THREE.MeshLambertMaterial({color: 0x000000, transparent: true, opacity: 0.25});
var torreNegraMalla1=new THREE.Mesh(torreForma,materialNegra1);
var torreNegraMalla2=new THREE.Mesh(torreForma,materialNegra2);

torreBlancaMalla1.rotateX(Math.PI/2);
torreBlancaMalla2.rotateX(Math.PI/2);
torreNegraMalla1.rotateX(Math.PI/2);
torreNegraMalla2.rotateX(Math.PI/2);
torreBlancaMalla1.scale.set(0.05,0.05,0.05)
torreBlancaMalla2.scale.set(0.05,0.05,0.05)
torreNegraMalla1.scale.set(0.05,0.05,0.05)
torreNegraMalla2.scale.set(0.05,0.05,0.05)
///////////////////////////////////////////////////////
torreBlancaMalla1.position.x=10;
torreBlancaMalla1.position.y=10;
torreBlancaMalla1.position.z=5;

torreBlancaMalla2.position.x=80;
torreBlancaMalla2.position.y=10;
torreBlancaMalla2.position.z=5;

torreNegraMalla1.position.x=10;
torreNegraMalla1.position.y=80;
torreNegraMalla1.position.z=5;

torreNegraMalla2.position.x=80;
torreNegraMalla2.position.y=80;
torreNegraMalla2.position.z=5;

//Creación de luces en la escena
var luzPuntual=new THREE.PointLight(0xFFFF00);//AMARILLO
var luzPuntual1=new THREE.PointLight(0xFF00FF);//ROSA
var luzPuntual2=new THREE.PointLight(0x00FFFF);//CYAN
//Posición de la iluminación
luzPuntual.position.x=10;
luzPuntual.position.y=90;
luzPuntual.position.z=60;
luzPuntual1.position.x=80;
luzPuntual1.position.y=90;
luzPuntual1.position.z=60;
luzPuntual2.position.x=100;
luzPuntual2.position.y=10;
luzPuntual2.position.z=60;

var escena=new THREE.Scene();
escena.add(tablero);
escena.add(borde1);
escena.add(borde2);
escena.add(torreBlancaMalla1);
escena.add(torreBlancaMalla2);
escena.add(torreNegraMalla1);
escena.add(torreNegraMalla2);
escena.add(luzPuntual);
escena.add(luzPuntual1);
escena.add(luzPuntual2);
//////////////////////////////////
 TEXTURA.setup=function(){
  TEXTURA.escena=new THREE.Scene();
  var cargador=new THREE.TextureLoader();
  cargador.load("carrara 01-2270x1396.jpg",TEXTURA.retrollamada);
  TEXTURA.camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  TEXTURA.camara.position.z=130;
  var lienzo=document.getElementById("torre_textura");
  TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  TEXTURA.renderizador.setSize(600,600);
 }
///////////////////////////////////////
var camara=new THREE.PerspectiveCamera();
camara.position.z=130;
camara.position.x=45;
camara.position.y=45;
escena.rotateX(-Math.PI/4)
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.shadowMap.enabled=true;
torreBlancaMalla1.castShadow=true;
torreBlancaMalla2.castShadow=true;
torreNegraMalla1.castShadow=true;
torreNegraMalla2.castShadow=true;
luzPuntual.castShadow=true;
luzPuntual1.castShadow=true;
luzPuntual2.castShadow=true;
renderizador.render(escena,camara);
///////////////////////////////////////
 TEXTURA.loop=function(){
  requestAnimationFrame(TEXTURA.loop);
  
  if(TEXTURA.malla!==undefined){
    //TEXTURA.malla.rotateX(0.01);
    TEXTURA.malla.rotateY(0.01);
  }
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
 }
 
 TEXTURA.setup();
 TEXTURA.loop();
////////////////////////////////////////
