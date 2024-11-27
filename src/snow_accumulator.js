import Config from "./config.js";

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
 * @returns {boolean}
 */
export function snowAccumulatorCollisionY(sa, { y }) {
  if (y >= sa.y - sa.height) {
    return true;
  }

  return false;
}

/**
 * @param {SnowAccumulator} sa
 * @param {Object} item
 * @param {number} item.x
 * @returns {boolean}
 */
export function snowAccumulatorCollisionX(sa, { x }) {
  if (x >= sa.x && x <= sa.x + sa.width) {
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
 * @param {SnowAccumulator} sa
 */
export function resetSnowAccumulator(sa) {
  sa.accumulator = 0;
  sa.height = 0;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {SnowAccumulator[]} accumulators
 * @param {Plow} plow
 */
export function drawSnowAccumulators(ctx, accumulators, plow) {
  const points = accumulators.map((sa) => [sa.x, sa.y - sa.height]);
  const avgHeight =
    accumulators.reduce((acc, sa) => acc + sa.height, 0) / accumulators.length;
  const normalized = points
    .map(([x, y]) => [x, y - avgHeight])
    .filter(([x]) => !(plow && plow.direction === "left" && x >= plow.x));

  ctx.beginPath();
  normalized.forEach(([x, y]) => {
    ctx.lineTo(x, y);
  });
  plow &&
    normalized.length > 0 &&
    ctx.lineTo(plow.x, normalized[normalized.length - 1][1]);
  plow && ctx.lineTo(plow.x, Config.canvas.height);
  !plow &&
    ctx.lineTo(Config.canvas.width, normalized[normalized.length - 1][1]);
  ctx.lineTo(Config.canvas.width, Config.canvas.height);
  ctx.lineTo(0, Config.canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fill();
}
