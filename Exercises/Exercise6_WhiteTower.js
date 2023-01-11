var tower1 = [];
tower1.push(new THREE.Vector2(120, -50));
tower1.push(new THREE.Vector2(120, -30));
tower1.push(new THREE.Vector2(100, -30));
tower1.push(new THREE.Vector2(100, -10));
tower1.push(new THREE.Vector2(70, 10));
tower1.push(new THREE.Vector2(70, 100));
tower1.push(new THREE.Vector2(90, 120));

var tower2 = new THREE.Shape();
tower2.moveTo(-30, 84.85);
tower2.lineTo(-30, 57.43);
tower2.lineTo(-57.43, 30);
tower2.lineTo(-84.85, 30);
tower2.lineTo(-63.64, 63.64);
tower2.lineTo(-30, 84.85);

var tower2_1 = new THREE.Shape();
tower2_1.moveTo(-30, -84.85);
tower2_1.lineTo(-30, -57.43);
tower2_1.lineTo(-57.43, -30);
tower2_1.lineTo(-84.85, -30);
tower2_1.lineTo(-63.64, -63.64);
tower2_1.lineTo(-30, -84.85);

var tower2_2 = new THREE.Shape();
tower2_2.moveTo(30, -84.85);
tower2_2.lineTo(30, -57.43);
tower2_2.lineTo(57.43, -30);
tower2_2.lineTo(84.85, -30);
tower2_2.lineTo(63.64, -63.64);
tower2_2.lineTo(30, -84.85);

var tower2_3 = new THREE.Shape();
tower2_3.moveTo(30, 84.85);
tower2_3.lineTo(30, 57.43);
tower2_3.lineTo(57.43, 30);
tower2_3.lineTo(84.85, 30);
tower2_3.lineTo(63.64, 63.64);
tower2_3.lineTo(30, 84.85);

var tower3 = new THREE.CylinderGeometry(90, 90, 5, 32);

var form1 = new THREE.LatheGeometry(tower1);
var form2 = new THREE.ExtrudeGeometry(tower2, {amount:40});
var form2_1 = new THREE.ExtrudeGeometry(tower2_1, {amount:40});
var form2_2 = new THREE.ExtrudeGeometry(tower2_2, {amount:40});
var form2_3 = new THREE.ExtrudeGeometry(tower2_3, {amount:40});
var form3 = tower3;

form2.rotateX(90*Math.PI/180)
form2.translate(0, 163, 0);
form2_1.rotateX(90*Math.PI/180)
form2_1.translate(0, 163, 0);
form2_2.rotateX(90*Math.PI/180)
form2_2.translate(0, 163, 0);
form2_3.rotateX(90*Math.PI/180)
form2_3.translate(0, 163, 0);
form3.translate(0, 118, 0);

var tower1_Mesh = new THREE.Mesh(form1);
var tower2_Mesh = new THREE.Mesh(form2);
var tower2_1_Mesh = new THREE.Mesh(form2_1);
var tower2_2_Mesh = new THREE.Mesh(form2_2);
var tower2_3_Mesh = new THREE.Mesh(form2_3);
var tower3_Mesh = new THREE.Mesh(form3);

var towerForm = new THREE.Geometry();

towerForm.merge(tower1_Mesh.geometry, tower1_Mesh.matrix);
towerForm.merge(tower2_Mesh.geometry, tower2_Mesh.matrix);
towerForm.merge(tower2_1_Mesh.geometry, tower2_1_Mesh.matrix);
towerForm.merge(tower2_2_Mesh.geometry, tower2_2_Mesh.matrix);
towerForm.merge(tower2_3_Mesh.geometry, tower2_3_Mesh.matrix);
towerForm.merge(tower3_Mesh.geometry, tower3_Mesh.matrix);

var material = new THREE.MeshBasicMaterial({color: 0xEEEED8});
var whiteTower_Mesh = new THREE.Mesh(towerForm, material);

whiteTower_Mesh.rotateX(Math.PI/2);
whiteTower_Mesh.scale.set(0.05, 0.05, 0.05)