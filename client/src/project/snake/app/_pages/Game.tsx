import { useState, useEffect, useRef, useCallback } from 'react';
import useKeyboardInput from '@/shared/hooks/useKeyboardInput';

import { GRID_WIDTH, GRID_HEIGHT } from '../_utils/global';
import { GameProps, Segment } from '../_utils/types';

import {
  randomFoodPosition,
  isFoodEaten,
  checkCollision,
} from '../_utils/utils';

import GameOver from './_subcomponents/GameOver';
import Gamebar from './_subcomponents/Gamebar';
import Snakebody from './_subcomponents/Snakebody';
import Food from '../_icons/Food';

import Style from './Game.module.scss';
import GlobalStyle from '../_design/global.module.scss';

const gameboardDimensions = {
  gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
  gridTemplateRows: `repeat(${GRID_HEIGHT}, 1fr)`,
};

const Game = ({ goto, speed, focused, settings }: GameProps) => {
  const [isOver, setIsOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  const [snakebody, setSnakebody] = useState<Segment[]>([{ x: 6, y: 6 }]);
  const [food, setFood] = useState<Segment>(
    randomFoodPosition([{ x: 6, y: 6 }]),
  );

  const inputDirection = useRef<Segment>({ x: 1, y: 0 });
  const lastInputDirection = useRef<Segment>({ x: 1, y: 0 });

  const currentRender = useRef<number>(0);
  const lastRender = useRef<number>(0);

  // Register the keydown event listener
  const handleSwitch = useCallback(
    (key: string) => {
      console.log('key', key);
      switch (key) {
        case 'ArrowUp':
          if (isPaused) break;
          if (lastInputDirection.current.y !== 0) break;
          inputDirection.current = { x: 0, y: -1 };
          lastInputDirection.current = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
          if (isPaused) break;
          if (lastInputDirection.current.y !== 0) break;
          inputDirection.current = { x: 0, y: 1 };
          lastInputDirection.current = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
          if (isPaused) break;
          if (lastInputDirection.current.x !== 0) break;
          inputDirection.current = { x: -1, y: 0 };
          lastInputDirection.current = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
          if (isPaused) break;
          if (lastInputDirection.current.x !== 0) break;
          inputDirection.current = { x: 1, y: 0 };
          lastInputDirection.current = { x: 1, y: 0 };
          break;
        case ' ':
          setIsPaused(prev => !prev);
          break;
        case 'Escape':
          if (!isPaused) {
            setIsPaused(true);
            break;
          }
          if (isPaused) goto('HOME');
          break;
      }
    },
    [goto, isPaused],
  );

  useKeyboardInput(handleSwitch, focused);

  // Animation Loop
  const animate = (timestamp: DOMHighResTimeStamp) => {
    currentRender.current = requestAnimationFrame(animate);
    const secondsSinceLastRender = (timestamp - lastRender.current) / 1000;
    if (secondsSinceLastRender < 1 / speed) return;
    updateSnake();
    lastRender.current = timestamp;
  };

  // Start the game loop
  useEffect(function startGameLoop() {
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

  const handleRestart = () => {
    setSnakebody([{ x: 6, y: 6 }]);
    setFood(randomFoodPosition([{ x: 6, y: 6 }]));
    inputDirection.current = { x: 1, y: 0 };
    lastInputDirection.current = { x: 1, y: 0 };
    setScore(0);
    setIsOver(false);
    setIsPaused(false);
  };

  return (
    <div
      className={`${Style.game} ${GlobalStyle.theme}`}
      data-theme={settings.theme}
    >
      {isOver && (
        <GameOver score={score} goto={goto} onRestart={handleRestart} />
      )}
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
