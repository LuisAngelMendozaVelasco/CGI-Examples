var prototype_object = new Object();

prototype_object.TreeGeometry = function(){
    var trunk_form = new THREE.CylinderGeometry(.25, .5, 1);
    var sphere_form = new THREE.SphereGeometry(.65);
    sphere_form.translate(0, 1, 0);
    var trunk_mesh = new THREE.Mesh(trunk_form);
    var sphere_mesh = new THREE.Mesh(sphere_form);

    THREE.Geometry.call(this);
    this.merge(trunk_mesh.geometry, trunk_mesh.matrix);
    this.merge(sphere_mesh.geometry, sphere_mesh.matrix);
}

prototype_object.TreeGeometry.prototype = new THREE.Geometry();

prototype_object.setup = function(){
    var tree1 = new THREE.Mesh(new prototype_object.TreeGeometry(), 
                               new THREE.MeshNormalMaterial());
    var tree2 = new THREE.Mesh(new prototype_object.TreeGeometry(), 
                               new THREE.MeshNormalMaterial());
    var canvas = document.getElementById("prototype_example");

    tree1.position.x = -5;
    tree2.position.x = 5;
    prototype_object.camera = new THREE.PerspectiveCamera();
    prototype_object.camera.position.z = 20;
    prototype_object.renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
    prototype_object.renderer.setSize(600, 600);
    prototype_object.scene = new THREE.Scene();
    prototype_object.scene.add(tree1);
    prototype_object.scene.add(tree2);
}

prototype_object.loop = function(){
    requestAnimationFrame(prototype_object.loop);
    prototype_object.renderer.render(prototype_object.scene, prototype_object.camera);
}

prototype_object.setup();
prototype_object.loop();