var camera, scene, renderer; 
var tower1, tower2, tower3, tower4; 
var king1, king2, king3; 
var black_pawn1, black_pawn2, black_pawn3, black_pawn4, black_pawn5, black_pawn6, black_pawn7, black_pawn8; 
var white_pawn1, white_pawn2, white_pawn3, white_pawn4, white_pawn5, white_pawn6, white_pawn7, white_pawn8; 
var mesh1, mesh2, mesh3; 

var prototype = new Object(); 
scene = new THREE.Scene(); 
camera = new THREE.PerspectiveCamera(); 
camera.position.z = 190; 
camera.position.x = 45; 
camera.position.y = -40; 
scene.rotateX(Math.PI*0.7); 

prototype.TowerGeometry = function() {
    THREE.Geometry.call(this); 

    var tower1 = []; 
    tower1.push(new THREE.Vector2(120, -50)); 
    tower1.push(new THREE.Vector2(120, -30)); 
    tower1.push(new THREE.Vector2(100, -30)); 
    tower1.push(new THREE.Vector2(100, -10)); 
    tower1.push(new THREE.Vector2(70, 10)); 
    tower1.push(new THREE.Vector2(70, 200)); 
    tower1.push(new THREE.Vector2(90, 220)); 

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
    form2.translate(0, 263, 0); 
    form2_1.rotateX(90*Math.PI/180)
    form2_1.translate(0, 263, 0); 
    form2_2.rotateX(90*Math.PI/180)
    form2_2.translate(0, 263, 0); 
    form2_3.rotateX(90*Math.PI/180)
    form2_3.translate(0, 263, 0); 
    form3.translate(0, 218, 0); 

    var tower1_Mesh = new THREE.Mesh(form1); 
    var tower2_Mesh = new THREE.Mesh(form2); 
    var tower2_1_Mesh = new THREE.Mesh(form2_1); 
    var tower2_2_Mesh = new THREE.Mesh(form2_2); 
    var tower2_3_Mesh = new THREE.Mesh(form2_3); 
    var tower3_Mesh = new THREE.Mesh(form3); 
    var tower_Form = new THREE.Geometry(); 

    tower_Form.merge(tower1_Mesh.geometry, tower1_Mesh.matrix); 
    tower_Form.merge(tower2_Mesh.geometry, tower2_Mesh.matrix); 
    tower_Form.merge(tower2_1_Mesh.geometry, tower2_1_Mesh.matrix); 
    tower_Form.merge(tower2_2_Mesh.geometry, tower2_2_Mesh.matrix); 
    tower_Form.merge(tower2_3_Mesh.geometry, tower2_3_Mesh.matrix); 
    tower_Form.merge(tower3_Mesh.geometry, tower3_Mesh.matrix); 

    var tower_Form_Final = new THREE.Mesh(tower_Form); 
    this.merge(tower_Form_Final.geometry, tower_Form_Final.matrix); 
}

var cube = new THREE.BoxGeometry(10, 10, 10); 

prototype.ChessboardGeometry = function(){
    THREE.Group.call(this); 
    var texture3 = new THREE.TextureLoader().load('../images/white_ceramic.jpg'); 
    var texture4 = new THREE.TextureLoader().load('../images/black_ceramic.jpg'); 

    var white_ceramic = new THREE.MeshBasicMaterial({map:texture3}); 
    var black_ceramic = new THREE.MeshBasicMaterial({map:texture4}); 
        
    var k = 0; 
    for (var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(k%2 !== 0){
                mesh1 = new THREE.Mesh(cube, white_ceramic); 
                mesh1.position.x = (j+1)*10;    //Columns
                mesh1.position.y = (i+1)*10;    //Rows
                mesh1.matrixAutoUpdate = false; 
                mesh1.updateMatrix(); 
                mesh1.receiveShadow = true; 
                this.add(mesh1); 
            }
            k++; 
        }
        k++; 
    }
    
    var k = 0; 
    for (var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            if(k%2 == 0){
                mesh2 = new THREE.Mesh(cube, black_ceramic); 
                mesh2.position.x = (j+1)*10;    //Columns
                mesh2.position.y = (i+1)*10;    //Rows
                mesh2.matrixAutoUpdate = false; 
                mesh2.updateMatrix(); 
                mesh2.receiveShadow = true; 
                this.add(mesh2); 
            }
            k++; 
        }
        k++; 
    }
}

