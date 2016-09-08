// grid

var size = 200, step = 200;

var geometry = new THREE.Geometry();

for ( var i = - size; i <= size; i += step ) {

	geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
	geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

	geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
	geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

	}

var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.2, transparent: true } );

var line = new THREE.LineSegments( geometry, material );
line.rotateX(40*Math.PI/180);
var scene=new THREE.Scene();
scene.add( line );
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(scene,camara);
