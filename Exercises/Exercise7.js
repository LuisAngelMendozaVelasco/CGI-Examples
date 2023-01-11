//Defining geometry
var cube = new THREE.BoxGeometry(10, 10, 10); 

//Materials
var ivory = new THREE.MeshLambertMaterial({color: 0xE3DAC9}); 
var brown1 = new THREE.MeshLambertMaterial({color: 0x804000}); 
var brown2 = new THREE.MeshLambertMaterial({color: 0x400000}); 

//Creating chessboard
var chessboard = new THREE.Group(); 
var k = 0; 
for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
        if(k%2 == 0){
            var mesh = new THREE.Mesh(cube, ivory); 
        }
        else{
            var mesh = new THREE.Mesh(cube, brown1);   
        }
        mesh.position.x = (j+1)*10;     //Columns
        mesh.position.y = (i+1)*10;     //Rows
        mesh.matrixAutoUpdate = false; 
        mesh.updateMatrix(); 
        mesh.receiveShadow = true; 
        chessboard.add(mesh); 
        k++; 
    }
k++; 
}

//Creating chessboard edges
var edge1 = new THREE.Group(); 
for(var l=0; l<10; l++){//columnas
    for(var m=0; m<2; m++){//filas
        var mesh2 = new THREE.Mesh(cube, brown2); 
    if(m == 1){
        mesh2.position.y = 90; 
    }
    mesh2.position.x = (l*10); 
    mesh2.matrixAutoUpdate  =  false; 
    mesh2.updateMatrix(); 
    mesh2.receiveShadow = true; 
    edge1.add(mesh2); 
    }
}

var edge2 = new THREE.Group(); 
for(var n=1; n<9; n++){//Filas
    for(var o=0; o<2; o++){//Columnas
        var mesh3 = new THREE.Mesh(cube, brown2); 
    if(o == 1){
        mesh3.position.x = 90; 
    }
    mesh3.position.y = (n)*10
    mesh3.matrixAutoUpdate  =  false; 
    mesh3.updateMatrix(); 
    mesh3.receiveShadow = true; 
    edge2.add(mesh3); 
    }
}

////////////////////////////////////////////////////
// Create chess pieces
////////////////////////////////////////////////////
var tower1 = []; 
tower1.push(new THREE.Vector2(120, -50)); 
tower1.push(new THREE.Vector2(120, -30)); 
tower1.push(new THREE.Vector2(100, -30)); 
tower1.push(new THREE.Vector2(100, -10)); 
tower1.push(new THREE.Vector2(70, 10)); 
tower1.push(new THREE.Vector2(70, 100)); 
tower1.push(new THREE.Vector2(90, 120)); 

var tower2 = new THREE.Shape(); 
tower2.moveTo(-30, 84.85); 
tower2.lineTo(-30, 57.43); 
tower2.lineTo(-57.43, 30); 
tower2.lineTo(-84.85, 30); 
tower2.lineTo(-63.64, 63.64); 
tower2.lineTo(-30, 84.85); 

var tower2_1 = new THREE.Shape(); 
tower2_1.moveTo(-30, -84.85); 
tower2_1.lineTo(-30, -57.43); 
tower2_1.lineTo(-57.43, -30); 
tower2_1.lineTo(-84.85, -30); 
tower2_1.lineTo(-63.64, -63.64); 
tower2_1.lineTo(-30, -84.85); 

var tower2_2 = new THREE.Shape(); 
tower2_2.moveTo(30, -84.85); 
tower2_2.lineTo(30, -57.43); 
tower2_2.lineTo(57.43, -30); 
tower2_2.lineTo(84.85, -30); 
tower2_2.lineTo(63.64, -63.64); 
tower2_2.lineTo(30, -84.85); 

var tower2_3 = new THREE.Shape(); 
tower2_3.moveTo(30, 84.85); 
tower2_3.lineTo(30, 57.43); 
tower2_3.lineTo(57.43, 30); 
tower2_3.lineTo(84.85, 30); 
tower2_3.lineTo(63.64, 63.64); 
tower2_3.lineTo(30, 84.85); 

var tower3 = new THREE.CylinderGeometry(90, 90, 5, 32); 

var form1 = new THREE.LatheGeometry(tower1); 
var form2 = new THREE.ExtrudeGeometry(tower2, {amount:40}); 
var form2_1 = new THREE.ExtrudeGeometry(tower2_1, {amount:40}); 
var form2_2 = new THREE.ExtrudeGeometry(tower2_2, {amount:40}); 
var form2_3 = new THREE.ExtrudeGeometry(tower2_3, {amount:40}); 
var form3 = tower3; 

