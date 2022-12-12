function tree(){
    var trunk_form = new THREE.CylinderGeometry(.25, .5, 1);
    var sphere_form = new THREE.SphereGeometry(.65);
    sphere_form.translate(0, 1, 0);
    
    var trunk_mesh = new THREE.Mesh(trunk_form);
    var sphere_mesh = new THREE.Mesh(sphere_form);
    var tree_form = new THREE.Geometry();
    tree_form.merge(trunk_mesh.geometry, trunk_mesh.matrix);
    tree_form.merge(sphere_mesh.geometry, sphere_mesh.matrix);
    
    var material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(tree_form, material);
}

var constructor = new Object();

constructor.setup = function(){
    var tree1 = new tree();
    var tree2 = new tree();
    var canvas = document.getElementById("constructor_example");
    
    tree1.mesh.position.x = -5;
    tree2.mesh.position.x = 5;
    constructor.camera = new THREE.PerspectiveCamera();
    constructor.camera.position.z = 20;
    constructor.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true});
    constructor.renderer.setSize(600, 600);
    constructor.scene = new THREE.Scene();
    constructor.scene.add(tree1.mesh);
    constructor.scene.add(tree2.mesh);
}

constructor.loop = function(){
    requestAnimationFrame(constructor.loop);
    constructor.renderer.render(constructor.scene, constructor.camera);
}

constructor.setup();
constructor.loop();