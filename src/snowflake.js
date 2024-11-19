import {
  CANVAS_WIDTH,
  MAX_SIZE,
  MAX_SPEED,
  MIN_SIZE,
  MIN_SPEED,
} from "./config";

/**
 * @returns {Snowflake}
 */
export function createSnowflake() {
  return {
    x: Math.floor(Math.random() * CANVAS_WIDTH),
    y: -1,
    speed: Math.random() * (MIN_SPEED - MAX_SPEED) + MAX_SPEED,
    size: Math.floor(Math.random() * (MIN_SIZE - MAX_SIZE) + MAX_SIZE),
  };
}

/**
 * @param {Object} snowflake
 * @param {number} snowflake.x
 * @param {number} snowflake.y
 * @param {number} snowflake.size
 * @param {CanvasRenderingContext2D} ctx
 */
export function drawSnowflake({ x, y, size }, ctx) {
  ctx.beginPath();
  ctx.rect(x, y, size, size);
  ctx.fillStyle = "#fff";
  ctx.fill();
}

/**
 * @param {Snowflake} snowflake
 * @param {number} delta
 */
export function moveSnowflake(snowflake, delta) {
  snowflake.y += snowflake.speed * delta;
}
