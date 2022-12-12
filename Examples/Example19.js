var texture = new Object();

texture.callback = function(texture){
    var material = new THREE.MeshBasicMaterial({map:texture});

    texture.mesh = new THREE.Mesh(new THREE.SphereGeometry(3), material);
    texture.scene.add(texture.mesh);
}

texture.setup = function(){
    var loader = new THREE.TextureLoader();
    var canvas = document.getElementById("texture_example");

    loader.load('../images/earth_atmos_2048.jpg',  texture.callback);
    texture.scene = new THREE.Scene();
    texture.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    texture.camera.position.z = 5;
    texture.renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
texture.renderer.setSize(600, 600);
}

texture.loop = function(){
    requestAnimationFrame(texture.loop);
    if(texture.mesh !== undefined){
        texture.mesh.rotateX(0.01);
        texture.mesh.rotateY(0.01);
    }
    texture.renderer.render(texture.scene, texture.camera);
}

texture.setup();
texture.loop();