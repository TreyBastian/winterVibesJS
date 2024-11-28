export {};
declare global {
  type PlowDirection = "left" | "right" | "random";
  type Config = {
    version: number;
    canvas: {
      width: number;
      height: number;
    };
    snow: {
      max: number;
      minSize: number;
      maxSize: number;
      minSpeed: number;
      maxSpeed: number;
    };
    groundAccumulator: {
      max: number;
      slices: number;
    };
    plow: {
      speed: number;
      direction: PlowDirection;
      scale: number;
    };
  };

  type SpriteFrame = {
    x: number;
    y: number;
    duration: number;
  };

  type Sprite = {
    image: HTMLImageElement;
    width: number;
    height: number;
    lastUpdate: number;
    currentFrame: number;
    frames: SpriteFrame[];
  };

  type Snowflake = {
    x: number;
    y: number;
    speed: number;
    size: number;
  };

  type SnowAccumulator = {
    accumulator: number;
    y: number;
    height: number;
    x: number;
    width: number;
  };

  type Plow = {
    speed: number;
    x: number;
    y: number;
    direction: PlowDirection;
  };
}
