import { CANVAS_WIDTH } from "./config";

export default class Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;

  constructor() {
    this.x = Math.floor(Math.random() * CANVAS_WIDTH);
    this.y = -1;
    this.speed = Math.random();
    this.size = Math.floor(Math.random() * 4);
  }

  reset() {
    this.x = Math.floor(Math.random() * CANVAS_WIDTH);
    this.y = -1;
    this.speed = Math.random();
    this.size = Math.floor(Math.random() * 4);
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.rect(this.x, this.y, this.size, this.size);
    context.fillStyle = "#fff";
    context.fill();
  }

  move() {
    this.y += this.speed;
    const sway = Math.random() < 0.5;
    if (sway) {
      const direction = Math.random() < 0.5;
      if (direction) {
        this.x += (this.speed * 5) / 10;
      } else {
        this.x -= (this.speed * 5) / 10;
      }
    }
  }
}
