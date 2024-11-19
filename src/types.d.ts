export {};
declare global {
  type Snowflake = {
    x: number;
    y: number;
    speed: number;
    size: number;
  };

  type SnowAccumulator = {
    accumulator: number;
    y: number;
  };
}
