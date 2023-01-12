var camera, scene, renderer; 
var tower1, tower2, tower3, tower4; 
var king1, king2, king3; 
var black_pawn1, black_pawn2, black_pawn3, black_pawn4, black_pawn5, black_pawn6, black_pawn7, black_pawn8; 
var white_pawn1, white_pawn2, white_pawn3, white_pawn4, white_pawn5, white_pawn6, white_pawn7, white_pawn8; 
var mesh1, mesh2, mesh3, group1, group2, group3; 

init(); 
loop(); 

function init(){
    scene = new THREE.Scene(); 
    camera = new THREE.PerspectiveCamera(); 
    camera.position.z = 190; 
    camera.position.x = 45; 
    camera.position.y = -40; 
    scene.rotateX(Math.PI*0.7); 

    //Texture
    var texture1 = new THREE.TextureLoader().load('../images/white_marble.jpg'); 
    var texture2 = new THREE.TextureLoader().load('../images/black_marble.jpg'); 
    var texture3 = new THREE.TextureLoader().load('../images/white_ceramic.jpg'); 
    var texture4 = new THREE.TextureLoader().load('../images/black_ceramic.jpg'); 
    var texture5 = new THREE.TextureLoader().load('../images/wood.jpg'); 
    
    var white_marble = new THREE.MeshBasicMaterial({map:texture1}); 
    var black_marble = new THREE.MeshBasicMaterial({map:texture2}); 
    var white_ceramic = new THREE.MeshBasicMaterial({map:texture3}); 
    var black_ceramic = new THREE.MeshBasicMaterial({map:texture4});   
    var wood = new THREE.MeshBasicMaterial({map:texture5}); 
    
    tower1 = new THREE.Mesh(towerForma, white_marble); 
    tower1.position.y = 10; 
    tower1.position.z = -7; 
    tower1.position.x = 10; 
    tower1.scale.set(0.04, 0.04, 0.04); 
    tower1.rotateX(-Math.PI/2); 

    //Chessboard
    var cube = new THREE.BoxGeometry(10, 10, 10); 
    group1 = new THREE.Group(); 
    group2 = new THREE.Group(); 
    var k = 0; 
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(k%2 !== 0){
                mesh1 = new THREE.Mesh(cube, white_ceramic); 
                mesh1.position.x = (j+1)*10;    //Columns
                mesh1.position.y = (i+1)*10;    //Rows
                mesh1.matrixAutoUpdate = false; 
                mesh1.updateMatrix(); 
                mesh1.receiveShadow = true; 
                group1.add(mesh1); 
            }
            k++; 
        }
        k++; 
    }
  
    var k = 0; 
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(k%2 == 0){
                mesh2 = new THREE.Mesh(cube, black_ceramic); 
                mesh2.position.x = (j+1)*10;    //Columns
                mesh2.position.y = (i+1)*10;    //Rows
                mesh2.matrixAutoUpdate = false; 
                mesh2.updateMatrix(); 
                mesh2.receiveShadow = true; 
                group2.add(mesh2); 
            }
            k++; 
        }
        k++; 
    }

    group3 = new THREE.Group(); 
    group4 = new THREE.Group(); 
    for(var l=0; l<10; l++){        //columns
        for(var m=0; m<2; m++){     //Rows
            var mesh3 = new THREE.Mesh(cube, wood); 
            if(m == 1){
                mesh3.position.y = 90; 
            }
            mesh3.position.x = (l*10); 
            mesh3.matrixAutoUpdate = false; 
            mesh3.updateMatrix(); 
            mesh3.receiveShadow = true; 
            group3.add(mesh3); 
        }
    }
  
    for(var n=1; n<9; n++){      //Rows
        for(var o=0; o<2; o++){  //Columns
            var mesh4 = new THREE.Mesh(cube, wood); 
            if (o == 1){
                mesh4.position.x = 90; 
            }
            mesh4.position.y = (n)*10
            mesh4.matrixAutoUpdate = false; 
            mesh4.updateMatrix(); 
            mesh4.receiveShadow = true; 
            group4.add(mesh4); 
        }
    }
  
    scene.add(tower1, group1, group2, group3, group4); 
    renderer = new THREE.WebGLRenderer(); 
    renderer.setSize(window.innerHeight*.95,  window.innerHeight*.95); 
    document.body.appendChild(renderer.domElement); 
}
  
function loop() {
    window.onload = function(){document.onkeydown=move}; 
    function move(piece){
        var key = piece.which; 
        switch(key){
            case 37:    //Left
                tower1.translateX(-10); 
                break; 
            case 38:    //Up
                tower1.translateZ(-10); 
                break; 
            case 39:     //Right
                tower1.translateX(10); 
                break; 
            case 40:    //Down
                tower1.translateZ(10); 
                break; 
            default:
                alert("Press the arrows on the keyboard!"); 
        }
    }
    requestAnimationFrame(loop); 
    renderer.render(scene, camera); 
} 