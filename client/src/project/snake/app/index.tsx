import { useState } from 'react';

import { SNAKE_SPEED_EASY } from './_utils/global';
import { ScreenType, GameSettings } from './_utils/types';
import './_design/global.module.scss';

// Routes
import LeaderBoards from './_pages/LeaderBoards';
import Settings from './_pages/Settings';
import Game from './_pages/Game';
import Home from './_pages/Home';
import Multiplayer from './_pages/Multiplayer';
import { usewindowStore } from '@/shared/stores/windowStore';

// Volume should be between 0 and 10
const Content = () => {
  const windows = usewindowStore(state => state.windows);
  const state = windows.find(window => window.name === 'Snake')!;

  const [screen, setScreen] = useState<ScreenType>('HOME');
  const [speed, setSpeed] = useState<number>(SNAKE_SPEED_EASY);
  const [settings, setSettings] = useState<GameSettings>({
    music: true,
    sound: true,
    volume: 5,
    theme: 'basic',
  });

  switch (screen) {
    case 'HOME':
      return (
        <Home
          goto={setScreen}
          setSpeed={setSpeed}
          settings={settings}
          focused={state.focused}
        />
      );
    case 'GAME':
      return (
        <Game
          goto={setScreen}
          speed={speed}
          settings={settings}
          focused={state.focused}
        />
      );
    case 'LEADERBOARDS':
      return <LeaderBoards goto={setScreen} focused={state.focused} />;
    case 'MULTIPLAYER':
      return <Multiplayer />;
    case 'SETTINGS':
      return (
        <Settings
          goto={setScreen}
          settings={settings}
          updateSettings={setSettings}
          focused={state.focused}
        />
      );
  }
};

export default Content;
