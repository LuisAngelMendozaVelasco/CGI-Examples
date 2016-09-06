var camara=new THREE.OrthographicCamera();

camara.right=window.innerHeight/2;
camara.left=window.innerHeight/-2;
camara.top=window.innerHeight/2;
camara.bottom=window.innerHeight/-2;
camara.near=0.1;
camara.far=1000;
camara.updateProjectionMatrix();
camara.position.z=100;

var cubo=new THREE.Mesh(new THREE.BoxGeometry(30,30,30),new THREE:meshNormalMaterial());
cubo.rotateY(Math.PI/4);

var esfera1=new.THREE.Mesh(new THREE.SpehreGeometry(15),new THREE.MeshNormalMaterial());
esfera1.position.x=50;

var esfera2=new THREE.Mesh(new THREE.SpehereGeometry(15),new THREE.MeshNormalMaterial());
esfera2.position.x=-50;
esfera2.position.z=-100;
