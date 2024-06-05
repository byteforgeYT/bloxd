const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");

//view port
const vp = {
  w: 600,
  h: 600,
  size: 50,
};
canvas.width = vp.w;
canvas.height = vp.h;

//interaction setup
let mouseX = 0;
let mouseY = 0;
let CLICKED = false;
let keys = {};

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
 
  c.fillStyle = "red";
  c.fillText("BLOXD", vp.w / 2, vp.h / 2);


}
function play() {
  c.fillStyle = "red";
  c.fillText("Score: " + score, 10, 10);
}

//finish interaction stuff
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
  delete keys[e.key];
});
canvas.addEventListener("mousemove", function (event) {
  const rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  //console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
});
canvas.addEventListener("click", function (event) {
  CLICKED = true;
});

function GameLoop() {
  c.clearRect(0, 0, vp.w, vp.h);
  c.fillStyle = "rgba(0,0,0,100)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  //game logic
  switch (SCENE) {
    case "strt":
      strt();
      break;
    case "play":
      play();
      break;
  }


  FRAMECOUNT++;

  CLICKED = false;
  window.requestAnimationFrame(GameLoop);
}

GameLoop();