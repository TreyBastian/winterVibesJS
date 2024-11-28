import Config from "./config.js";
import { drawSprite, loadSprite } from "./sprite.js";

const SPRITE = await loadSprite("snowplow");
/**
 * @returns {Plow}
 */
export function createPlow() {
  return {
    x:
      Config.plow.direction === "left"
        ? Config.canvas.width
        : SPRITE.width * Config.plow.scale,
    y: Config.canvas.height - SPRITE.height * Config.plow.scale,
    speed: Config.plow.speed,
    direction: Config.plow.direction,
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
 * @param {DOMHighResTimeStamp} timestamp
 */
export function drawPlow(plow, ctx, timestamp) {
  drawSprite(ctx, SPRITE, plow.x, plow.y, Config.plow.scale, timestamp);
}

/** @param {Plow} plow */
export function plowDone(plow) {
  return plow.direction === "left"
    ? plow.x + SPRITE.width * Config.plow.scale < 0
    : plow.x > Config.canvas.width;
}
