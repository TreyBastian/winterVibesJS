import {
  CANVAS_WIDTH,
  MAX_SIZE,
  MAX_SPEED,
  MIN_SIZE,
  MIN_SPEED,
  SWAY_THRESHOLD,
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
 */
export function moveSnowflake(snowflake) {
  snowflake.y += snowflake.speed;
  const sway = Math.random() < 0.5 && snowflake.speed < SWAY_THRESHOLD;
  if (sway) {
    const direction = Math.random() < 0.5;
    if (direction) {
      snowflake.x += (snowflake.speed * 5) / 10;
    } else {
      snowflake.x -= (snowflake.speed * 5) / 10;
    }
  }
}
