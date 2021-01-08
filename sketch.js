var canvas, blueBlock, orangeBlock, redBlock, greenBlock;
var jumpingBox, music, edges;

function preload() {
    music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 600);

    // Create 4 different surfaces
    blueBlock = createSprite(100, 580, 190, 30);
    blueBlock.shapeColor = "blue";
    orangeBlock = createSprite(300, 580, 190, 30);
    orangeBlock.shapeColor = "orange";
    redBlock = createSprite(500, 580, 190, 30);
    redBlock.shapeColor = "red";
    greenBlock = createSprite(700, 580, 190, 30);
    greenBlock.shapeColor = "green";

    // Create jumpingBox sprite and give velocity
    jumpingBox = createSprite(random(20, 750), 300, 25, 25);
    jumpingBox.shapeColor = "white";
    jumpingBox.velocityX = 5;
    jumpingBox.velocityY = 5;
}

function draw() {
    background(rgb(169, 169, 169));

    // Create edgeSprite
    edges = createEdgeSprites();
    jumpingBox.bounceOff(edges);

    // Add conditions to check if jumpingBox is touching surface and make it bounce
    // Play music and change color if jumpingBox is touching blueBlock
    if (jumpingBox.isTouching(blueBlock)) {
        music.play();
        jumpingBox.shapeColor = "blue";
        jumpingBox.bounceOff(blueBlock);
    }

    // Change color, stop music and stop jumpingBox movement if jumpingBox is touching orangeBlock
    if (jumpingBox.isTouching(orangeBlock)) {
        music.stop();
        jumpingBox.shapeColor = "orange";
        jumpingBox.velocityX = 0;
        jumpingBox.velocityY = 0;
    }

    // Change color if jumpingBox is touching redBlock
    if (jumpingBox.isTouching(redBlock)) {
        jumpingBox.shapeColor = "red";
        jumpingBox.bounceOff(redBlock);
    }

    // Change color if jumpingBox is touching greenBlock
    if (jumpingBox.isTouching(greenBlock)) {
        jumpingBox.shapeColor = "green";
        jumpingBox.bounceOff(greenBlock);
    }
    drawSprites();
}