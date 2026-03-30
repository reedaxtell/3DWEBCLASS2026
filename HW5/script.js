// Basic Three.js Example
// Chelsea Thompto - Spring 2026

// Three.js uses an import map to add features.
// The "import * as THREE from 'three';" will be
// in all sketches. Add-ons will be added after.

// The main library script
import * as THREE from "three";

// The plug-in for orbit controls
import { OrbitControls } from "./src/OrbitControls.js";

//plugin first person controls
import { PointerLockControls } from "./src/PointerLockControls.js";
// Declaring global variables.
let camera, canvas, controls, scene, renderer;

/////////class demo
import {FontLoader} from "./src/FontLoader.js";

/////


//////OBJ LOADER
			import { OBJLoader } from './src/OBJLoader.js';
const loader1 = new THREE.TextureLoader();

// variables for First person controls
let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
// Run the "init" function which is like "setup" in p5.
init();

// Define initial scene
async function init() {
    // scene setup
	
    canvas = document.getElementById("3-holder");
    scene = new THREE.Scene();
 //   scene.background = new THREE.Color(0x00ffff);
   scene.fog = new THREE.FogExp2(0xcc66ff, 0.0015);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    //renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(innerWidth, innerHeight);
    renderer.setAnimationLoop(animate);
    canvas.appendChild(renderer.domElement);

    // Setup camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 10, 0);

    // Setup orbit controls
    //controls = new OrbitControls(camera, renderer.domElement);
    //controls.listenToKeyEvents(window);
    //controls.enableDamping = true;
    //controls.dampingFactor = 0.05;
    //controls.screenSpacePanning = false;
    //controls.minDistance = 100;
    //controls.maxDistance = 500;
    //controls.cursorStyle = "grab";
    //controls.maxPolarAngle = Math.PI / 2;
	
	
///
	
	
    
    //setup first person controls
    controls = new PointerLockControls( camera, document.body );
    const blocker = document.getElementById( 'blocker' );
				const instructions = document.getElementById( 'instructions' );

				instructions.addEventListener( 'click', function () {

					controls.lock();

				} );

				controls.addEventListener( 'lock', function () {

					instructions.style.display = 'none';
					blocker.style.display = 'none';

				} );

				controls.addEventListener( 'unlock', function () {

					blocker.style.display = 'block';
					instructions.style.display = '';

				} );

				scene.add( controls.object );

				const onKeyDown = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							moveForward = true;
							break;

						case 'ArrowLeft':
						case 'KeyA':
							moveLeft = true;
							break;

						case 'ArrowDown':
						case 'KeyS':
							moveBackward = true;
							break;

						case 'ArrowRight':
						case 'KeyD':
							moveRight = true;
							break;

						case 'Space':
							if ( canJump === true ) velocity.y += 350;
							canJump = false;
							break;

					}

				};

				const onKeyUp = function ( event ) {

					switch ( event.code ) {

						case 'ArrowUp':
						case 'KeyW':
							moveForward = false;
							break;

						case 'ArrowLeft':
						case 'KeyA':
							moveLeft = false;
							break;

						case 'ArrowDown':
						case 'KeyS':
							moveBackward = false;
							break;

						case 'ArrowRight':
						case 'KeyD':
							moveRight = false;
							break;

					}

				};

				document.addEventListener( 'keydown', onKeyDown );
				document.addEventListener( 'keyup', onKeyUp );

				raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

//////////////ADD FONT + TEEXT
	const loader = new FontLoader();
	loader.load("./Public Sans_Bold.json", function( font ){
		///////////// CREATE COLOR AND MATERIAL
		const color = 0x04bc00;

		const matDark = new THREE.LineBasicMaterial( {
			color: color,
			side: THREE.DoubleSide
					} );
		//////CREATE MESSAGE/TEXT
		const message = "Which Way\n<-               ->";
		/////create shapes
		const reedshapes = font.generateShapes(message,50);
		const textGeometry = new THREE.ShapeGeometry(reedshapes);
		textGeometry.computeBoundingBox();
		////center alignment
		
		//////add objects to scene
		const text = new THREE.Mesh (textGeometry, matDark);
		text.position.z = -300;
		text.position.y = 100;
				text.position.x = -200;
		scene.add(text);
		
	} );
	
	
	
	/////////OBJ TEST
	//