prototype.ChessboardGeometry1 = function(){
    THREE.Group.call(this); 
    var texture5 = new THREE.TextureLoader().load('../images/wood.jpg'); 
    var wood = new THREE.MeshBasicMaterial({map:texture5}); 
    
    for(var l=0; l<10; l++){        //Columns
        for(var m=0; m<2; m++){     //Rows
            var mesh3 = new THREE.Mesh(cube, wood); 
            if(m == 1){
                mesh3.position.y = 90; 
            }
            mesh3.position.x = (l*10); 
            mesh3.matrixAutoUpdate = false; 
            mesh3.updateMatrix(); 
            mesh3.receiveShadow = true; 
            this.add(mesh3); 
        }
    }
    
    for(var n=1; n<9; n++){          //Rows
        for(var o=0; o<2; o++){      //Columns
            var mesh4 = new THREE.Mesh(cube, wood); 
            if (o == 1){
                mesh4.position.x = 90; 
            }
            mesh4.position.y = (n)*10
            mesh4.matrixAutoUpdate = false; 
            mesh4.updateMatrix(); 
            mesh4.receiveShadow = true; 
            this.add(mesh4); 
        }
    }
}

prototype.PawnGeometry = function(){
    THREE.Group.call(this); 

    //Geometries
    var pawn_base = new THREE.CylinderGeometry(5, 5, 2, 20);     //Height = 2
    var pawn_base2 = new THREE.TorusGeometry(3, 1.5, 20, 100);   //Height = 4
    pawn_base2.rotateX(Math.PI/2); 
    pawn_base2.translate(0, 1, 0); 
    var column = new THREE.CylinderGeometry(3.5, 3.5, 8, 10); 
    column.translate(0, 6, 0); 
    var pawn_top = new THREE.CylinderGeometry(4, 4, 1, 20);     //Height = 9
    pawn_top.translate(0, 10, 0); 
    var pawn_top2 = new THREE.SphereGeometry(3.5, 20, 20); 
    pawn_top2.translate(0, 12, 0); 

    //Mesh
    var mpawn_base = new THREE.Mesh(pawn_base); 
    var mpawn_base2 = new THREE.Mesh(pawn_base2); 
    var mcolumn = new THREE.Mesh(column); 
    var mpawn_top = new THREE.Mesh(pawn_top); 
    var mpawn_top2 = new THREE.Mesh(pawn_top2); 

    //Coupling
    var final_pawn = new THREE.Geometry(); 
    final_pawn.merge(mpawn_base.geometry, mpawn_base.matrix); 
    final_pawn.merge(mpawn_base2.geometry, mpawn_base2.matrix); 
    var mfinal_pawn = new THREE.Mesh(final_pawn); 

    var final_pawn2 = new THREE.Geometry(); 
    final_pawn2.merge(mcolumn.geometry, mcolumn.matrix); 
    final_pawn2.merge(mfinal_pawn.geometry, mfinal_pawn.matrix); 
    var mfinal_pawn2 = new THREE.Mesh(final_pawn2); 

    var final_pawn3 = new THREE.Geometry(); 
    final_pawn3.merge(mpawn_top.geometry, mpawn_top.matrix); 
    final_pawn3.merge(mfinal_pawn2.geometry, mfinal_pawn2.matrix); 
    var mfinal_pawn3 = new THREE.Mesh(final_pawn3); 

    this.merge(mpawn_top2.geometry, mpawn_top2.matrix); 
    this.merge(mfinal_pawn3.geometry, mfinal_pawn3.matrix); 
}

