var camara,escena,renderizador;
var torre1,torre2,torre3,torre4;
var rey1,rey2,rey3;
var peonn1,peonn2,peonn3,peonn4,peonn5,peonn6,peonn7,peonn8;
var peonb1,peonb2,peonb3,peonb4,peonb5,peonb6,peonb7,peonb8;
var malla1,malla2,malla3,grupo1,grupo2,grupo3;

init();
loop();

function init(){
  escena = new THREE.Scene();
  camara = new THREE.PerspectiveCamera();
  camara.position.z=190;
  camara.position.x=45;
  camara.position.y=-40;
  escena.rotateX(Math.PI*0.7);

  //Textura
    var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
    var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');
    var textura3 = new THREE.TextureLoader().load('ceramicablanca.jpg');
    var textura4 = new THREE.TextureLoader().load('ceramicanegra.jpg');
    var textura5 = new THREE.TextureLoader().load('madera.jpg');
    
    var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
    var marmolnegro = new THREE.MeshBasicMaterial({map:textura2});
    var ceramicablanca = new THREE.MeshBasicMaterial({map:textura3});
    var ceramicanegra = new THREE.MeshBasicMaterial({map:textura4});  
    var madera = new THREE.MeshBasicMaterial({map:textura5});
    
  //Torre
var torre1=[];

torre1.push(new THREE.Vector2(120,-50));
torre1.push(new THREE.Vector2(120,-30));
torre1.push(new THREE.Vector2(100,-30));
torre1.push(new THREE.Vector2(100,-10));
torre1.push(new THREE.Vector2(70,10));
torre1.push(new THREE.Vector2(70,200));
torre1.push(new THREE.Vector2(90,220));

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
forma2.translate(0,263,0);
forma2_1.rotateX(90*Math.PI/180)
forma2_1.translate(0,263,0);
forma2_2.rotateX(90*Math.PI/180)
forma2_2.translate(0,263,0);
forma2_3.rotateX(90*Math.PI/180)
forma2_3.translate(0,263,0);
forma3.translate(0,218,0);

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

torre1=new THREE.Mesh(torreForma,marmolblanco);
    torre1.position.y=80;
    torre1.position.z=-5;
    torre1.position.x=10;
    torre1.scale.set(0.05,0.05,0.05);
    torre1.rotateX(-Math.PI/2);

//Tablero
 var cubo=new THREE.BoxGeometry(10,10,10);
 grupo1=new THREE.Group();
 grupo2=new THREE.Group();
   var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2!==0){
        malla1=new THREE.Mesh(cubo,ceramicablanca);
        malla1.position.x=(j+1)*10;//Columnas
        malla1.position.y=(i+1)*10;//Filas
        malla1.matrixAutoUpdate=false;
        malla1.updateMatrix();
        malla1.receiveShadow=true;
        grupo1.add(malla1);
      }
      k++;
    }
  k++;
  }
  
  var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2==0){
        malla2=new THREE.Mesh(cubo,ceramicanegra);
        malla2.position.x=(j+1)*10;//Columnas
        malla2.position.y=(i+1)*10;//Filas
        malla2.matrixAutoUpdate=false;
        malla2.updateMatrix();
        malla2.receiveShadow=true;
        grupo2.add(malla2);
      }
      k++;
    }
  k++;
  }

  grupo3=new THREE.Group();
  grupo4=new THREE.Group();
    for(var l=0;l<10;l++){//columnas
    for(var m=0;m<2;m++){//filas
    var malla3= new THREE.Mesh(cubo,madera);
    if(m==1){
     malla3.position.y=90;
    }
    malla3.position.x=(l*10);
    malla3.matrixAutoUpdate = false;
    malla3.updateMatrix();
    malla3.receiveShadow=true;
    grupo3.add(malla3);
    }
  }
  
    for (var n=1;n<9;n++){//Filas
    for (var o=0;o<2;o++){//Columnas
    var malla4=new THREE.Mesh(cubo,madera);
    if (o==1){
      malla4.position.x=90;
    }
    malla4.position.y=(n)*10
    malla4.matrixAutoUpdate = false;
    malla4.updateMatrix();
    malla4.receiveShadow=true;
    grupo4.add(malla4);
    }
  }
  
  escena.add(torre1,grupo1,grupo2,grupo3,grupo4);
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
  }
  
function loop() {
    window.onload=function(){document.onkeydown=desplazar};
    function desplazar(pieza)
    {
      var tecla = pieza.which;
          switch (tecla)
          {
              case 37 : //Izquierda
                  torre1.translateX(-10);
                  break;
              case 38 :  //Arriba
                  torre1.translateY(-10);
                  break;
              case 39 :  //Derecha 
                  torre1.translateX(10);
                  break;
              case 40 :  //Abajo
                  torre1.translateY(10);
                  break;
          default :alert("Pulsar las flechas del teclado");
          }
    }
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
} 
