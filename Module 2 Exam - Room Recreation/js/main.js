// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(4, 6, 13); 
camera.lookAt(scene.position); 

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x5C514F);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();

// Wooden Floor
const floortexture = textureLoader.load('https://i.ibb.co/BVdsSSx/woodenfloor-1.png'); 
const floorcubeMaterial = new THREE.MeshStandardMaterial({ map: floortexture });
const floorcubeGeometry = new THREE.BoxGeometry(11, 0.5, 10.95); 
const floorCube = new THREE.Mesh(floorcubeGeometry, floorcubeMaterial);
scene.add(floorCube);

floorCube.position.set(0, -3.3, 0.5);
floorCube.rotation.set(Math.PI, Math.PI / 7, Math.PI);

// Walls
const wallColor = 0xC1B2A5;
const wall1cubeMaterial = new THREE.MeshStandardMaterial({ color: wallColor }); 
const wall2cubeMaterial = new THREE.MeshStandardMaterial({ color: wallColor }); 

const wallGroup = new THREE.Group();

function addCubeToGroup(geometry, position, rotation) {
    const cube = new THREE.Mesh(geometry, wall1cubeMaterial);
    cube.position.copy(position);
    cube.rotation.copy(rotation);
    wallGroup.add(cube);
}

const wall1AcubeGeometry = new THREE.BoxGeometry(0.5, 3.9, 11.8);
const wall1BCubeGeometry = new THREE.BoxGeometry(0.9, 7, 4.6);
const wall1CCubeGeometry = new THREE.BoxGeometry(0.5, 7.1, 2);
const wall1DcubeGeometry = new THREE.BoxGeometry(0.5, 2, 10);

const positions = [
    new THREE.Vector3(-4.3, -1.5, -2),
    new THREE.Vector3(-3, 3.9, -5),
    new THREE.Vector3(-6.09, 3.9, 2.7),
    new THREE.Vector3(-4.3, 6.5, -1.9)
];

const rotations = [
    new THREE.Euler(Math.PI / 1, Math.PI / 7, Math.PI / 1),
    new THREE.Euler(Math.PI / 1, Math.PI / 7, Math.PI / 1),
    new THREE.Euler(Math.PI / 1, Math.PI / 7, Math.PI / 1),
    new THREE.Euler(Math.PI / 1, Math.PI / 7, Math.PI / 1)
];

addCubeToGroup(wall1AcubeGeometry, positions[0], rotations[0]);
addCubeToGroup(wall1BCubeGeometry, positions[1], rotations[1]);
addCubeToGroup(wall1CCubeGeometry, positions[2], rotations[2]);
addCubeToGroup(wall1DcubeGeometry, positions[3], rotations[3]);

scene.add(wallGroup);

const wall2cubeGeometry = new THREE.BoxGeometry(11.4, 11, 0.5); 
const wall2Cube = new THREE.Mesh(wall2cubeGeometry, wall2cubeMaterial);
scene.add(wall2Cube);

wall2Cube.position.set(2.1, 2, -4.3);
wall2Cube.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Window
const windowCubeGeometry = new THREE.BoxGeometry(0.5, 5, 5); 
const windowMaterial = new THREE.MeshPhongMaterial({
    color: 0xf0f0f0, 
    transparent: true, 
    opacity: 0.3, 
    side: THREE.DoubleSide 
});

const windowCube = new THREE.Mesh(windowCubeGeometry, windowMaterial);
scene.add(windowCube);
windowCube.position.set(-4.9, 3, -0.5);
windowCube.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

const woodColor = 0x8B6E68; 
const windowDivAMaterial = new THREE.MeshStandardMaterial({ color: woodColor });
const windowDivAGeometry = new THREE.BoxGeometry(0.5, 5, 0.2); 
const windowDivA = new THREE.Mesh(windowDivAGeometry, windowDivAMaterial);

scene.add(windowDivA);
windowDivA.position.set(-4.8, 3, -0.5);
windowDivA.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

const windowDivBMaterial = new THREE.MeshStandardMaterial({ color: woodColor });
const windowDivBGeometry = new THREE.BoxGeometry(0.5, 0.2, 5); 
const windowDivB = new THREE.Mesh(windowDivBGeometry, windowDivBMaterial);