prototype.KingGeometry = function(){
    THREE.Geometry.call(this); 
    var king_points = []; 
    
    king_points.push(new THREE.Vector2(0, 0)); 
    king_points.push(new THREE.Vector2(20, 0)); 
    king_points.push(new THREE.Vector2(20, 10)); 
    king_points.push(new THREE.Vector2(15, 10)); 
    king_points.push(new THREE.Vector2(15, 15)); 
    king_points.push(new THREE.Vector2(10, 15)); 
    king_points.push(new THREE.Vector2(5, 60)); 
    king_points.push(new THREE.Vector2(20, 60)); 
    king_points.push(new THREE.Vector2(20, 65)); 
    king_points.push(new THREE.Vector2(10, 65)); 
    king_points.push(new THREE.Vector2(10, 70)); 
    king_points.push(new THREE.Vector2(15, 70)); 
    king_points.push(new THREE.Vector2(15, 80)); 
    king_points.push(new THREE.Vector2(10, 80)); 
    king_points.push(new THREE.Vector2(20, 100)); 
    king_points.push(new THREE.Vector2(0, 100)); 
    
    var king_base = new THREE.LatheGeometry(king_points); 
    var king_base_Mesh = new THREE.Mesh(king_base); 
    
    var king_form = new THREE.Geometry(); 

    king_form.merge(king_base_Mesh.geometry, king_base_Mesh.matrix); 
    
    var vertical = new THREE.BoxGeometry(10, 20, 10); 
    vertical.translate(0, 110, 0); 
    var vertical_Mesh = new THREE.Mesh(vertical); 
    king_form.merge(vertical_Mesh.geometry, vertical_Mesh.matrix); 
    
    var horizontal = new THREE.BoxGeometry(20, 10, 10); 
    horizontal.translate(0, 110, 0); 
    var horizontal_Mesh = new THREE.Mesh(horizontal); 
    king_form.merge(horizontal_Mesh.geometry, horizontal_Mesh.matrix); 

    var final_king_form = new THREE.Mesh(king_form); 
    this.merge(final_king_form.geometry, final_king_form.matrix);   
}

prototype.KingGeometry.prototype = new THREE.Geometry(); 
prototype.PawnGeometry.prototype = new THREE.Geometry(); 
prototype.ChessboardGeometry.prototype = new THREE.Group(); 
prototype.ChessboardGeometry1.prototype = new THREE.Group(); 
prototype.TowerGeometry.prototype = new THREE.Geometry(); 

