import Global from '../_icons/Global.tsx';
import Ranking from '../_icons/Ranking.tsx';
import Setting from '../_icons/Setting.tsx';

import GlobalStyle from '../_design/global.module.scss';
import Style from './Home.module.scss';
import { HomeProps } from '../_utils/types.ts';
import {
  SNAKE_SPEED_EASY,
  SNAKE_SPEED_MEDIUM,
  SNAKE_SPEED_HARD,
} from '../_utils/global.ts';

import { Button } from '../_components/Button.tsx';

const Home = ({ goto, setSpeed, settings }: HomeProps) => {
  return (
    <div
      id="snake"
      className={`${Style.container} ${GlobalStyle.theme}`}
      data-theme={settings.theme}
    >
      <h1 className={Style.title}>Snake</h1>

      <main className={Style.controls}>
        <Button
          size="lg"
          onClick={() => {
            goto('GAME');
            setSpeed(SNAKE_SPEED_EASY);
          }}
        >
          easy
        </Button>
        <Button
          size="lg"
          onClick={() => {
            goto('GAME');
            setSpeed(SNAKE_SPEED_MEDIUM);
          }}
        >
          medium
        </Button>
        <Button
          size="lg"
          onClick={() => {
            goto('GAME');
            setSpeed(SNAKE_SPEED_HARD);
          }}
        >
          hard
        </Button>
      </main>

      <div className={Style.routes}>
        <Button variant="link" size="icon" onClick={() => goto('SETTINGS')}>
          <Setting width={'1.5em'} height={'1.5em'} fill="#fff" />
          <span>Settings</span>
        </Button>
        <Button variant="link" size="icon" onClick={() => goto('LEADERBOARDS')}>
          <Ranking width={'1.5em'} height={'1.5em'} fill="#fff" />
          <span>Rankings</span>
        </Button>
        <Button variant="link" size="icon" onClick={() => goto('MULTIPLAYER')}>
          <Global width={'1.5em'} height={'1.5em'} fill="#fff" />
          <span>Online BT</span>
        </Button>
      </div>

      <footer className={Style.footer}>
        <small>I know that you play like a wuss</small>
      </footer>
    </div>
  );
};

export default Home;