scene.add(windowDivB);
windowDivB.position.set(-4.8, 3, -0.5);
windowDivB.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shelf
const shelfColor = 0x8B6E68; 
const shelfMaterial = new THREE.MeshStandardMaterial({ color: shelfColor });
const shelfBackGeometry = new THREE.BoxGeometry(6, 8.9, 0.2);
const shelfBack = new THREE.Mesh(shelfBackGeometry, shelfMaterial);

scene.add(shelfBack);
shelfBack.position.set(-0.9, 1.4, -5.4); 
shelfBack.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shelf side A
const shelfSideAGeometry = new THREE.BoxGeometry(0.2, 8.9, 2);
const shelfSideA = new THREE.Mesh(shelfSideAGeometry, shelfMaterial);

scene.add(shelfSideA);
shelfSideA.position.set(-2.4, 1.4, -4.9);
shelfSideA.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shelf rows
const shelfRowMaterial = new THREE.MeshStandardMaterial({ color: shelfColor });

// Shelf row A
const shelfRowAGeometry = new THREE.BoxGeometry(6, 0.2, 3.4); 
const shelfRowA = new THREE.Mesh(shelfRowAGeometry, shelfMaterial);
scene.add(shelfRowA);
shelfRowA.position.set(-1, 5.9, -5.03); 
shelfRowA.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shelf row B
const shelfRowB = new THREE.Mesh(shelfRowAGeometry, shelfMaterial);
scene.add(shelfRowB);
shelfRowB.position.set(-1, 3, -5.02); 
shelfRowB.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shelf row C
const shelfRowCGeometry = new THREE.BoxGeometry(6, 5, 3.4); 
const shelfRowC = new THREE.Mesh(shelfRowCGeometry, shelfRowMaterial);
scene.add(shelfRowC);
shelfRowC.position.set(-1, -1.5, -5); 
shelfRowC.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shelf Side B
const shelfSideBMaterial = new THREE.MeshStandardMaterial({ color: shelfColor });
const shelfSideBGeometry = new THREE.BoxGeometry(0.2, 10, 2);
const shelfSideB = new THREE.Mesh(shelfSideBGeometry, shelfSideBMaterial);

scene.add(shelfSideB);
shelfSideB.position.set(1.5, 1, -3);
shelfSideB.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Bed
// Bed Frame 
const bedColor = 0x8B6E68; 
const bedFrameMaterial = new THREE.MeshStandardMaterial({ color: bedColor });
const bedFrameackGeometry = new THREE.BoxGeometry(5, 5, 1.5); 
const bedFrame = new THREE.Mesh(bedFrameackGeometry, bedFrameMaterial);

scene.add(bedFrame);
bedFrame.position.set(-1.25, -2, -3.4); 
bedFrame.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Bed Base 
const bedBaseMaterial = new THREE.MeshStandardMaterial({ color: bedColor });
const bedBaseGeometry = new THREE.BoxGeometry(6, 1, 14);
const bedBase = new THREE.Mesh(bedBaseGeometry, bedBaseMaterial);

scene.add(bedBase);
bedBase.position.set(-1.8, -3, -3.5); 
bedBase.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Bed Foot 
const bedFootMaterial = new THREE.MeshStandardMaterial({ color: bedColor });
const bedFootGeometry = new THREE.BoxGeometry(6, 2, 0.5); 
const bedFoot = new THREE.Mesh(bedFootGeometry, bedFootMaterial);

scene.add(bedFoot);
bedFoot.position.set(-4.9, -2, 3); 
bedFoot.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Bed Futton
const bedFutonColor = 0xD1A4C5;
const bedFutonMaterial = new THREE.MeshStandardMaterial({ color: bedFutonColor });
const bedFutonGeometry = new THREE.BoxGeometry(6, 1, 14);
const bedFuton = new THREE.Mesh(bedFutonGeometry, bedFutonMaterial);

scene.add(bedFuton);
bedFuton.position.set(-2, -2, -3.5); // Adjust the position
bedFuton.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Bed Pillow
const bedPillowColor = 0xFFFFFF; 
const bedPillowMaterial = new THREE.MeshStandardMaterial({ color: bedPillowColor });
const bedPillowGeometry = new THREE.BoxGeometry(3, 0.5, 1.5); 
const bedPillow = new THREE.Mesh(bedPillowGeometry, bedPillowMaterial);

