var setupdone = false; 
var texture1 = false; 
var texture2 = false; 
var texture3 = false; 
var texture4 = false; 
var texture5 = false; 

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

var tower1_Mesh = new THREE.Mesh(form1); 
var tower2_Mesh = new THREE.Mesh(form2); 
var tower2_1_Mesh = new THREE.Mesh(form2_1); 
var tower2_2_Mesh = new THREE.Mesh(form2_2); 
var tower2_3_Mesh = new THREE.Mesh(form2_3); 
var tower3_Mesh = new THREE.Mesh(form3); 

var towerForm = new THREE.Geometry(); 

towerForm.merge(tower1_Mesh.geometry, tower1_Mesh.matrix); 
towerForm.merge(tower2_Mesh.geometry, tower2_Mesh.matrix); 
towerForm.merge(tower2_1_Mesh.geometry, tower2_1_Mesh.matrix); 
towerForm.merge(tower2_2_Mesh.geometry, tower2_2_Mesh.matrix); 
towerForm.merge(tower2_3_Mesh.geometry, tower2_3_Mesh.matrix); 
towerForm.merge(tower3_Mesh.geometry, tower3_Mesh.matrix); 

//Object declaration
var texture = new Object(); 

//Callback declaration
//White marble texture
texture.white_marble_callback = function(texture_){
    var material = new THREE.MeshBasicMaterial({map:texture_}); 
    
    texture.ftower1 = new THREE.Mesh(towerForm, material); 
    texture.ftower1.position.x = 10; 
    texture.ftower1.position.y = 10; 
    texture.ftower1.position.z = 5; 
    texture.ftower1.scale.set(0.05, 0.05, 0.05)
    texture.ftower1.rotateX(Math.PI/2); 
    texture.scene.add(texture.ftower1); 
    
    texture.ftower2 = new THREE.Mesh(towerForm, material); 
    texture.ftower2.position.x = 80; 
    texture.ftower2.position.y = 10; 
    texture.ftower2.position.z = 5; 
    texture.ftower2.scale.set(0.05, 0.05, 0.05)
    texture.ftower2.rotateX(Math.PI/2); 
    texture.scene.add(texture.ftower2); 
    
    texture1 = true; 
}

//Black marble texture
texture.black_marble_callback = function(texture_){
    var material = new THREE.MeshBasicMaterial({map:texture_}); 
    
    texture.ftower3 = new THREE.Mesh(towerForm, material); 
    texture.ftower3.position.x = 10; 
    texture.ftower3.position.y = 80; 
    texture.ftower3.position.z = 5; 
    texture.ftower3.scale.set(0.05, 0.05, 0.05)
    texture.ftower3.rotateX(Math.PI/2); 
    texture.scene.add(texture.ftower3); 
    
    texture.ftower4 = new THREE.Mesh(towerForm, material); 
    texture.ftower4.position.x = 80; 
    texture.ftower4.position.y = 80; 
    texture.ftower4.position.z = 5; 
    texture.ftower4.scale.set(0.05, 0.05, 0.05)
    texture.ftower4.rotateX(Math.PI/2); 
    texture.scene.add(texture.ftower4); 
    
    texture2 = true; 
}

//Define geometry
var cube = new THREE.BoxGeometry(10, 10, 10); 

//White ceramic
texture.white_ceramic_callback = function(texture_){
    var material = new THREE.MeshBasicMaterial({map:texture_}); 
    //Create chessboard group
    var chessboard1 = new THREE.Group(); 
    var k = 0; 
    for (var i=0; i<8; i++){
        for(var j = 0; j<8; j++){
            if(k%2 !== 0){
                texture.mesh1 = new THREE.Mesh(cube, material); 
                texture.mesh1.position.x = (j+1)*10;    //Columns
                texture.mesh1.position.y = (i+1)*10;    //Rows
                texture.mesh1.matrixAutoUpdate = false; 
                texture.mesh1.updateMatrix(); 
                texture.mesh1.receiveShadow = true; 
                chessboard1.add(texture.mesh1); 
            }
            k++;    
        }
        k++; 
    }
    texture3 = true; 
    texture.scene.add(chessboard1);     
}

