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
    
torre1=new THREE.Mesh(torreForma,marmolblanco);
    torre1.position.y=10;
    torre1.position.z=-7;
    torre1.position.x=10;
    torre1.scale.set(0.04,0.04,0.04);
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
                  torre1.translateZ(-10);
                  break;
              case 39 :  //Derecha 
                  torre1.translateX(10);
                  break;
              case 40 :  //Abajo
                  torre1.translateZ(10);
                  break;
          default :alert("Pulsar las flechas del teclado");
          }
    }
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
} 
