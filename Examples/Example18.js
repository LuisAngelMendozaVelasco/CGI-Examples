var window_object = new Object();

window_object.listener = function(){
    window_object.camera.aspect = window.innerWidth/window.innerHeight;
    window_object.camera.updateProjectionMatrix();
    window_object.renderer.setSize(window.innerWidth, window.innerHeight);
}

window_object.setup = function(){
    var event_type = 'resize';
    /* When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false 
    (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. */
    var capturarp = false;
    window.addEventListener(event_type, window_object.listener, capturarp);
    window_object.scene = new THREE.Scene();
    window_object.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    window_object.camera.position.z = 5;
    var canvas = document.getElementById("window");
    window_object.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    window_object.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
    window_object.scene.add(window_object.mesh);
}

window_object.loop = function(){
    requestAnimationFrame(window_object.loop);
    window_object.mesh.rotateX(0.01);
    window_object.mesh.rotateY(0.01);
    window_object.renderer.render(window_object.scene, window_object.camera);
 }
 
window_object.setup();
window_object.loop();