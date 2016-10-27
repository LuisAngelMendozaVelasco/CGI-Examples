function Agent(x=0, y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
  }
  
Agent.prototype=new THREE.Object3D(); 

Agent.prototype.sense=function(environment){};
Agent.prototype.plan=function(enviroment){};
Agent.prototype.act=function(enviroment){};

function Environment(){
  THREE.Scene.call(this);
  }

Environment.prototype=new THREE.Scene();

Environment.prototype.sense=function(){
  for(var i=0;i<this.children.length;i++){
  if (this.children[i].sense!==undefined)
    this.children[i].sense(this);
  }
}

Environment.prototype.plan=function(){
  for (var i=0;i<this.children.length;i++){
  if(this.children[i].plan!==undefined)
    this.children[i].plan(this)
  }
}

Environment.prototype.act=function(){
  for(var i=0; i<this.children.length;i++){
  if(this.children[i].act!==undefined)
    this.children[i].act(this);
  }
}

function Wall(size,x,y){
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
  }
Wall.prototype=new THREE.Mesh();

Environment.prototype.setMap=function(map){
  var _offset=Math.floor(map.lenght/2);
  for(var i=0;i<map.lenght;i++)
  for(var j=0;j<map.lenght;j++){
    if(map[i][j]==="x")
      this.add(new Wall(1,j-_offset,-(i-_offset)));
    else if(map[i][j]==="r")
    this.add(new Robot(0.5,j-_offset,-(i-_offset)));
   }
   
function setup(){
  var mapa=new Array();
  mapa[0] ="xxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1] ="xr               r      x";
  mapa[2] ="x                       x";
  mapa[3] ="x                       x";
  mapa[4] ="x                       x";
  mapa[5] ="x                       x";
  mapa[6] ="x                       x";
  mapa[7] ="x                       x";
  mapa[8] ="xxxx  xxxxxxxxxxxxxxxxxxx";
  mapa[9] ="x                       x";
  mapa[10]="x     r                 x";
  mapa[11]="x                       x";
  mapa[12]="x                       x";
  mapa[13]="xxxxxxxxxxxxxxx  xxxxxxxx";
  mapa[14]="x                       x";
  mapa[15]="x                       x";
  mapa[16]="x           r           x";
  mapa[17]="x                       x";
  mapa[18]="x                       x";
  mapa[19]="xxxxxxxxxx    xxxxxxxxxxx";
  mapa[20]="x                       x";
  mapa[21]="x                       x";
  mapa[22]="x                       x";
  mapa[23]="x                       x";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment=new Environment();
  environment.setMap(mapa);
  
  camera=new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  
  document.body.appendChild(renderer.domElement);
  environment.add(camera);
 }
 
function loop(){
  requestAnimationframe(loop);
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment,camera);
 }

var environment,camera,renderer;

setup();
loop();
