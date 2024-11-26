import Config from "./config";

/**
 * @param {number} y
 * @param {number} x
 * @param {number} width
 * @returns {SnowAccumulator}
 */
export function createSnowAccumulator(x, y, width, height = 0) {
  return {
    accumulator: 0,
    y,
    x,
    width,
    height,
  };
}

/**
 * @param {SnowAccumulator} sa
 * @param {Object} item
 * @param {number} item.y
 */
export function checkCollision(sa, { y }) {
  if (y >= sa.y - sa.height) {
    return true;
  }

  return false;
}

/**
 * @param {SnowAccumulator} sa
 * @param {Object} item
 * @param {number} item.size
 */
export function accumulateSnow(sa, { size }) {
  sa.accumulator += size;

  if (sa.accumulator % Config.groundAccumulator.max == 0) {
    sa.height += 1;
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {SnowAccumulator[]} accumulators
 */
export function drawSnowAccumulators(ctx, accumulators) {
  const points = accumulators.map((sa) => [sa.x, sa.y - sa.height]);
  const avgHeight =
    accumulators.reduce((acc, sa) => acc + sa.height, 0) / accumulators.length;
  const noramlized = points.map(([x, y]) => [x, y - avgHeight]);

  ctx.beginPath();
  noramlized.forEach(([x, y]) => ctx.lineTo(x, y));
  ctx.lineTo(Config.canvas.width, noramlized[noramlized.length - 1][1]);
  ctx.lineTo(Config.canvas.width, Config.canvas.height);
  ctx.lineTo(0, Config.canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fill();
}
