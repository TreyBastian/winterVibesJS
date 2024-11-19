import "./style.css";
import Snowflake from "./snowflake";
import { CANVAS_HEIGHT, CANVAS_WIDTH, MAX_PARTICAL_COUNT } from "./config";
import Floor from "./floor";

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let lastSpawn: DOMHighResTimeStamp = 0;
let floor = new Floor();
let lastFrame: number = 0;
let fps = 0;
const snowFlakes: Snowflake[] = [];

window.onload = init;

function init() {
  canvas = document.getElementById("main") as HTMLCanvasElement;
  context = canvas.getContext("2d")!;
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  window.requestAnimationFrame(gameLoop);
}

function gameLoop(delta: DOMHighResTimeStamp) {
  fps = Math.round(1 / ((delta - lastFrame) / 1000));
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if (delta - lastSpawn > 500 && snowFlakes.length < MAX_PARTICAL_COUNT) {
    for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
      snowFlakes.push(new Snowflake());
    }
  }

  snowFlakes.forEach((flake) => {
    flake.move();
    if (floor.checkColission(flake)) {
      flake.reset();
    }
    flake.draw(context);
  });

  floor.draw(context);
  context.fillText("FPS: " + fps, 10, 30);
  lastFrame = delta;
  window.requestAnimationFrame(gameLoop);
}
