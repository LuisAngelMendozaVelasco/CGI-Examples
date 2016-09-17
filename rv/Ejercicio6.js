//Definición de la geometría
var bloque=new THREE.BoxGeometry(10,10,10);
//Materiales
var mw=new THREE.MeshBasicMaterial({color: 0xffffff});
var mb=new THREE.MeshBasicMaterial({color: 0x8A9597});
var mc=new THREE.MeshBasicMaterial({color: 0x083401});
//Creación del grupo del tablero
var g1=new THREE.Group();
var k=0;
for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    if(k%2==0){
      var malla=new THREE.Mesh(bloque,mb);
    }
    else{
      var malla= new THREE.Mesh(bloque,mw);  
    }
    malla.position.x=(j+1)*10;//Columnas
    malla.position.y=(i+1)*10;//Filas
    malla.matrixAutoUpdate=false;
    malla.updateMatrix();
    g1.add(malla);
    k++;
  }
k++;
}
//Creación del grupo del borde (Alto)
var g2= new THREE.Group();
for(var l=0;l<10;l++){//columnas
  for(var m=0;m<2;m++){//filas
  var malla2= new THREE.Mesh(bloque,mc);
  if(m==1){
    malla2.position.y=90;
  }
  malla2.position.x=(l*10);
  malla2.matrixAutoUpdate = false;
  malla2.updateMatrix();
  g2.add(malla2);
  }
}
//Creación del grupo del borde lateral (Ancho)
var g3=new THREE.Group();
for (var n=1;n<9;n++){//Filas
  for (var o=0;o<2;o++){//Columnas
  var malla3=new THREE.Mesh(bloque,mc);
  if (o==1){
    malla3.position.x=90;
  }
  malla3.position.y=(n)*10
  malla3.matrixAutoUpdate = false;
  malla3.updateMatrix();
  g3.add(malla3);
  }
}

//var torre1= torrew.clone();
//torre1.position.x=10;
//torre1.position.y=10;
//torre1.position.z=5;
//var torre2= torrew.clone();
//torre2.position.x=80;
//torre2.position.y=10;
//torre2.position.z=5;
//var torre3= torreb.clone();
//torre3.position.x=10;
//torre3.position.y=80;
//torre3.position.z=5;
//var torre4= torreb.clone();
//torre4.position.x=80;
//torre4.position.y=80;
//torre4.position.z=5;
var escena=new THREE.Scene();
escena.add(g1);
escena.add(g2);
escena.add(g3);
//escena.add(torre1);
//escena.add(torre2);
//escena.add(torre3);
//escena.add(torre4);

var camara=new THREE.PerspectiveCamera();
camara.position.z=130;
camara.position.x=45;
camara.position.y=45;
escena.rotateX(-Math.PI/4)
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
