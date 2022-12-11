function init(p){
    mesh = new THREE.Mesh(new THREE.BoxGeometry(p, p, p), new THREE.MeshNormalMaterial());
    scene = new THREE.Scene();
    scene.add(mesh);
    camera = new THREE.PerspectiveCamera();
    camera.position.z = 20; 
    camera.position.y = 1; 
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(700, 700);
    document.body.appendChild(renderer.domElement);
}

var loop = function(){
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
    mesh.rotateY(0.1);
    mesh.rotateX(0.1);
    if(Math.abs(mesh.position.x) > 5)
        step = -step;
    mesh.position.x += step;
}

var scene, camera, renderer, mesh;
var step = 0.01;
init(1)
loop();