scene.add(bedPillow);
bedPillow.position.set(-1.8, -1.5, -1.9); 
bedPillow.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Table Top
const tableColor = 0x8B6E68; 
const tableTopMaterial = new THREE.MeshStandardMaterial({ color: tableColor });
const tableTopBackGeometry = new THREE.BoxGeometry(4.4, 0.5, 3.4); 
const tableTop = new THREE.Mesh(tableTopBackGeometry, tableTopMaterial);

scene.add(tableTop);
tableTop.position.set(4, 0.2, -2); 
tableTop.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Table Leg
const legMaterial = new THREE.MeshStandardMaterial({ color: tableColor });
const legGeometry = new THREE.BoxGeometry(0.5, 3, 0.5); 
const tableLeg1 = new THREE.Mesh(legGeometry, legMaterial);
const tableLeg2 = new THREE.Mesh(legGeometry, legMaterial);
const tableLeg3 = new THREE.Mesh(legGeometry, legMaterial);
const tableLeg4 = new THREE.Mesh(legGeometry, legMaterial);

tableLeg1.position.set(1.5, -1.7, -2);
tableLeg2.position.set(5.1, -1.7, -0.3);
tableLeg3.position.set(6.12, -1.6, -2);
tableLeg4.position.set(2.3, -1.7, -3.5);

scene.add(tableLeg1);
scene.add(tableLeg2);
scene.add(tableLeg3);
scene.add(tableLeg4);

// Chair
const chairBackColor = 0xE9DBE9;
const chairBackMaterial = new THREE.MeshStandardMaterial({ color: chairBackColor });
const chairBackGeometry = new THREE.BoxGeometry(2, 2.5, 0.5); 
const chairBack = new THREE.Mesh(chairBackGeometry, chairBackMaterial);

scene.add(chairBack);
chairBack.position.set(2.5, 0.1, 1);
chairBack.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

const chairSeatColor = 0xE9DBE9;
const chairSeatMaterial = new THREE.MeshStandardMaterial({ color: chairSeatColor });
const chairSeatGeometry = new THREE.BoxGeometry(2, 0.5, 2); 
const chairSeat = new THREE.Mesh(chairSeatGeometry, chairSeatMaterial);

scene.add(chairSeat);
chairSeat.position.set(2.8, -1, 0.3); 
chairSeat.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

const chairLegColor = 0xADA5A0; 
const chairLegMaterial = new THREE.MeshStandardMaterial({ color: chairLegColor });
const chairLegGeometry = new THREE.BoxGeometry(0.3, 2, 0.5);
const chairLeg = new THREE.Mesh(chairLegGeometry, chairLegMaterial);

scene.add(chairLeg);
chairLeg.position.set(2.8, -2, 0.6); 
chairLeg.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

const chairBaseGeometry = new THREE.CylinderGeometry(0.6, 0.1, 0.5, 32); 
const chairBaseMaterial = new THREE.MeshStandardMaterial({ color: chairLegColor });
const chairBase = new THREE.Mesh(chairBaseGeometry, chairBaseMaterial);

chairBase.position.set(2.8, -3.19, 0.6); 
chairBase.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);
scene.add(chairBase);

// Rug
const rugtexture = textureLoader.load('https://cdn.architextures.org/textures/21/07/loop-pile-carpet-60ed665ccefdd-1200.jpg');
const rugMaterial = new THREE.MeshStandardMaterial({ map: rugtexture });
const rugGeometry = new THREE.CylinderGeometry(5, 0.1, 0.5, 32);
const rug = new THREE.Mesh(rugGeometry, rugMaterial);

rug.position.set(0.1, -3.2, 1); 
rug.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);
scene.add(rug);

// Screen Monitors
// Monitor A
const monitorFrameColor = 0xD1A4C5; 
const monitorFrameAMaterial = new THREE.MeshStandardMaterial({ color: monitorFrameColor }); 
const monitorFrameAGeometry = new THREE.BoxGeometry(3, 2, 0.2); 
const monitorFrameA = new THREE.Mesh(monitorFrameAGeometry, monitorFrameAMaterial);

