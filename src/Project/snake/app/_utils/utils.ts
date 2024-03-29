import { GRID_WIDTH, GRID_HEIGHT } from './global';
import { Segment } from './types';

/** Generate a random position for food */
export const randomFoodPosition = (snakebody: Segment[]): Segment => {
  let newFoodPosition: Segment;

  do {
    newFoodPosition = {
      x: Math.floor(Math.random() * (GRID_WIDTH - 1)) + 1,
      y: Math.floor(Math.random() * (GRID_HEIGHT - 1)) + 1,
    };
  } while (
    snakebody.some(
      segment =>
        segment.x === newFoodPosition.x && segment.y === newFoodPosition.y,
    )
  );

  return newFoodPosition;
};

/** Check if food has been eaten */
export const isFoodEaten = (head: Segment, food: Segment): boolean => {
  if (!head || !food) {
    return false;
  }
  return head.x === food.x && head.y === food.y;
};

/** Check if snake has collided with bounds or itself */
export const checkCollision = (snakebody: Segment[]): boolean => {
  const head = snakebody[0];

  // Check for collision with bounds
  if (
    head.x > GRID_WIDTH ||
    head.x <= 0 ||
    head.y > GRID_HEIGHT ||
    head.y <= 0
  ) {
    return true;
  }

  // Check for collision with self
  for (let i = 1; i < snakebody.length; i++) {
    if (head.x === snakebody[i].x && head.y === snakebody[i].y) {
      return true;
    }
  }

  return false; // No collision detected
};
