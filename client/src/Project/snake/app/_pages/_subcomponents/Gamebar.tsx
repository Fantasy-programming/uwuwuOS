import { memo } from 'react';
import Play from '../../_icons/Play';
import Pause from '../../_icons/Pause';
import Style from '../Game.module.scss';

interface GamebarProps {
  isPaused: boolean;
  handlePause: () => void;
  score: number;
}

const Gamebar = memo(({ isPaused, handlePause, score }: GamebarProps) => {
  return (
    <header className={Style.gamebar}>
      <div className={Style.gamebarLeft}>
        <button type="button" onClick={handlePause}>
          {isPaused ? <Pause /> : <Play />}
        </button>
      </div>
      <span className={Style.snakeScore}>{score}</span>
    </header>
  );
});

export default Gamebar;
