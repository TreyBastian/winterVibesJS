import { CANVAS_HEIGHT, CANVAS_WIDTH, FLOOR_RAISE_THRESHOLD } from "./config";

/**
 * @param {number} y
 * @returns {SnowAccumulator}
 */
export function createSnowAccumulator(y) {
  return {
    accumulator: 0,
    y,
  };
}

/**
 * @param {SnowAccumulator} sa
 * @param {Object} item
 * @param {number} item.y
 */
export function checkCollision(sa, { y }) {
  if (y >= sa.y) {
    sa.accumulator++;

    if (sa.accumulator % FLOOR_RAISE_THRESHOLD == 0) {
      sa.y -= 1;
    }
    return true;
  }
  return false;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {SnowAccumulator} sa
 */
export function drawSnowAccumulator(ctx, sa) {
  ctx.beginPath();
  ctx.rect(0, sa.y, CANVAS_WIDTH, CANVAS_HEIGHT - sa.y);
  ctx.fillStyle = "#fff";
  ctx.fill();
}
