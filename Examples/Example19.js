var texture_object = new Object();

texture_object.callback = function(texture){
    var material = new THREE.MeshBasicMaterial({map:texture});

    texture_object.mesh = new THREE.Mesh(new THREE.SphereGeometry(3), material);
    texture_object.scene.add(texture_object.mesh);
}

texture_object.setup = function(){
    var loader = new THREE.TextureLoader();
    var canvas = document.getElementById("texture_example");

    loader.load('../images/earth_atmos_2048.jpg', texture_object.callback);
    texture_object.scene = new THREE.Scene();
    texture_object.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    texture_object.camera.position.z = 5;
    texture_object.renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
texture_object.renderer.setSize(600, 600);
}

texture_object.loop = function(){
    requestAnimationFrame(texture_object.loop);
    if(texture_object.mesh !== undefined){
        texture_object.mesh.rotateX(0.01);
        texture_object.mesh.rotateY(0.01);
    }
    texture_object.renderer.render(texture_object.scene, texture_object.camera);
}

texture_object.setup();
texture_object.loop();