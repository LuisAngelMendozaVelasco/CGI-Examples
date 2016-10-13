var setupdone=false;
var textura1=false;
var textura2=false;
var textura3=false;
var textura4=false;
var textura5=false;
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

//Declaración del objeto
var TEXTURA=new Object();
//Declaración de las retrollamadas
//Marmol blanco
TEXTURA.retrollamadamblanco=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  
  TEXTURA.ftorre1=new THREE.Mesh(torreForma,material);
  TEXTURA.ftorre1.position.x=10;
  TEXTURA.ftorre1.position.y=10;
  TEXTURA.ftorre1.position.z=5;
  TEXTURA.ftorre1.scale.set(0.05,0.05,0.05)
  TEXTURA.ftorre1.rotateX(Math.PI/2);
  TEXTURA.escena.add(TEXTURA.ftorre1);
  
  TEXTURA.ftorre2=new THREE.Mesh(torreForma,material);
  TEXTURA.ftorre2.position.x=80;
  TEXTURA.ftorre2.position.y=10;
  TEXTURA.ftorre2.position.z=5;
  TEXTURA.ftorre2.scale.set(0.05,0.05,0.05)
  TEXTURA.ftorre2.rotateX(Math.PI/2);
  TEXTURA.escena.add(TEXTURA.ftorre2);
  
  textura1=true;
}

//Marmol negro
TEXTURA.retrollamadamnegro=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  
  TEXTURA.ftorre3=new THREE.Mesh(torreForma,material);
  TEXTURA.ftorre3.position.x=10;
  TEXTURA.ftorre3.position.y=80;
  TEXTURA.ftorre3.position.z=5;
  TEXTURA.ftorre3.scale.set(0.05,0.05,0.05)
  TEXTURA.ftorre3.rotateX(Math.PI/2);
  TEXTURA.escena.add(TEXTURA.ftorre3);
  
  TEXTURA.ftorre4=new THREE.Mesh(torreForma,material);
  TEXTURA.ftorre4.position.x=80;
  TEXTURA.ftorre4.position.y=80;
  TEXTURA.ftorre4.position.z=5;
  TEXTURA.ftorre4.scale.set(0.05,0.05,0.05)
  TEXTURA.ftorre4.rotateX(Math.PI/2);
  TEXTURA.escena.add(TEXTURA.ftorre4);
  
  textura2=true;
}

//Definición de la geometría
var cubo=new THREE.BoxGeometry(10,10,10);
//Ceramica blanca
TEXTURA.retrollamadacblanca=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
//Creación del grupo del tablero
  var tablero1=new THREE.Group();
  var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2!==0){
        TEXTURA.malla1=new THREE.Mesh(cubo,material);
        TEXTURA.malla1.position.x=(j+1)*10;//Columnas
        TEXTURA.malla1.position.y=(i+1)*10;//Filas
        TEXTURA.malla1.matrixAutoUpdate=false;
        TEXTURA.malla1.updateMatrix();
        TEXTURA.malla1.receiveShadow=true;
        tablero1.add(TEXTURA.malla1);
      }
      k++;
    }
  k++;
  }
  textura3=true;
  TEXTURA.escena.add(tablero1);    
}

//Ceramica negra
TEXTURA.retrollamadacnegra=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
//Creación del grupo del tablero
  var tablero2=new THREE.Group();
  var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2==0){
        TEXTURA.malla2=new THREE.Mesh(cubo,material);
        TEXTURA.malla2.position.x=(j+1)*10;//Columnas
        TEXTURA.malla2.position.y=(i+1)*10;//Filas
        TEXTURA.malla2.matrixAutoUpdate=false;
        TEXTURA.malla2.updateMatrix();
        TEXTURA.malla2.receiveShadow=true;
        tablero2.add(TEXTURA.malla2);
      }
      k++;
    }
  k++;
  }
  textura4=true;
  TEXTURA.escena.add(tablero2);    
}  

//Madera
TEXTURA.retrollamadamadera=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  //Creación del grupo del borde (Alto)
  var tablero3= new THREE.Group();
  for(var l=0;l<10;l++){//columnas
    for(var m=0;m<2;m++){//filas
    var malla3= new THREE.Mesh(cubo,material);
    if(m==1){
     malla3.position.y=90;
    }
    malla3.position.x=(l*10);
    malla3.matrixAutoUpdate = false;
    malla3.updateMatrix();
    malla3.receiveShadow=true;
    tablero3.add(malla3);
    }
  }
  //Creación del grupo del borde lateral (Ancho)
  var tablero4=new THREE.Group();
  for (var n=1;n<9;n++){//Filas
    for (var o=0;o<2;o++){//Columnas
    var malla4=new THREE.Mesh(cubo,material);
    if (o==1){
      malla4.position.x=90;
    }
    malla4.position.y=(n)*10
    malla4.matrixAutoUpdate = false;
    malla4.updateMatrix();
    malla4.receiveShadow=true;
    tablero4.add(malla4);
    }
  }
  textura5=true;
  TEXTURA.escena.add(tablero3);
  TEXTURA.escena.add(tablero4);
}

TEXTURA.setup=function(){
  //Creación de la escena
  TEXTURA.escena=new THREE.Scene();
  //Cargadores de las texturas
  var cargador1=new THREE.TextureLoader();
  var cargador2=new THREE.TextureLoader();
  var cargador3=new THREE.TextureLoader();
  var cargador4=new THREE.TextureLoader();
  var cargador5=new THREE.TextureLoader();
  //Configuración de las imagenes
  cargador1.load("marmolnegro.jpg",TEXTURA.retrollamadamblanco);
  cargador2.load("marmolblanco.jpg",TEXTURA.retrollamadamnegro);
  cargador3.load("ceramicablanca.jpg",TEXTURA.retrollamadacblanca);
  cargador4.load("ceramicanegra.jpg",TEXTURA.retrollamadacnegra);
  cargador5.load("madera.jpg",TEXTURA.retrollamadamadera);
  //Creación de la cámara
  TEXTURA.camara=new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z=130;
  TEXTURA.camara.position.x=45;
  TEXTURA.camara.position.y=45;
  TEXTURA.escena.rotateX(-Math.PI/6)
  //Creación del lienzo y renderizador
  var lienzo= document.getElementById("Tablero-ajedrez");
  TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  TEXTURA.renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95)
}


TEXTURA.loop=function(){
  requestAnimationFrame(TEXTURA.loop);
  if((textura1==true)&&(textura2==true)&&(textura3==true)&&(textura4==true)&&(textura5==true)){
    if(setupdone==false){
     TEXTURA.setup();
     setupdone=true;
    }
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
  } 
}
TEXTURA.setup();
TEXTURA.loop();
