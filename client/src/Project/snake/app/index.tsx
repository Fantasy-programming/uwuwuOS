import { useState } from 'react';

import { SNAKE_SPEED_EASY } from './_utils/global';
import { ScreenType, GameSettings } from './_utils/types';

import LeaderBoards from './_pages/LeaderBoards';
import Settings from './_pages/Settings';
import Game from './_pages/Game';
import Home from './_pages/Home';

// TODO: ADD A LOADING SCREEN
// TODO: Add a coundown to the game start
// TODO: Add a pause screen
// TODO: Add ability to add player name
// TODO: Add ability to save score
// TODO: Better UI (fonts, colors, etc..)
// TODO: Add sound effects
// TODO: Add music
// TODO: Add themes
// TODO: Add multiplayer (online)

// Volume should be between 0 and 10

const Content = () => {
  const [screen, setScreen] = useState<ScreenType>('HOME');
  const [speed, setSpeed] = useState<number>(SNAKE_SPEED_EASY);
  const [settings, setSettings] = useState<GameSettings>({
    music: true,
    sound: true,
    volume: 0,
    theme: 'basic',
  });

  switch (screen) {
    case 'GAME':
      return <Game goto={setScreen} speed={speed} settings={settings} />;
    case 'SETTINGS':
      return (
        <Settings
          goto={setScreen}
          settings={settings}
          updateSettings={setSettings}
        />
      );
    case 'LEADERBOARDS':
      return <LeaderBoards goto={setScreen} />;
    case 'MULTIPLAYER':
      return <div>multi</div>;
    default:
      return <Home goto={setScreen} setSpeed={setSpeed} settings={settings} />;
  }
};

export default Content;
