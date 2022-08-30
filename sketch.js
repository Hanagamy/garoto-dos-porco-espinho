var gameState=1;
var moeda, moedaIMG, moedaG;
var froresta1,froresta1IMG;
var player, playerIMGrun, playerIMGjump, playerIMGdead;
var xao;
var ps, psIMG, psGRP;
var pontos = 0;

function preload(){
moedaIMG = loadImage('assets/moeda-1.png');
froresta1IMG = loadImage('assets/froresta-inicio.png');
psIMG = loadImage('assets/porco.png');
playerIMGrun= loadAnimation(
'assets/BUNEQUINHO/Run (1).png',
'assets/BUNEQUINHO/Run (2).png',
'assets/BUNEQUINHO/Run (3).png',
'assets/BUNEQUINHO/Run (4).png',
'assets/BUNEQUINHO/Run (5).png',
'assets/BUNEQUINHO/Run (6).png',
'assets/BUNEQUINHO/Run (7).png',
'assets/BUNEQUINHO/Run (8).png',
'assets/BUNEQUINHO/Run (9).png',
'assets/BUNEQUINHO/Run (10).png',
'assets/BUNEQUINHO/Run (11).png',
'assets/BUNEQUINHO/Run (12).png',
'assets/BUNEQUINHO/Run (13).png',
'assets/BUNEQUINHO/Run (14).png',
'assets/BUNEQUINHO/Run (15).png');
playerIMGjump= loadAnimation(
'assets/BUNEQUINHO/Jump (1).png',
'assets/BUNEQUINHO/Jump (2).png',
'assets/BUNEQUINHO/Jump (3).png',
'assets/BUNEQUINHO/Jump (4).png',
'assets/BUNEQUINHO/Jump (5).png',
'assets/BUNEQUINHO/Jump (6).png',
'assets/BUNEQUINHO/Jump (7).png',
'assets/BUNEQUINHO/Jump (8).png',
'assets/BUNEQUINHO/Jump (9).png',
'assets/BUNEQUINHO/Jump (10).png',
'assets/BUNEQUINHO/Jump (11).png',
'assets/BUNEQUINHO/Jump (12).png',
'assets/BUNEQUINHO/Jump (13).png',
'assets/BUNEQUINHO/Jump (14).png',
'assets/BUNEQUINHO/Jump (15).png');
playerIMGdead= loadAnimation('assets/BUNEQUINHO/Dead (15).png');
}
function setup(){

canvas = createCanvas(1495, 400);
froresta1 = createSprite(2000,200,10,10);
froresta1.addImage(froresta1IMG);

player = createSprite(130,320,10,10);
player.addAnimation('corre',playerIMGrun);
player.addAnimation('pula',playerIMGjump);
player.addAnimation('morre desgrassa',playerIMGdead);
player.scale = 0.2;

xao = createSprite(747.5,390,4000,30)
player.setCollider('circle',-25,0,200);

psG = createGroup();
moedaG = createGroup();

}
function draw(){
  
    background(0);
    drawSprites();
    fill("white");
    textSize(40);
    text("Score: " + pontos,50,50);
    
    if(gameState===1){
      froresta1.velocity.x=-5-pontos/200;
    
      pontos = pontos + Math.round(getFrameRate()/60);
      if(froresta1.position.x<0){
        froresta1.position.x=froresta1.width/3.2;
      }
      if(player.collide(moedaG)){
        pontos = pontos+25;
        player.velocity.x=0;
        moedaG.destroyEach();
      }
    poicuspino();
    moeida();
    if(keyIsDown(UP_ARROW)&& player.position.y >= 205 && player.collide(xao)) {
      player.velocity.y = -12;
      player.changeAnimation('pula');
    }
    else{
      player.changeAnimation('corre');
    }}
    
    if(gameState===2){
     froresta1.velocity.x = 0
     psG.setVelocityXEach(0);
      player.changeAnimation('morre desgrassa');
      player.velocity.x=0;
      moedaG.setVelocityXEach(0);
    }
    
  if(player.collide(psG)){
    gameState=2
  }
  player.velocity.y = player.velocity.y + 0.4;
  player.collide(xao);
  xao.visible = false;
  player.collide(psG);
  player.collide(moedaG);

  
  
  
  

}
function poicuspino(){
  if(frameCount % 150===0){
    ps = createSprite(1500,330,10,10);
    ps.velocity.x = -(5+3*pontos/100);
    ps.addImage(psIMG);
    ps.scale = 0.4;
    ps.lifetime = 260;
    psG.add(ps);
  }
}
function moeida(){
  if(frameCount % 330===0){
    moeda = createSprite(1500,330,10,10);
    moeda.velocity.x = -(5+3*pontos/150);
    moeda.addImage(moedaIMG);
    moeda.scale = 0.4;
    moeda.lifetime = 320;
    moedaG.add(moeda);
  }
}