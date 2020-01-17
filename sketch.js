var canvas, backgroundImage;

var gameState = 0;
var votersCount;
var database;
var form, voter, game;



function setup(){
  canvas = createCanvas(650,550);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
}







