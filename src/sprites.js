function loadSpriteSheet() {
  const image = new Image();
  image.src = "./assets/sprite_sheet.png";
  return image;
}
const sheet = loadSpriteSheet();

export function drawSprite(ctx, x, y, width, height, dx, dy, dWidth, dHeight) {
  ctx.drawImage(sheet, x, y, width, height, dx, dy, dWidth, dHeight);
}

export default sheet;
