/**
 * @param {string} slug
 * @returns {Promise<Sprite>}
 */
export async function loadSprite(slug) {
  const image = new Image();
  image.src = `./assets/${slug}.png`;

  const { frames } = await fetch(`./assets/${slug}.json`).then((res) =>
    res.json(),
  );
  return {
    image,
    width: frames[0].frame.w,
    height: frames[0].frame.h,
    currentFrame: -1,
    lastUpdate: 0,
    frames: frames.map(({ frame: { x, y }, duration }) => ({
      x,
      y,
      duration,
    })),
  };
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Sprite} sprite
 * @param {number} x
 * @param {number} y
 * @param {DOMHighResTimeStamp} timestamp
 */
export function drawSprite(ctx, sprite, x, y, scale, timestamp) {
  if (
    sprite.currentFrame === -1 ||
    timestamp - sprite.lastUpdate > sprite.frames[sprite.currentFrame].duration
  ) {
    sprite.currentFrame = (sprite.currentFrame + 1) % sprite.frames.length;
    sprite.lastUpdate = timestamp;
  }
  const frame = sprite.frames[sprite.currentFrame];
  ctx.drawImage(
    sprite.image,
    frame.x,
    frame.y,
    sprite.width,
    sprite.height,
    x,
    y,
    sprite.width * scale,
    sprite.height * scale,
  );
}
