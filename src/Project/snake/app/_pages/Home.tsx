import Style from './Home.module.scss';
import { PageProps } from '../_utils/types.ts';

const Home = ({ goto }: PageProps) => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>Snake</div>

      <div className={Style.routes}>
        <button type="button" onClick={() => goto('GAME')}>
          Play
        </button>
        <button type="button" onClick={() => goto('LEADERBOARDS')}>
          Leaderboards
        </button>
        <button type="button" onClick={() => goto('SETTINGS')}>
          Settings
        </button>
      </div>

      <footer className={Style.footer}>
        <small>I know that you play like a wuss</small>
      </footer>
    </div>
  );
};

export default Home;
