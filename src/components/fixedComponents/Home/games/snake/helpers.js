const CANVAS_SIZE = [444, 390];

const SNAKE_START = [
  [12, 11],
  [12, 12]
];

const APPLE_START = [8, 3];

const SCALE = 16;

const SPEED = 100;

const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0], // right
};


export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};