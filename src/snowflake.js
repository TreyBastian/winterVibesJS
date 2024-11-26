import Config from "./config";

/**
 * @returns {Snowflake}
 */
export function createSnowflake() {
  return {
    x: Math.floor(Math.random() * Config.canvas.width),
    y: -1,
    speed:
      Math.random() * (Config.snow.minSpeed - Config.snow.maxSpeed) +
      Config.snow.maxSpeed,
    size: Math.floor(
      Math.random() * (Config.snow.minSize - Config.snow.maxSize) +
        Config.snow.maxSize,
    ),
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
