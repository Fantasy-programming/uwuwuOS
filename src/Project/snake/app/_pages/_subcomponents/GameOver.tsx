import { ScreenType } from '../../_utils/types';
import Style from '../Game.module.scss';

const GameOver = ({
  score,
  onRestart,
  goto,
}: {
  score: number;
  onRestart: () => void;
  goto: (screen: ScreenType) => void;
}) => {
  return (
    <div className={Style.gameOverScreen}>
      <h1>Game Over</h1>
      <p>Your score: {score}</p>
      <div>
        <button type="button" onClick={onRestart}>
          Restart
        </button>
        <button type="button" onClick={() => goto('HOME')}>
          Main menu
        </button>
      </div>
    </div>
  );
};

export default GameOver;
