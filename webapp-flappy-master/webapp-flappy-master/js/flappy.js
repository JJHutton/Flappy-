// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0
var labelScore;
var player;
var pipes = [];
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {

  game.load.image("playerimage", "../assets/flappy-cropped.png");


game.load.audio("score", "../assets/poin.ogg");
game.load.image("pipeBlock","../assets/pipe_pink.png");
game.load.image("pipeEND", "../assets/pipe-end.png")

   labelScore = game.add.text(0,0, score.toString());
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene

    game.stage.setBackgroundColor("#ff8400");





    game.input
        .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(playerJump);


    player = game.add.sprite(100,100, "playerimage");
    game.physics.arcade.enable(player);
    player.body.gravity.y = 200;

generatePIPE();

game.physics.startSystem(Phaser.Physics.ARCADE);

  var pipeInterval = 2 * Phaser.Timer.SECOND;
  game.time.events.loop(
      pipeInterval,
      generatePIPE
    );
}

function update() {
    game.physics.arcade.overlap(
          player,
        pipes,
        gameOver);
}
function gameOver(){
  registerScore(score);
  score = 0
  game.state.restart();
  

}
function addPipeBlock(x, y){
  var block = game.add.sprite(x, y, "pipeBlock");
  pipes.push(block);

  game.physics.arcade.enable(block);
  block.body.velocity.x = -200
}
function generatePIPE(){
  var gapStart = game.rnd.integerInRange(1, 5);
  for(var count=0; count < 8; count += 1){
    if (count != gapStart && count != gapStart + 1){
      addPipeBlock (800, count * 50);
    }
  }
  changeScore();
}
function playerJump(){
  player.body.velocity.y = -150;
}


function clickHandler(event) {
  game.add.sprite(event.x, event.y, "playerimage" );
  game.sound.play("score");
}
  function spaceHandler() {
    score = score + 1
    labelScore.setText(score.toString());
    game.sound.play("score");
}


function changeScore(){
    score = score + 1
    labelScore.setText(score.toString());
}
