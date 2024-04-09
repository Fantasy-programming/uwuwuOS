import { Button } from '../../_components/Button';
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
        <Button variant="secondary" size="lg" onClick={onRestart}>
          Restart
        </Button>
        <Button variant="danger" size="lg" onClick={() => goto('HOME')}>
          Main menu
        </Button>
      </div>
    </div>
  );
};

export default GameOver;
