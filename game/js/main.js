import Ane from './Ane.js'
import Baby from './Baby.js'
import Dust from './Dust.js'
import Fruit from './Fruit.js'
import Halo from './Halo.js'
import Mom from './Mom.js'
import Wave from './Wave.js'
import Data from './Data.js'
import {fruitMonitor,sendFruit} from './commonFunctions.js'
let can1 = null;
let can2 = null;
let ctx1 = null;
let ctx2 = null;
const DEBUG = true;
let lastTime;
let deltaTime;
let canWidth = 0;
let canHeigh = 0;
let bgPic = new Image();
let ane = null;
let fruit = null;
let mom = null;
var baby = null;
let mx = 0;
let my = 0;
let data = null;
let wave;
let halo; 
let dust;

document.body.onload = function(){
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    bgPic.src = "src/background.jpg";

    lastTime = Date.now();
    deltaTime = 0;


    canWidth = can1.width;
    canHeigh = can1.height;

    ane = new Ane();
    ane.init(canHeigh);
    fruit = new Fruit();
    fruit.init();
    mom = new Mom();
    mom.init(canWidth,canHeigh);
    baby = new Baby();
    baby.init(canWidth,canHeigh);

    mx = canWidth * 0.5;
    my = canHeigh * 0.5;

    can1.addEventListener("mousemove",onMouseMove,false);

    data = new Data();
    wave = new Wave();
    wave.init();

    halo = new Halo();
    halo.init();
   
    dust = new Dust();
    dust.init(canWidth,canHeigh);
    gameloop();
}

function gameloop(){
    requestAnimFrame(gameloop);  
    
    let now  = Date.now();         
    deltaTime = now - lastTime;   
    lastTime = now;               
    if(deltaTime>40) deltaTime = 40;

    drawBackground();
    ctx1.clearRect(0,0,canWidth,canHeigh);
    ane.draw(ctx2,deltaTime);
    fruitMonitor(fruit);
    fruit.draw(ane,deltaTime);
    momFruitsCollision(data,fruit,mom);
    momBabyCollision(data,mom,baby,DEBUG);
    mom.draw(ctx1);
    baby.draw(ctx1,mom,deltaTime);
    data.draw(ctx1,can1,deltaTime);
    wave.draw(ctx1);
    halo.draw(ctx1,deltaTime);
    dust.draw(ctx1,deltaTime);
}
function onMouseMove(e){
    //游戏结束，鼠标不能控制大鱼
    if(data.gameOver){return;}

    if(e.offsetX || e.layerX){
      mx = e.offsetX == undefined ? e.layerX : e.offsetX;
    }
    if(e.offsetY || e.layerY){
     my = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
    //console.log(mx+"|"+my);

         
}

function drawBackground(){
    ctx2.drawImage(bgPic,0,0,canWidth,canHeigh);
}