form2.rotateX(90*Math.PI/180)
form2.translate(0, 163, 0); 
form2_1.rotateX(90*Math.PI/180)
form2_1.translate(0, 163, 0); 
form2_2.rotateX(90*Math.PI/180)
form2_2.translate(0, 163, 0); 
form2_3.rotateX(90*Math.PI/180)
form2_3.translate(0, 163, 0); 
form3.translate(0, 118, 0); 

var tower1_mesh = new THREE.Mesh(form1); 
var tower2_mesh = new THREE.Mesh(form2); 
var tower2_1_mesh = new THREE.Mesh(form2_1); 
var tower2_2_mesh = new THREE.Mesh(form2_2); 
var tower2_3_mesh = new THREE.Mesh(form2_3); 
var tower3_mesh = new THREE.Mesh(form3); 

var tower_form = new THREE.Geometry(); 

tower_form.merge(tower1_mesh.geometry, tower1_mesh.matrix); 
tower_form.merge(tower2_mesh.geometry, tower2_mesh.matrix); 
tower_form.merge(tower2_1_mesh.geometry, tower2_1_mesh.matrix); 
tower_form.merge(tower2_2_mesh.geometry, tower2_2_mesh.matrix); 
tower_form.merge(tower2_3_mesh.geometry, tower2_3_mesh.matrix); 
tower_form.merge(tower3_mesh.geometry, tower3_mesh.matrix); 

var white_material1 = new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 1}); 
var white_material2 = new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 0.75}); 
var white_tower_mesh1 = new THREE.Mesh(tower_form, white_material1); 
var white_tower_mesh2 = new THREE.Mesh(tower_form, white_material2); 

var black_material1 = new THREE.MeshLambertMaterial({color: 0x000000, transparent: true, opacity: 0.5}); 
var black_material2 = new THREE.MeshLambertMaterial({color: 0x000000, transparent: true, opacity: 0.25}); 
var black_tower_mesh1 = new THREE.Mesh(tower_form, black_material1); 
var black_tower_mesh2 = new THREE.Mesh(tower_form, black_material2); 

white_tower_mesh1.rotateX(Math.PI/2); 
white_tower_mesh2.rotateX(Math.PI/2); 
black_tower_mesh1.rotateX(Math.PI/2); 
black_tower_mesh2.rotateX(Math.PI/2); 
white_tower_mesh1.scale.set(0.05, 0.05, 0.05)
white_tower_mesh2.scale.set(0.05, 0.05, 0.05)
black_tower_mesh1.scale.set(0.05, 0.05, 0.05)
black_tower_mesh2.scale.set(0.05, 0.05, 0.05)

white_tower_mesh1.position.x = 10; 
white_tower_mesh1.position.y = 10; 
white_tower_mesh1.position.z = 5; 

white_tower_mesh2.position.x = 80; 
white_tower_mesh2.position.y = 10; 
white_tower_mesh2.position.z = 5; 

black_tower_mesh1.position.x = 10; 
black_tower_mesh1.position.y = 80; 
black_tower_mesh1.position.z = 5; 

black_tower_mesh2.position.x = 80; 
black_tower_mesh2.position.y = 80; 
black_tower_mesh2.position.z = 5; 

//Create lights in the scene
var spotlight = new THREE.PointLight(0xFFFF00);    //Yellow
var spotlight1 = new THREE.PointLight(0xFF00FF);   //Pink
var spotlight2 = new THREE.PointLight(0x00FFFF);   //Cyan

//Lights position
spotlight.position.x = 10; 
spotlight.position.y = 90; 
spotlight.position.z = 60; 
spotlight1.position.x = 80; 
spotlight1.position.y = 90; 
spotlight1.position.z = 60; 
spotlight2.position.x = 100; 
spotlight2.position.y = 10; 
spotlight2.position.z = 60; 

var scene = new THREE.Scene(); 
scene.add(chessboard); 
scene.add(edge1); 
scene.add(edge2); 
scene.add(white_tower_mesh1); 
scene.add(white_tower_mesh2); 
scene.add(black_tower_mesh1); 
scene.add(black_tower_mesh2); 
scene.add(spotlight); 
scene.add(spotlight1); 
scene.add(spotlight2); 

var camera = new THREE.PerspectiveCamera(); 
camera.position.z = 130; 
camera.position.x = 45; 
camera.position.y = 45; 
scene.rotateX(-Math.PI/4)

var renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95); 
document.body.appendChild(renderer.domElement); 
renderer.shadowMap.enabled = true; 
white_tower_mesh1.castShadow = true; 
white_tower_mesh2.castShadow = true; 
black_tower_mesh1.castShadow = true; 
black_tower_mesh2.castShadow = true; 
spotlight.castShadow = true; 
spotlight1.castShadow = true; 
spotlight2.castShadow = true; 
renderer.render(scene, camera); 