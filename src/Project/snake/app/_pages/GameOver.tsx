import Style from './Game.module.scss';

const GameOver = ({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) => {
  return (
    <div className={Style.gameOverScreen}>
      <h1>Game Over</h1>
      <p>Your score: {score}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOver;
