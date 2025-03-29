import { getNormalizeAngle } from './getNormalizeAngle';

export const getShortestAngle = (from: number, to: number) => from + getNormalizeAngle(to - from);
