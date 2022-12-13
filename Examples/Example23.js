/////////// Agent ///////////
function Agent(x=0, y=0){
    THREE.Object3D.call(this); 
    this.position.x = x; 
    this.position.y = y; 
}
  
//The prototype of an agent for our case in an Object3D
Agent.prototype = new THREE.Object3D();

//The three essential primitives of an agent are: sense, plan and act
Agent.prototype.sense = function(environment){}; 
Agent.prototype.plan = function(enviroment){}; 
Agent.prototype.act = function(enviroment){}; 

/////////// Environment ///////////
//An agent operates on an environment, which is defined by the Environment() constructor.
function Environment(){
    THREE.Scene.call(this); 
}

//The prototype of an environment for our case in a Scene
Environment.prototype = new THREE.Scene(); 

//The interface between the environment and the agents will be given by the following methods:
//this.children is the array where the objects are placed within the scene
Environment.prototype.sense = function(){
    for(var i=0; i<this.children.length; i++){
    if(this.children[i].sense !== undefined)
        this.children[i].sense(this); 
    }
}

Environment.prototype.plan = function(){
    for(var i=0; i<this.children.length; i++){
    if(this.children[i].plan !== undefined)
        this.children[i].plan(this)
    }
}

Environment.prototype.act = function(){
    for(var i=0; i<this.children.length; i++){
    if(this.children[i].act !== undefined)
        this.children[i].act(this); 
    }
}

/////////// Ball ///////////
function Ball(r, x=0, y=0){
    Agent.call(this, x, y); 
    this.add(new THREE.Mesh(new THREE.SphereGeometry(r), new THREE.MeshNormalMaterial()))
    this.step = 0.1; 
    this.colision = 0; 
    this.radius = r; 
    //Raycaster is a line that allows to detect the face of an object. Depending on the direction the Raycaster changes as well.
    this.sensor = new THREE.Raycaster(this.position, new THREE.Vector3(1, 0, 0)); 
}

//The prototype of a ball is an agent
Ball.prototype = new Agent()

Ball.prototype.sense = function(environment){
    this.sensor.set(this.position, new THREE.Vector3(1, 0, 0)); 
    var obstacle1 = this.sensor.intersectObjects(environment.children, true); 
    
    this.sensor.set(this.position, new THREE.Vector3(-1, 0, 0)); 
    var obstacle2 = this.sensor.intersectObjects(environment.children, true); 
    
    if((obstacle1.length>0 && (obstacle1[0].distance <= this.radius))||(obstacle2.length>0 && (obstacle2[0].distance <= this.radius)))
        this.colision = 1; 
    else
        this.colision = 0; 
}

Ball.prototype.act = function(environment){
    if(this.colision == 1)
        this.step = -this.step; 
    this.position.x += this.step; 
}

/////////// Wall ///////////
//The walls that the ball bounces off are not agents, so they can simply be of type Object3D
function Wall(size, x=0, y=0){
    THREE.Object3D.call(this, x, y); 
    this.add(new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial())); 
    this.size = size; 
    this.position.x = x; 
    this.position.y = y; 
}

Wall.prototype = new THREE.Object3D(); 

function setup(){
    environment = new Environment(); 
    camera = new THREE.PerspectiveCamera(); 
    camera.position.z = 30; 
    environment.add(new Wall(1, 7, 0)); 
    environment.add(new Wall(1, -7, 0)); 
    environment.add(new Wall(1, 7, 1)); 
    environment.add(new Wall(1, -7, 1)); 
    environment.add(new Wall(1, 7, -1)); 
    environment.add(new Wall(1, -7, -1)); 
    environment.add(new Ball(0.5)); 
    environment.add(new Ball(0.9, 2, 0)); 
    environment.add(camera); 
    renderer = new THREE.WebGLRenderer(); 
    renderer.setSize(window.innerHeight*.95, window.innerHeight*.95); 
    document.body.appendChild(renderer.domElement); 
}

function loop(){
    requestAnimationFrame(loop); 
    environment.sense(); 
    environment.plan(); 
    environment.act(); 
    renderer.render(environment, camera); 
}
 
setup(); 
loop(); 