//Black ceramic
texture.black_ceramic_callback = function(texture_){
    var material = new THREE.MeshBasicMaterial({map:texture_}); 
    //Creación del grupo del chessboard
    var chessboard2 = new THREE.Group(); 
    var k = 0; 
    for (var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(k%2 == 0){
                texture.mesh2 = new THREE.Mesh(cube, material); 
                texture.mesh2.position.x = (j+1)*10;    //Columns
                texture.mesh2.position.y = (i+1)*10;    //Rows
                texture.mesh2.matrixAutoUpdate = false; 
                texture.mesh2.updateMatrix(); 
                texture.mesh2.receiveShadow = true; 
                chessboard2.add(texture.mesh2); 
            }
            k++; 
        }
        k++; 
    }
    texture4 = true; 
    texture.scene.add(chessboard2);     
}  

//Wood
texture.wood_callback = function(texture_){
    var material = new THREE.MeshBasicMaterial({map:texture_}); 
    //Create edge1 group
    var chessboard3 =  new THREE.Group(); 
    for(var l=0; l<10; l++){    //columnas
        for(var m=0; m<2; m++){//filas
            var mesh3 = new THREE.Mesh(cube, material); 
            if(m == 1){
                mesh3.position.y = 90; 
            }
            mesh3.position.x = (l*10); 
            mesh3.matrixAutoUpdate  =  false; 
            mesh3.updateMatrix(); 
            mesh3.receiveShadow = true; 
            chessboard3.add(mesh3); 
        }
    }
    //Create edge2 group
    var chessboard4 = new THREE.Group(); 
    for (var n=1; n<9; n++){        //Rows
        for (var o=0; o<2; o++){    //Columns
            var mesh4 = new THREE.Mesh(cube, material); 
            if (o == 1){
                mesh4.position.x = 90; 
            }
            mesh4.position.y = (n)*10
            mesh4.matrixAutoUpdate = false; 
            mesh4.updateMatrix(); 
            mesh4.receiveShadow = true; 
            chessboard4.add(mesh4); 
        }
    }
    texture5 = true; 
    texture.scene.add(chessboard3); 
    texture.scene.add(chessboard4); 
}

texture.setup = function(){
    //Create scene
    texture.scene = new THREE.Scene(); 
    //Texture loaders
    var loader1 = new THREE.TextureLoader(); 
    var loader2 = new THREE.TextureLoader(); 
    var loader3 = new THREE.TextureLoader(); 
    var loader4 = new THREE.TextureLoader(); 
    var loader5 = new THREE.TextureLoader(); 
    //Configure images
    loader1.load("../images/white_marble.jpg", texture.white_marble_callback); 
    loader2.load("../images/black_marble.jpg", texture.black_marble_callback); 
    loader3.load("../images/white_ceramic.jpg", texture.white_ceramic_callback); 
    loader4.load("../images/black_ceramic.jpg", texture.black_ceramic_callback); 
    loader5.load("../images/wood.jpg", texture.wood_callback); 
    //Create camera
    texture.camara = new THREE.PerspectiveCamera(); 
    texture.camara.position.z = 130; 
    texture.camara.position.x = 45; 
    texture.camara.position.y = 45; 
    texture.scene.rotateX(-Math.PI/4)
    //Create canvas and renderer
    var canvas = document.getElementById("Chessboard"); 
    texture.renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true}); 
    texture.renderer.setSize(window.innerHeight*.95, window.innerHeight*.95)
}

texture.loop = function(){
    requestAnimationFrame(texture.loop); 
    if((texture1 == true)&&(texture2 == true)&&(texture3 == true)&&(texture4 == true)&&(texture5 == true)){
        if(setupdone == false){
            texture.setup(); 
            setupdone = true; 
        }
        texture.renderer.render(texture.scene, texture.camara); 
    } 
}
texture.setup(); 
texture.loop(); 