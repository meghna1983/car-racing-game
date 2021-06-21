
var database
var game
var player
var form
var gamestate=0
var playerCount=0

function setup(){
    database=firebase.database()
    createCanvas(500,500);
game=new Game()
game.getstate()
game.start()
  

}

function draw(){
    background("white");
 
}

