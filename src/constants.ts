import { StarSize, StarsMap } from './types';

export const DELTA = Math.PI / 8;
export const INITIAL_DELTA = Math.PI / 250;
export const vw = window.innerWidth;
export const vh = window.innerHeight;

export const WIDTH = vw;
export const HEIGHT = vh;

const MAX_CIRCLE_RADIUS = 132;
const MAX_WIDTH = 430;
export const CIRCLE_RADIUS = Math.min(MAX_CIRCLE_RADIUS, (vw / MAX_WIDTH) * MAX_CIRCLE_RADIUS);
export const PUPIL_RADIUS = CIRCLE_RADIUS * 0.4;
export const PUPIL_DISTANCE = CIRCLE_RADIUS * 0.8;
export const PUPIL_SIZE = PUPIL_RADIUS * 2;
export const LENGTH = Math.max(WIDTH, HEIGHT) * 0.6;
export const CX = WIDTH / 2;
export const CY = HEIGHT / 2;

export const STAR_SIZE_PX: Record<StarSize, number> = {
  xl: 98,
  lg: 90,
  md: 76,
  sm: 66,
};

export const STARS: StarsMap = {
  'star-1': { id: 'star-1', xPercent: 0.144, yPercent: 0.137, size: 'sm', selected: false },
  'star-2': { id: 'star-2', xPercent: 0.496, yPercent: 0.182, size: 'lg', selected: false },
  'star-3': { id: 'star-3', xPercent: 0.795, yPercent: 0.227, size: 'sm', selected: false },
  'star-4': { id: 'star-4', xPercent: 0.229, yPercent: 0.335, size: 'md', selected: false },
  'star-5': { id: 'star-5', xPercent: 0.805, yPercent: 0.349, size: 'lg', selected: false },
  'star-6': { id: 'star-6', xPercent: 0.093, yPercent: 0.587, size: 'md', selected: false },
  'star-7': { id: 'star-7', xPercent: 0.861, yPercent: 0.622, size: 'lg', selected: false },
  'star-8': { id: 'star-8', xPercent: 0.395, yPercent: 0.724, size: 'sm', selected: false },
  'star-9': { id: 'star-9', xPercent: 0.643, yPercent: 0.757, size: 'md', selected: false },
  'star-10': { id: 'star-10', xPercent: 0.112, yPercent: 0.913, size: 'xl', selected: false },
  'star-11': { id: 'star-11', xPercent: 0.787, yPercent: 0.936, size: 'sm', selected: false },
};
