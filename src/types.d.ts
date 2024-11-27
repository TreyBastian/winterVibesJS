export {};
declare global {
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
      direction: "left" | "right" | "random";
    };
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
    height: number;
    width: number;
    direction: "left" | "right";
  };
}
