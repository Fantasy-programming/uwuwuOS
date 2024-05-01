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
import { useWindowContext } from '@/shared/components/Window/Window.hook';
import { usewindowStore } from '@/shared/stores/windowStore';

// Volume should be between 0 and 10
const Content = () => {
  const context = useWindowContext();
  const switchTitle = usewindowStore(state => state.switchTitle);

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
      switchTitle(context.id, 'Snake');

      return (
        <Home
          goto={setScreen}
          setSpeed={setSpeed}
          settings={settings}
          focused={context.focusState}
        />
      );
    case 'GAME':
      switchTitle(context.id, 'Snake - Game');
      return (
        <Game
          goto={setScreen}
          speed={speed}
          settings={settings}
          focused={context.focusState}
        />
      );
    case 'LEADERBOARDS':
      return <LeaderBoards goto={setScreen} focused={context.focusState} />;
    case 'MULTIPLAYER':
      return <Multiplayer />;
    case 'SETTINGS':
      switchTitle(context.id, 'Snake - Settings');
      return (
        <Settings
          goto={setScreen}
          settings={settings}
          updateSettings={setSettings}
          focused={context.focusState}
        />
      );
  }
};

export default Content;