scene.add(monitorFrameA);
monitorFrameA.position.set(3, 1.9, -1.5); 
monitorFrameA.rotation.set(Math.PI / 1, Math.PI / 61, Math.PI / 1);

const monitorScreenAColor = 0x000;
const monitorScreenAMaterial = new THREE.MeshStandardMaterial({ color: monitorScreenAColor }); 
const monitorScreenAGeometry = new THREE.BoxGeometry(2.8, 1.8, 0.3); 
const monitorScreenA = new THREE.Mesh(monitorScreenAGeometry, monitorScreenAMaterial); 

scene.add(monitorScreenA);
monitorScreenA.position.set(3, 1.9, -1.5); 
monitorScreenA.rotation.set(Math.PI / 1, Math.PI / 61, Math.PI / 1); 

// Monitor B
const monitorFrameBMaterial = new THREE.MeshStandardMaterial({ color: monitorFrameColor });
const monitorFrameBGeometry = new THREE.BoxGeometry(2.1, 1.5, 0.2);
const monitorFrameB = new THREE.Mesh(monitorFrameBGeometry, monitorFrameBMaterial); 

scene.add(monitorFrameB);
monitorFrameB.position.set(5.2, 1.9, -1); 
monitorFrameB.rotation.set(Math.PI / 1, Math.PI / 4.5, Math.PI / 2);

const monitorScreenBColor = 0x000; 
const monitorScreenBMaterial = new THREE.MeshStandardMaterial({ color: monitorScreenBColor }); 
const monitorScreenBGeometry = new THREE.BoxGeometry(1.8, 1.3, 0.2); 
const monitorScreenB = new THREE.Mesh(monitorScreenBGeometry, monitorScreenBMaterial);

scene.add(monitorScreenB);
monitorScreenB.position.set(5.19, 1.9, -1); 
monitorScreenB.rotation.set(Math.PI / 1, Math.PI / 4.5, Math.PI / 2);

// Keyboard
const keyboardColor = 0xFFFFFF; 
const keyboardMaterial = new THREE.MeshStandardMaterial({ color: keyboardColor });
const keyboardBackGeometry = new THREE.BoxGeometry(2, 0.09, 1); 
const keyboard = new THREE.Mesh(keyboardBackGeometry, keyboardMaterial);

scene.add(keyboard);
keyboard.position.set(3.6, 0.45, -1.3); 
keyboard.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Poster
const poster1Texture = new THREE.TextureLoader().load('https://i.ibb.co/Bn5V47G/d57979312b0ce11395dd29a88b5b7ee7-3275061335789909745.jpg');
const poster1Material = new THREE.MeshStandardMaterial({ map: poster1Texture });
const poster1BackGeometry = new THREE.BoxGeometry(4, 3, 0.2);
const poster1 = new THREE.Mesh(poster1BackGeometry, poster1Material);

