var gameState=0
var bulletImg
var cbulletImg
var corona
var doctor,line1
var form,game
var bg,bg1,edges;

function preload(){
    bg = loadImage("images/bg4.jpg")

    bg1 = loadImage("images/bg3.jpg")
}

function setup(){

createCanvas(1300,600)
background(0)

form = new Button()
game = new Game()
line1 = createSprite(60,0,200,20)
line1.velocityY = -4

line1.visible = true;

 }

function draw(){

edges = createEdgeSprites();
line1.bounceOff(edges);

if (gameState===0){
    background(bg)
    form.display()
}
if (gameState===1){
    background(bg1)
    
}

drawSprites()

}