var forma = new THREE.BufferGeometry();
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh(forma, material);
var escena  =new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
var renderizador = new THREE.WebGLRenderer();

const points = [new THREE.Vector3(-1, 1, -1),//c
                new THREE.Vector3(-1, -1, 1),//b
                new THREE.Vector3(1, 1, 1),//a   

                new THREE.Vector3(1, 1, 1),//a    
                new THREE.Vector3(1, -1, -1),//d  
                new THREE.Vector3(-1, 1, -1),//c

                new THREE.Vector3(-1, -1, 1),//b
                new THREE.Vector3(1, -1, -1),//d  
                new THREE.Vector3(1, 1, 1),//a

                new THREE.Vector3(-1, 1, -1),//c
                new THREE.Vector3(1, -1, -1),//d    
                new THREE.Vector3(-1, -1, 1),//b
                ];
forma.setFromPoints(points);
forma.computeVertexNormals();
malla.rotateX(Math.PI/2);
escena.add(malla);
camara.position.z = 10;
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);