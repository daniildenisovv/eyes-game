const mod = (n: number, m: number) => ((n % m) + m) % m;

export const getNormalizeAngle = (angle: number) => mod(angle + Math.PI, 2 * Math.PI) - Math.PI;
