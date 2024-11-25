import "./style.css";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  FLOOR_SICE_COUNT,
  MAX_FLOOR_HEIGHT,
  MAX_PARTICAL_COUNT,
} from "./config";
import { createSnowflake, drawSnowflake, moveSnowflake } from "./snowflake";
import {
  accumulateSnow,
  checkCollision,
  createSnowAccumulator,
  drawSnowAccumulators,
} from "./snow_accumulator";

/**
 * @type{Array.<Snowflake>}
 */
const snowFlakes = [];

/**
 * @type SnowAccumulator[]
 */
const floor = [];

const sectionSize = CANVAS_WIDTH / FLOOR_SICE_COUNT;
/**
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * @type {CanvasRenderingContext2D}
 */
let ctx;

let lastSpawn = 0;
let lastFrame = 0;

let isPlowing = false;

window.onload = init;

function init() {
  // @ts-ignore -- I dunno how to get ts / jsdoc to be ok with this
  canvas = document.getElementById("main");

  ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  for (let i = 0; i < FLOOR_SICE_COUNT; i++) {
    floor.push(
      createSnowAccumulator(i * sectionSize, CANVAS_HEIGHT, sectionSize),
    );
  }

  window.requestAnimationFrame(gameLoop);
}

/**
 * @param time {DOMHighResTimeStamp}
 */
function gameLoop(time) {
  const delta = time - lastFrame;

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if (time - lastSpawn > 500 && snowFlakes.length < MAX_PARTICAL_COUNT) {
    for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
      snowFlakes.push(createSnowflake());
    }
  }

  snowFlakes.forEach((flake, idx) => {
    moveSnowflake(flake, delta);
    const floorIdx = Math.floor(flake.x / sectionSize);

    if (checkCollision(floor[floorIdx], flake)) {
      if (!isPlowing) {
        accumulateSnow(floor[floorIdx], flake);
      }
      snowFlakes[idx] = createSnowflake();
    }
    drawSnowflake(flake, ctx);
  });

  const avgHeight =
    floor.reduce((acc, sa) => acc + sa.height, 0) / floor.length;

  if (avgHeight > MAX_FLOOR_HEIGHT) {
    isPlowing = true;
  }

  if (isPlowing) {
    // plow the snow and reset the accumulators
    floor.forEach((sa) => {
      sa.height = 0;
      sa.accumulator = 0;
    });
    isPlowing = false;
  }

  drawSnowAccumulators(ctx, floor);

  lastFrame = time;
  window.requestAnimationFrame(gameLoop);
}
