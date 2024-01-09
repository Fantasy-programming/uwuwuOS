import { useState, useEffect, useRef, useCallback } from 'react';
import useKeyboardInput from '../_utils/useKeyboardInput';

import {
  randomFoodPosition,
  isFoodEaten,
  checkCollision,
} from '../_utils/utils';
import {
  SNAKE_SPEED,
  GRID_WIDTH,
  GRID_HEIGHT,
  Segment,
} from '../_utils/global';

import GameOver from './GameOver';
import Gamebar from './Gamebar';
import Food from '../_icons/Food';
import Snakebody from './Snakebody';

import Style from './Game.module.scss';

const gameboardDimensions = {
  gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
  gridTemplateRows: `repeat(${GRID_HEIGHT}, 1fr)`,
};

const Game = () => {
  const [isOver, setIsOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const [snakebody, setSnakebody] = useState<Segment[]>([{ x: 6, y: 6 }]);
  const [food, setFood] = useState<Segment>({ x: 10, y: 10 });
  const [score, setScore] = useState(0);

  const inputDirection = useRef<Segment>({ x: 1, y: 0 });
  const lastInputDirection = useRef<Segment>({ x: 1, y: 0 });

  const currentRender = useRef<number>(0);
  const lastRender = useRef<number>(0);

  // Register the keydown event listener
  const handleSwitch = useCallback((key: string) => {
    switch (key) {
      case 'ArrowUp':
        if (lastInputDirection.current.y !== 0) break;
        inputDirection.current = { x: 0, y: -1 };
        lastInputDirection.current = { x: 0, y: -1 };
        break;
      case 'ArrowDown':
        if (lastInputDirection.current.y !== 0) break;
        inputDirection.current = { x: 0, y: 1 };
        lastInputDirection.current = { x: 0, y: 1 };
        break;
      case 'ArrowLeft':
        if (lastInputDirection.current.x !== 0) break;
        inputDirection.current = { x: -1, y: 0 };
        lastInputDirection.current = { x: -1, y: 0 };
        break;
      case 'ArrowRight':
        if (lastInputDirection.current.x !== 0) break;
        inputDirection.current = { x: 1, y: 0 };
        lastInputDirection.current = { x: 1, y: 0 };
        break;
    }
  }, []);

  useKeyboardInput(handleSwitch);

  // Animation Loop
  const animate = (timestamp: DOMHighResTimeStamp) => {
    currentRender.current = requestAnimationFrame(animate);
    const secondsSinceLastRender = (timestamp - lastRender.current) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    updateSnake();
    lastRender.current = timestamp;
  };

  // Start the game loop
  useEffect(() => {
    if (!isPaused && !isOver) {
      currentRender.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(currentRender.current);
  });

  const updateSnake = () => {
    if (isPaused) return;
    setSnakebody(prev => {
      const newSnakebody = prev.map((segment, i) => {
        if (i === 0) {
          return {
            x: segment.x + inputDirection.current.x,
            y: segment.y + inputDirection.current.y,
          };
        }
        return { ...prev[i - 1] };
      });
      return newSnakebody;
    });
    updateFood();
    reviewGame();
  };

  const reviewGame = () => {
    const collision = checkCollision(snakebody);
    if (!collision) return;
    setIsOver(true);
  };

  const updateFood = () => {
    if (!isFoodEaten(snakebody[0], food)) return;

    // Move the food
    const newFoodPosition = randomFoodPosition(snakebody);
    setFood(newFoodPosition);

    // Expand the snake
    const lastSegment = snakebody[snakebody.length - 1];
    setSnakebody(prev => [...prev, lastSegment]);
    setScore(prevScore => prevScore + 15);
  };

  return (
    <div className={Style.game}>
      {isOver && <GameOver score={score} onRestart={() => setIsOver(false)} />}
      <Gamebar
        isPaused={isPaused}
        score={score}
        handlePause={() => setIsPaused(prev => !prev)}
      />
      <main className={Style.gameboardWrapper}>
        <div
          className={Style.gameboard}
          style={gameboardDimensions}
          id="snake-board"
        >
          <Snakebody segments={snakebody} />
          <Food
            className={Style.food}
            style={{ gridRowStart: food.y, gridColumnStart: food.x }}
          />
        </div>
      </main>
    </div>
  );
};

export default Game;
