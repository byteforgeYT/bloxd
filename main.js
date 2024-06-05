const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");

//view port
const vp = {
  w: 800,
  h: 800,
  size: 50,
};
canvas.width = vp.w;
canvas.height = vp.h;

//interaction setup
let mouseX = 0;
let mouseY = 0;
let CLICKED = false;

//utilites
let FRAMECOUNT = 0;
let SCENE = "strt";
let score = 0;
let highscore = 0;
let gamestate = "menu";

//enemy setup
let enemies = [];
let enemycount = 0;
let enemyinterval = 100;

for (let i = 0; i < enemycount; i++) {
  enemies.push({
    x: Math.random() * (canvas.width - 20),
    y: Math.random() * -canvas.height,
    width: vp.size,
    height: vp.size,
  });
}

//scenes
function strt() {
  c.clearRect(0, 0, vp.w, vp.h);
  c.fillStyle = "red";
  c.fillRect(0, 0, vp.w, vp.h);

  c.drawText("BLOXD", vp.w / 2, vp.h / 2);
}
function play() {
  c.clearRect(0, 0, vp.w, vp.h);
  c.drawText("Score: " + score, 10, 10);
}

function GameLoop() {
  c.clearRect(0, 0, vp.w, vp.h);

  switch (SCENE) {
    case "strt":
      strt();
      break;
    case "play":
      play();
      break;
  }
  FRAMECOUNT++;

  //if (FRAMECOUNT % 200 === 0) save();

  CLICKED = false;
  window.requestAnimationFrame(GameLoop);
}