scene.add(poster1);
poster1.position.set(4.5, 5, -2); 
poster1.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Books
// Book 1
const book1Color = 0xD52D00; 
const book1Material = new THREE.MeshStandardMaterial({ color: book1Color });
const book1Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book1 = new THREE.Mesh(book1Geometry, book1Material);
scene.add(book1);
book1.position.set(-2, 4.1, -5.03); 
book1.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Book 2
const book2Color = 0xEF7627; 
const book2Material = new THREE.MeshStandardMaterial({ color: book2Color });
const book2Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book2 = new THREE.Mesh(book2Geometry, book2Material);
scene.add(book2);
book2.position.set(-1.5, 4.1, -4.8); 
book2.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Book 3
const book3Color = 0xFF9A56; 
const book3Material = new THREE.MeshStandardMaterial({ color: book3Color });
const book3Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book3 = new THREE.Mesh(book3Geometry, book3Material);
scene.add(book3);
book3.position.set(-1, 4.1, -4.6); 
book3.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Book 4
const book4Color = 0xD162A4; 
const book4Material = new THREE.MeshStandardMaterial({ color: book4Color });
const book4Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book4 = new THREE.Mesh(book4Geometry, book4Material);
scene.add(book4);
book4.position.set(-0.5, 4.1, -4.4); 
book4.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Book 5
const book5Color = 0xA30262; 
const book5Material = new THREE.MeshStandardMaterial({ color: book5Color });
const book5Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book5 = new THREE.Mesh(book5Geometry, book5Material);
scene.add(book5);
book5.position.set(0, 4.1, -4.2); 
book5.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Book 6
const book6Color = 0xD162A4; 
const book6Material = new THREE.MeshStandardMaterial({ color: book6Color });
const book6Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book6 = new THREE.Mesh(book6Geometry, book6Material);
scene.add(book6);
book6.position.set(0.5, 4.1, -4); 
book6.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Book 7
const book7Color = 0xA30262; 
const book7Material = new THREE.MeshStandardMaterial({ color: book7Color });
const book7Geometry = new THREE.BoxGeometry(0.5, 2, 2); 
const book7 = new THREE.Mesh(book7Geometry, book7Material);
scene.add(book7);
book7.position.set(1, 4.1, -3.8); 
book7.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Flower Pot 1
const flowerPotColor1 = 0xB17D9C; 
const flowerPotMaterial1 = new THREE.MeshStandardMaterial({ color: flowerPotColor1 });
const flowerPotGeometry1 = new THREE.CylinderGeometry(0.6, 0.4, 0.8, 32);
const flowerPot1 = new THREE.Mesh(flowerPotGeometry1, flowerPotMaterial1);

scene.add(flowerPot1);
flowerPot1.position.set(-1.5, 1.4, -4.5); 
flowerPot1.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Soil 1
const soilColor1 = 0x65514A; 
const soilMaterial1 = new THREE.MeshStandardMaterial({ color: soilColor1 });
const soilGeometry1 = new THREE.CylinderGeometry(0.49, 0.2, 0.8, 32);
const soilPot1 = new THREE.Mesh(soilGeometry1, soilMaterial1);

scene.add(soilPot1);
soilPot1.position.set(-1.5, 1.45, -4.5); 
soilPot1.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shrub 1
const shrubGeometry1 = new THREE.SphereGeometry( 0.3, 5, 6 ); 
const shrubMaterial1 = new THREE.MeshBasicMaterial( { color: 0x4E5A3E } ); 
const shrub1 = new THREE.Mesh( shrubGeometry1, shrubMaterial1 ); 

scene.add(shrub1);
shrub1.position.set(-1.5, 1.9, -4.5); 
shrub1.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Flower Pot 2
const flowerPotColor2 = 0x93697F; 
const flowerPotMaterial2 = new THREE.MeshStandardMaterial({ color: flowerPotColor2 });
const flowerPotGeometry2 = new THREE.CylinderGeometry(0.6, 0.4, 0.8, 32);
const flowerPot2 = new THREE.Mesh(flowerPotGeometry2, flowerPotMaterial2);

scene.add(flowerPot2);
flowerPot2.position.set(-0.3, 1.4, -4); 
flowerPot2.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Soil 2
const soilColor2 = 0x65514A; 
const soilMaterial2 = new THREE.MeshStandardMaterial({ color: soilColor2 });
const soilGeometry2 = new THREE.CylinderGeometry(0.49, 0.2, 0.8, 32);
const soilPot2 = new THREE.Mesh(soilGeometry2, soilMaterial2);

scene.add(soilPot2);
soilPot2.position.set(-0.3, 1.45, -4); 
soilPot2.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Shrub 2
const shrubGeometry2 = new THREE.SphereGeometry( 0.3, 5, 6 ); 
const shrubMaterial2 = new THREE.MeshBasicMaterial( { color: 0x4E5A3E } ); 
const shrub2 = new THREE.Mesh( shrubGeometry2, shrubMaterial2 ); 

scene.add(shrub2);
shrub2.position.set(-0.3,2, -4); 
shrub2.rotation.set(Math.PI / 1, Math.PI / 7, Math.PI / 1);

// Light setup 
const ambientLight = new THREE.AmbientLight(0x808080, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFDB813, 2); 
directionalLight.position.set(-4.9, 3, -0.5);
scene.add(directionalLight);

// Animation 
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

