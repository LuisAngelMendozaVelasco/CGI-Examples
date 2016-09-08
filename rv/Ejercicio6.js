// cubes

cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, map: new THREE.TextureLoader().load( "textures/square-outline-textured.png" ) } );

// create cube

var voxel = new THREE.Mesh( cubeGeo, cubeMaterial );
voxel.position.copy(0).add(0);
voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );

var scene=new THREE.Scene();
scene.add( voxel );
objects.push( voxel );
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(scene,camara);
