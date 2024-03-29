/////////// Agent ///////////
function Agent(x=0, y=0){
    THREE.Object3D.call(this); 
    this.position.x = x; 
    this.position.y = y; 
}
  
//The prototype of an agent for our case in an Object3D
Agent.prototype = new THREE.Object3D();  

//The three essential primitives of an agent are: sense,  plan and act
Agent.prototype.sense = function(environment){}; 
Agent.prototype.plan = function(enviroment){}; 
Agent.prototype.act = function(enviroment){}; 

/////////// Environment ///////////
//An agent operates on an environment,  which is defined by the Environment() constructor.
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

function Sensor(position, direction){
    THREE.Raycaster.call(this, position, direction); 
    this.collision = false; 
}

Sensor.prototype = new THREE.Raycaster(); 

function Robot(size, x, y){
    Agent.call(this, x, y); 
    this.sensor = new Sensor(); 
    this.actuator = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshBasicMaterial({color: '#aa0000'})); 
    this.actuator.commands = []; 
    this.add(this.actuator); 
}

Robot.prototype = new Agent(); 

Robot.prototype.sense = function(environment){
    this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z), Math.sin(this.rotation.z), 0)); 
    var obstacle = this.sensor.intersectObjects(environment.children, true); 

    if((obstacle.length>0 && (obstacle[0].distance <= .5)))
        this.sensor.collision = true; 
    else
        this.sensor.collision = false; 
}

Robot.prototype.plan = function(environment){
    this.actuator.commands = []; 
    if(this.sensor.collision == true)
        this.actuator.commands.push('rotateCCW'); 
    else
        this.actuator.commands.push('goStraight'); 
}

Robot.prototype.act = function(environment){
    var command = this.actuator.commands.pop(); 
    if(command === undefined)
        console.log('Undefined command'); 
    else if(command in this.operations)
        this.operations[command](this); 
    else
        console.log('Unknow Command'); 
}

//The possible operations are goStraight(),  rotateCW(),  rotateCCW()
Robot.prototype.operations = {}; 

Robot.prototype.operations.goStraight = function(robot, distance){
    if(distance === undefined)
        distance = 0.05; 
        robot.position.x += distance*Math.cos(robot.rotation.z); 
        robot.position.y += distance*Math.sin(robot.rotation.z); 
}

Robot.prototype.operations.rotateCW = function(robot, angle){
    if(angle === undefined)
        angle = -Math.PI/2; 
        robot.rotation.z += angle; 
}

Robot.prototype.operations.rotateCCW = function(robot, angle){
    if(angle === undefined)
        angle = Math.PI/2; 
        robot.rotation.z += angle; 
}

function Wall(size, x, y){
    THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial()); 
    this.size = size; 
    this.position.x = x; 
    this.position.y = y; 
}

Wall.prototype = new THREE.Mesh(); 
Environment.prototype.setMap = function(map){
    var _offset = Math.floor(map.length/2); 
    for(var i = 0; i<map.length; i++){
        for(var j = 0; j<map.length; j++){
            if (map[i][j] === "x")
                this.add(new Wall(1, j-_offset, -(i-_offset))); 
            else if (map[i][j] === "r")
                this.add(new Robot(0.5, j-_offset, -(i-_offset))); 
        }
    }
}

function setup(){
    var mapa = new Array(); 

    mapa[0] =   "xxxxxxxxxxxxxxxxxxxxxxxxx"; 
    mapa[1] =   "xr               r      x"; 
    mapa[2] =   "x                       x"; 
    mapa[3] =   "x                       x"; 
    mapa[4] =   "x                       x"; 
    mapa[5] =   "x                       x"; 
    mapa[6] =   "x                       x"; 
    mapa[7] =   "x                       x"; 
    mapa[8] =   "xxxx   xxxxxxxxxxxxxxxxxx"; 
    mapa[9] =   "x         r             x"; 
    mapa[10] =  "x                       x"; 
    mapa[11] =  "x                       x"; 
    mapa[12] =  "x      r                x"; 
    mapa[13] =  "x                       x"; 
    mapa[14] =  "xxxxxxxxxxxxxxxxx    xxxx"; 
    mapa[15] =  "x                       x"; 
    mapa[16] =  "x     r                 x"; 
    mapa[17] =  "x                       x"; 
    mapa[18] =  "x                       x"; 
    mapa[19] =  "x                       x"; 
    mapa[20] =  "x xxxx                  x"; 
    mapa[21] =  "x    r                  x"; 
    mapa[22] =  "x                       x"; 
    mapa[23] =  "x     r                 x"; 
    mapa[24] =  "xxxxxxxxxxxxxxxxxxxxxxxxx"; 

    environment = new Environment(); 
    environment.setMap(mapa); 
    camera = new THREE.PerspectiveCamera(); 
    camera.position.z = 30; 
    renderer = new THREE.WebGLRenderer(); 
    renderer.setSize(window.innerHeight*.95, window.innerHeight*.95)
    document.body.appendChild(renderer.domElement); 
    environment.add(camera); 
}

function loop(){
    requestAnimationFrame(loop); 
    environment.sense(); 
    environment.plan(); 
    environment.act(); 
    renderer.render(environment, camera); 
}

var environment, camera, renderer; 
setup(); 
loop(); 