prototype.setup = function(){
    //Texture
    var texture1 = new THREE.TextureLoader().load('../images/white_marble.jpg'); 
    var texture2 = new THREE.TextureLoader().load('../images/black_marble.jpg'); 
    var white_marble = new THREE.MeshBasicMaterial({map:texture1}); 
    var black_marble = new THREE.MeshBasicMaterial({map:texture2}); 

    //Figures
    tower1 = new THREE.Mesh(new prototype.TowerGeometry(), white_marble); 
    tower1.position.y = 10; 
    tower1.position.z = -5; 
    tower1.position.x = 10; 
    tower1.scale.set(0.05, 0.05, 0.05); 
    tower1.rotateX(-Math.PI/2); 

    //tower2
    tower2 = new THREE.Mesh(new prototype.TowerGeometry(), white_marble); 
    tower2.position.y = 80; 
    tower2.position.z = -5; 
    tower2.position.x = 10; 
    tower2.scale.set(0.05, 0.05, 0.05); 
    tower2.rotateX(-Math.PI/2); 

    //tower3
    tower3 = new THREE.Mesh(new prototype.TowerGeometry(), black_marble); 
    tower3.position.y = 10; 
    tower3.position.z = -5; 
    tower3.position.x = 80; 
    tower3.scale.set(0.05, 0.05, 0.05); 
    tower3.rotateX(-Math.PI/2); 

    //tower4
    tower4 = new THREE.Mesh(new prototype.TowerGeometry(), black_marble); 
    tower4.position.y = 80; 
    tower4.position.z = -5; 
    tower4.position.x = 80; 
    tower4.scale.set(0.05, 0.05, 0.05); 
    tower4.rotateX(-Math.PI/2); 

    //King 3
    king3 = new THREE.Mesh(new prototype.KingGeometry(), white_marble); 
    king3.position.y = 50; 
    king3.position.z = -5; 
    king3.position.x = 10; 
    king3.scale.set(0, 0, 0); 
    king3.rotateX(-Math.PI/2); 

    //King 2
    king2 = new THREE.Mesh(new prototype.KingGeometry(), black_marble); 
    king2.position.y = 50; 
    king2.position.z = -5; 
    king2.position.x = 80; 
    king2.scale.set(0.175, 0.175, 0.175); 
    king2.rotateX(-Math.PI/2); 

    //King 1
    king1 = new THREE.Mesh(new prototype.KingGeometry(), white_marble); 
    king1.position.y = 50; 
    king1.position.z = -5; 
    king1.position.x = 10; 
    king1.scale.set(0.175, 0.175, 0.175); 
    king1.rotateX(-Math.PI/2);    

    //black_pawn1
    black_pawn1 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn1.rotateX(-Math.PI/2); 
    black_pawn1.position.y = 10; 
    black_pawn1.position.z = -5; 
    black_pawn1.position.x = 70;   

    //black_pawn2
    black_pawn2 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn2.rotateX(-Math.PI/2); 
    black_pawn2.position.y = 20; 
    black_pawn2.position.z = -5; 
    black_pawn2.position.x = 70;   

    //black_pawn3
    black_pawn3 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn3.rotateX(-Math.PI/2);  
    black_pawn3.position.y = 30; 
    black_pawn3.position.z = -5; 
    black_pawn3.position.x = 70;   

    //black_pawn4
    black_pawn4 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn4.rotateX(-Math.PI/2); 
    black_pawn4.position.y = 40; 
    black_pawn4.position.z = -5; 
    black_pawn4.position.x = 70;   

    //black_pawn5
    black_pawn5 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn5.rotateX(-Math.PI/2); 
    black_pawn5.position.y = 50; 
    black_pawn5.position.z = -5; 
    black_pawn5.position.x = 70; 

    //black_pawn6
    black_pawn6 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn6.rotateX(-Math.PI/2); 
    black_pawn6.position.y = 60; 
    black_pawn6.position.z = -5; 
    black_pawn6.position.x = 70;  

    //black_pawn7
    black_pawn7 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn7.rotateX(-Math.PI/2); 
    black_pawn7.position.y = 70; 
    black_pawn7.position.z = -5; 
    black_pawn7.position.x = 70;   

    //black_pawn8
    black_pawn8 = new THREE.Mesh(new prototype.PawnGeometry(), black_marble); 
    black_pawn8.rotateX(-Math.PI/2);  
    black_pawn8.position.y = 80; 
    black_pawn8.position.z = -5; 
    black_pawn8.position.x = 70; 

    //white_pawn1
    white_pawn1 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn1.rotateX(-Math.PI/2);  
    white_pawn1.position.y = 10; 
    white_pawn1.position.z = -5; 
    white_pawn1.position.x = 20; 

    //white_pawn2
    white_pawn2 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn2.rotateX(-Math.PI/2);  
    white_pawn2.position.y = 20; 
    white_pawn2.position.z = -5; 
    white_pawn2.position.x = 20; 

    //white_pawn3
    white_pawn3 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn3.rotateX(-Math.PI/2);  
    white_pawn3.position.y = 30; 
    white_pawn3.position.z = -5; 
    white_pawn3.position.x = 20; 

    //white_pawn4
    white_pawn4 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn4.rotateX(-Math.PI/2);  
    white_pawn4.position.y = 40; 
    white_pawn4.position.z = -5; 
    white_pawn4.position.x = 20; 

    //white_pawn5
    white_pawn5 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn5.rotateX(-Math.PI/2);  
    white_pawn5.position.y = 50; 
    white_pawn5.position.z = -5; 
    white_pawn5.position.x = 20; 

    //white_pawn6
    white_pawn6 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn6.rotateX(-Math.PI/2);  
    white_pawn6.position.y = 60; 
    white_pawn6.position.z = -5; 
    white_pawn6.position.x = 20; 

    //white_pawn7
    white_pawn7 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn7.rotateX(-Math.PI/2);  
    white_pawn7.position.y = 70; 
    white_pawn7.position.z = -5; 
    white_pawn7.position.x = 20; 

    //white_pawn8
    white_pawn8 = new THREE.Mesh(new prototype.PawnGeometry(), white_marble); 
    white_pawn8.rotateX(-Math.PI/2);  
    white_pawn8.position.y = 80; 
    white_pawn8.position.z = -5; 
    white_pawn8.position.x = 20; 

    scene.add(tower1, tower2, tower3, tower4); 
    scene.add(king1, king2, king3); 
    scene.add(new prototype.ChessboardGeometry(), new prototype.ChessboardGeometry1()); 
    scene.add(black_pawn1, black_pawn2, black_pawn3, black_pawn4, black_pawn5, black_pawn6, black_pawn7, black_pawn8); 
    scene.add(white_pawn1, white_pawn2, white_pawn3, white_pawn4, white_pawn5, white_pawn6, white_pawn7, white_pawn8); 
    renderer = new THREE.WebGLRenderer(); 
    renderer.setSize( window.innerHeight*.95, window.innerHeight*.95); 
    document.body.appendChild(renderer.domElement); 
}

prototype.loop = function(){
    requestAnimationFrame(prototype.loop); 
    renderer.render(scene, camera); 
}

prototype.setup(); 
prototype.loop(); 