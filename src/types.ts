export type Point = { x: number; y: number };

export type ConePoints = {
  ray1: Point;
  ray2: Point;
  polygon: [Point, Point, Point];
};

export type StarSize = 'xl' | 'lg' | 'md' | 'sm';

export type Star = {
  id: string;
  xPercent: number;
  yPercent: number;
  size: StarSize;
  selected: boolean;
};

export type StarsMap = Record<string, Star>;
