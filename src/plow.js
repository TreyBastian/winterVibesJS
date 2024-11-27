import Config from "./config";
import { drawSprite } from "./sprites";

/**
 * @returns {Plow}
 */
export function createPlow() {
  return {
    x: Config.plow.direction === "left" ? Config.canvas.width : -88,
    y: Config.canvas.height - 56,
    speed: Config.plow.speed,
    direction: Config.plow.direction,
    height: 56,
    width: 88,
  };
}

/**
 * @param {Plow} plow
 * @param {number} delta
 */
export function movePlow(plow, delta) {
  if (plow.direction === "left") {
    plow.x -= plow.speed * delta;
  } else {
    plow.x += plow.speed * delta;
  }
}

/**
 * @param {Plow} plow
 * @param {CanvasRenderingContext2D} ctx
 */
export function drawPlow(plow, ctx) {
  drawSprite(ctx, 0, 0, 44, 28, plow.x, plow.y, plow.width, plow.height);
}

/** @param {Plow} plow */
export function plowDone(plow) {
  return plow.direction === "left"
    ? plow.x + plow.width < 0
    : plow.x > Config.canvas.width;
}
