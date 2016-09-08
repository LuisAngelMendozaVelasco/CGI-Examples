// cubes

cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

// create cube
var voxel = new THREE.Mesh( cubeGeo, cubeMaterial );
var size = 200, step = 100;

for ( var i = - size; i <= size; i += step ) {
  voxel.position.set.push(i,0,0);
}


voxel.rotateX(40*Math.PI/180);
var scene=new THREE.Scene();
scene.add( voxel );
//objects.push( voxel );
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(scene,camara);
