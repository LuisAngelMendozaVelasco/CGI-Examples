//Defining geometry
var cube = new THREE.BoxGeometry(10, 10, 10); 

//Materials
var ivory = new THREE.MeshBasicMaterial({color: 0xE3DAC9}); 
var brown1 = new THREE.MeshBasicMaterial({color: 0x804000}); 
var brown2 = new THREE.MeshBasicMaterial({color: 0x400000}); 

//Creating chessboard
var chessboard = new THREE.Group(); 
var k = 0; 

for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
        if(k%2 == 0){
            var mesh = new THREE.Mesh(cube, ivory); 
        }
        else{
            var mesh =  new THREE.Mesh(cube, brown1);   
        }
        mesh.position.x = (j+1)*10; //Columns
        mesh.position.y = (i+1)*10; //Rows
        mesh.matrixAutoUpdate = false; 
        mesh.updateMatrix(); 
        chessboard.add(mesh); 
        k++; 
    }
k++; 
}

//Creating chessboard edge
var edge1 = new THREE.Group(); 
for(var l=0; l<10; l++){    //Columns
    for(var m=0; m<2; m++){ //Rows
        var mesh2 = new THREE.Mesh(cube, brown2); 
        if(m == 1){
            mesh2.position.y = 90; 
        }
        mesh2.position.x = (l*10); 
        mesh2.matrixAutoUpdate = false; 
        mesh2.updateMatrix(); 
        edge1.add(mesh2); 
        }
}

var edge2 = new THREE.Group(); 
for (var n=1; n<9; n++){        //Rows
    for (var o=0; o<2; o++){    //Columns
        var mesh3 = new THREE.Mesh(cube, brown2); 
    if (o == 1){
        mesh3.position.x = 90; 
    }
    mesh3.position.y = (n)*10
    mesh3.matrixAutoUpdate = false; 
    mesh3.updateMatrix(); 
    edge2.add(mesh3); 
    }
}

var tower1 = whiteTower_Mesh.clone(); 
tower1.position.x = 10; 
tower1.position.y = 10; 
tower1.position.z = 5; 

var tower2 = whiteTower_Mesh.clone(); 
tower2.position.x = 80; 
tower2.position.y = 10; 
tower2.position.z = 5; 

var tower3 = blackTower_Mesh.clone(); 
tower3.position.x = 10; 
tower3.position.y = 80; 
tower3.position.z = 5; 

var tower4 = blackTower_Mesh.clone(); 
tower4.position.x = 80; 
tower4.position.y = 80; 
tower4.position.z = 5; 

var scene = new THREE.Scene(); 
scene.add(chessboard); 
scene.add(edge1); 
scene.add(edge2); 
scene.add(tower1); 
scene.add(tower2); 
scene.add(tower3); 
scene.add(tower4); 

var camera = new THREE.OrthographicCamera(); 
camera.left = window.innerWidth/-10; 
camera.right = window.innerWidth/10; 
camera.top = window.innerHeight/10; 
camera.bottom = window.innerHeight/-10; 
camera.near = 50; 
camera.far = 400; 
camera.updateProjectionMatrix(); 
camera.position.z = 200; 
camera.position.x = 45; 
camera.position.y = 45; 
scene.rotateX(-Math.PI/4)

var renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth*.95, window.innerHeight*.95); 
document.body.appendChild(renderer.domElement); 
renderer.render(scene, camera); 