const objLoader = new OBJLoader().setPath( './' );
	//objLoader.setMaterials(matDark); // optional since OBJ assets can be loaded without an accompanying MTL file

	const object = await objLoader.loadAsync( 'reedcyberpunkcity.obj' );
	object.position.x = -400;
	object.position.y = 0;
		object.position.z = 0;
	object.scale.setScalar( 14 );
	object.rotation.y = Math.PI / 2; 
	scene.add( object );
	
	
	//
	//
	//objLoader.setMaterials(matDark); // optional since OBJ assets can be loaded without an accompanying MTL file

	const object2 = await objLoader.loadAsync( 'solarpunk.obj' );

	object2.position.y = -1;
		object2.position.z = 0;
			object2.position.x = 400;
	object2.scale.setScalar( 17 );
		object2.rotation.y = Math.PI / -2; 
	scene.add( object2 );
	
	///ROAD

const geometry = new THREE.PlaneGeometry(2000, 375);
const material = new THREE.MeshBasicMaterial({ 
  color: 0x333333, 
});
const rectangle = new THREE.Mesh(geometry, material);
rectangle.rotation.x = -Math.PI / 2;
scene.add(rectangle);

	
	
	////
		//////////sky
const texture3 = textureLoader.load('bluecircle.jpg');
const material3 = new THREE.MeshBasicMaterial({ map: texture3, side: THREE.DoubleSide });
const geometry3 = new THREE.BoxGeometry(10, 10, 10);
const mesh3 = new THREE.Mesh(geometry3, material3);
		mesh3.scale.setScalar( 100 );
		mesh3.position.y = 200;
			mesh3.position.z = -10;
scene.add(mesh3);
	//skyend

	///MARCH 24EXAMPLE MATERIAL AND OBJECT
	
	
	
    // Grouping of trees
   // const geometry = new THREE.ConeGeometry(10, 60, 8, 1);
 //   const material = new THREE.MeshPhongMaterial({ color: 0xffccff, flatShading: true });
  //  const mesh = new THREE.InstancedMesh(geometry, material, 500);
 //   const tree = new THREE.Object3D();
  //  for (let i = 0; i < 75; i++) {
 //       tree.position.x = Math.random() * 250 - 125;
   //     tree.position.y = 0;
     //   tree.position.z = Math.random() * 250 - 125;
       // tree.updateMatrix();
       // mesh.setMatrixAt(i, tree.matrix);
//    }
  //  scene.add(mesh);

    // Ground
    const earth = new THREE.PlaneGeometry(2000, 2000);
    const ground = new THREE.MeshPhongMaterial({ color: 0x402314, flatShading: true });
    const mesh2 = new THREE.InstancedMesh(earth, ground, 500);
    mesh2.translateY(-60);
    mesh2.rotateX(-1.5708);
    scene.add(mesh2);

    // lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3);
    dirLight1.position.set(1, 1, 1);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight2.position.set(-1, -1, -1);
    scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);
}

// Function to update moving objects, in this case the camera.
// The render function is trigger at the end to update the canvas.
function animate() {
    const time = performance.now();

				if ( controls.isLocked === true ) {

					
					const delta = ( time - prevTime ) / 1000;

					velocity.x -= velocity.x * 10.0 * delta;
					velocity.z -= velocity.z * 10.0 * delta;

					velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

					direction.z = Number( moveForward ) - Number( moveBackward );
					direction.x = Number( moveRight ) - Number( moveLeft );
					direction.normalize(); // this ensures consistent movements in all directions

					if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
					if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

					controls.moveRight( - velocity.x * delta );
					controls.moveForward( - velocity.z * delta );
				

						canJump = true;
}
prevTime = time;
    render();

                }



// Function to render the scene using the camera.
function render() {
    renderer.render(scene, camera);
}
