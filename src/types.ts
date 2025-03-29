export type Point = { x: number; y: number };

export type ConePoints = {
  ray1: Point;
  ray2: Point;
  polygon: [Point, Point, Point];
};
