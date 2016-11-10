var camara,escena,renderizador;
var torre1,torre2,torre3,torre4;
var peonn1,peonn2,peonn3,peonn4,peonn5,peonn6,peonn7,peonn8;
var peonb1,peonb2,peonb3,peonb4,peonb5,peonb6,peonb7,peonb8;
var malla1,malla2,malla3;

var prototipo = new Object();
  escena = new THREE.Scene();
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=45;
  camara.position.y=45;
  escena.rotateX(-Math.PI/4)

prototipo.TorreGeometry= function() {
  THREE.Geometry.call(this);

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
}
/////////////////////////////////////////////////////////////////////////////
var cubo=new THREE.BoxGeometry(10,10,10);

prototipo.TableroGeometry = function(){
  THREE.Group.call(this);
    var textura3 = new THREE.TextureLoader().load('ceramicablanca.jpg');
    var textura4 = new THREE.TextureLoader().load('ceramicanegra.jpg');

    var ceramicablanca = new THREE.MeshBasicMaterial({map:textura3});
    var ceramicanegra = new THREE.MeshBasicMaterial({map:textura4});
    
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
        this.add(malla1);
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
        this.add(malla2);
      }
      k++;
    }
  k++;
  }
}

prototipo.TableroGeometry1 = function(){
  THREE.Group.call(this);
  var textura5 = new THREE.TextureLoader().load('madera.jpg');
  var madera = new THREE.MeshBasicMaterial({map:textura5});
  
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
    this.add(malla3);
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
    this.add(malla4);
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////
prototipo.PeonGeometry = function(){
  THREE.Group.call(this);
  //Geometrias
  var basepeon = new THREE.CylinderGeometry(5,5,2,20);//Altura = 2
  var basepeon2= new THREE.TorusGeometry(3,1.5,20,100);//Altura = 4
  basepeon2.rotateX(Math.PI/2);
  basepeon2.translate(0,1,0);
  var columna = new THREE.CylinderGeometry(3.5,3.5,8,10);
  columna.translate(0,6,0);
  var techopeon= new THREE.CylinderGeometry(4,4,1,20);//Altura = 9
  techopeon.translate(0,10,0);
  var techopeon2=new THREE.SphereGeometry(3.5,20,20);
  techopeon2.translate(0,12,0);
  //Mesh
  var mbasepeon = new THREE.Mesh(basepeon);
  var mbasepeon2= new THREE.Mesh(basepeon2);
  var mcolumna = new THREE.Mesh(columna);
  var mtechopeon= new THREE.Mesh(techopeon);
  var mtechopeon2=new THREE.Mesh(techopeon2);

  //Acoplamiento
  var peonfinal = new THREE.Geometry();
  peonfinal.merge(mbasepeon.geometry,mbasepeon.matrix);
  peonfinal.merge(mbasepeon2.geometry,mbasepeon2.matrix);
  var mpeonfinal = new THREE.Mesh(peonfinal);

  var peonfinal2 = new THREE.Geometry();
  peonfinal2.merge(mcolumna.geometry,mcolumna.matrix);
  peonfinal2.merge(mpeonfinal.geometry,mpeonfinal.matrix);
  var mpeonfinal2= new THREE.Mesh(peonfinal2);

  var peonfinal3 = new THREE.Geometry();
  peonfinal3.merge(mtechopeon.geometry,mtechopeon.matrix);
  peonfinal3.merge(mpeonfinal2.geometry,mpeonfinal2.matrix);
  var mpeonfinal3= new THREE.Mesh(peonfinal3);

  this.merge(mtechopeon2.geometry,mtechopeon2.matrix);
  this.merge(mpeonfinal3.geometry,mpeonfinal3.matrix);
}
prototipo.PeonGeometry.prototype = new THREE.Geometry();
prototipo.TableroGeometry.prototype = new THREE.Group();
prototipo.TableroGeometry1.prototype = new THREE.Group();
prototipo.TorreGeometry.prototype = new THREE.Geometry();

prototipo.setup = function(){
  //Textura
    var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
    var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');

    var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
    var marmolnegro = new THREE.MeshBasicMaterial({map:textura2});
  //Figuras
    torre1 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolblanco);
    torre1.position.y=10;
    torre1.position.z=5;
    torre1.position.x=10;
    torre1.scale.set(0.05,0.05,0.05);
    torre1.rotateX(Math.PI/2);
  //Torre2
    torre2 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolblanco);
    torre2.position.y=10;
    torre2.position.z=5;
    torre2.position.x=80;
    torre2.scale.set(0.05,0.05,0.05);
    torre2.rotateX(Math.PI/2);
  //Torre3
    torre3 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolnegro);
    torre3.position.y=80;
    torre3.position.z=5;
    torre3.position.x=10;
    torre3.scale.set(0.05,0.05,0.05);
    torre3.rotateX(Math.PI/2);
  //Torre4
    torre4 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolnegro);
    torre4.position.y=80;
    torre4.position.z=5;
    torre4.position.x=80;
    torre4.scale.set(0.05,0.05,0.05);
    torre4.rotateX(Math.PI/2);
  //Peonnegro1
    peonn1 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn1.position.y=5;
    peonn1.position.z=-10;
    peonn1.position.x=70;
  //Peonnegro2
    peonn2 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn2.position.y=5;
    peonn2.position.z=-20;
    peonn2.position.x=70;
  //Peonnegro3
    peonn3 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn3.position.y=5;
    peonn3.position.z=-30;
    peonn3.position.x=70;
  //Peonnegro4
    peonn4 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn4.position.y=5;
    peonn4.position.z=-40;
    peonn4.position.x=70;
  //Peonnegro5
    peonn5 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn5.position.y=5;
    peonn5.position.z=-50;
    peonn5.position.x=70;
  //Peonnegro6
    peonn6 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn6.position.y=5;
    peonn6.position.z=-60;
    peonn6.position.x=70;
  //Peonnegro7
    peonn7 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn7.position.y=5;
    peonn7.position.z=-70;
    peonn7.position.x=70;
  //Peonnegro8
    peonn8 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn8.position.y=5;
    peonn8.position.z=-80;
    peonn8.position.x=70;  
  //Peonblanco1
    peonb1 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb1.position.y=5;
    peonb1.position.z=-10;
    peonb1.position.x=20;
  //Peonblanco2
    peonb2 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb2.position.y=5;
    peonb2.position.z=-20;
    peonb2.position.x=20;
  //Peonblanco3
    peonb3 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb3.position.y=5;
    peonb3.position.z=-30;
    peonb3.position.x=20;
  //Peonblanco4
    peonb4 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb4.position.y=5;
    peonb4.position.z=-40;
    peonb4.position.x=20;
  //Peonblanco5
    peonb5 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb5.position.y=5;
    peonb5.position.z=-50;
    peonb5.position.x=20;
  //Peonblanco6
    peonb6 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb6.position.y=5;
    peonb6.position.z=-60;
    peonb6.position.x=20;
  //Peonblanco7
    peonb7 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb7.position.y=5;
    peonb7.position.z=-70;
    peonb7.position.x=20;
  //Peonblanco8
    peonb8 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb8.position.y=5;
    peonb8.position.z=-80;
    peonb8.position.x=20;  
  escena.add(torre1,torre2,torre3,torre4);
  escena.add(new prototipo.TableroGeometry(),new prototipo.TableroGeometry1());
  escena.add(peonn1,peonn2,peonn3,peonn4,peonn5,peonn6,peonn7,peonn8);
  escena.add(peonb1,peonb2,peonb3,peonb4,peonb5,peonb6,peonb7,peonb8);
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
}

prototipo.loop = function(){
  requestAnimationFrame(prototipo.loop);
  renderizador.render(escena,camara);
}

prototipo.setup();
prototipo.loop();
