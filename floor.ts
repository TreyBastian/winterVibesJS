import { CANVAS_HEIGHT, CANVAS_WIDTH, FLOOR_RAISE_THRESHOLD } from "./config";
import Snowflake from "./snowflake";

export default class Floor {
  y: number = CANVAS_HEIGHT;
  accumulator = 0;

  checkColission(flake: Snowflake): Boolean {
    if (flake.y >= this.y) {
      this.accumulator++;

      if (this.accumulator % FLOOR_RAISE_THRESHOLD == 0) {
        this.y -= 1;
        console.log("floor raised");
      }
      return true;
    }
    return false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(0, this.y, CANVAS_WIDTH, CANVAS_HEIGHT - this.y);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }
}
