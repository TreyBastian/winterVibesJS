import "./style.css";
import { CANVAS_HEIGHT, CANVAS_WIDTH, MAX_PARTICAL_COUNT } from "./config";
import { createSnowflake, drawSnowflake, moveSnowflake } from "./snowflake";
import {
  checkCollision,
  createSnowAccumulator,
  drawSnowAccumulator,
} from "./snow_accumulator";

/**
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * @type {CanvasRenderingContext2D}
 */
let ctx;

/**
 * @type{Array.<Snowflake>}
 */
const snowFlakes = [];

let lastSpawn = 0;
let floor = createSnowAccumulator(CANVAS_HEIGHT);

let lastFrame = 0;
let fps = 0;

window.onload = init;

function init() {
  // @ts-ignore -- I dunno how to get ts / jsdoc to be ok with this
  canvas = document.getElementById("main");

  ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  window.requestAnimationFrame(gameLoop);
}

/**
 * @param delta {DOMHighResTimeStamp}
 */
function gameLoop(delta) {
  fps = Math.round(1 / ((delta - lastFrame) / 1000));
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if (delta - lastSpawn > 500 && snowFlakes.length < MAX_PARTICAL_COUNT) {
    for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
      snowFlakes.push(createSnowflake());
    }
  }

  snowFlakes.forEach((flake, idx) => {
    moveSnowflake(flake);
    if (checkCollision(floor, flake)) {
      snowFlakes[idx] = createSnowflake();
    }
    drawSnowflake(flake, ctx);
  });

  drawSnowAccumulator(ctx, floor);
  ctx.fillText("FPS: " + fps, 10, 30);
  lastFrame = delta;

  window.requestAnimationFrame(gameLoop);
}
