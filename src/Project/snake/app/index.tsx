import { useState } from 'react';

import { ScreenType } from './_utils/types';

import Game from './_pages/Game';
import Home from './_pages/Home';

const Content = () => {
  const [screen, setScreen] = useState<ScreenType>('HOME');
  switch (screen) {
    case 'GAME':
      return <Game goto={setScreen} />;
    case 'SETTINGS':
      return <div>Settings</div>;
    case 'LEADERBOARDS':
      return <div>Leaderboards</div>;
    default:
      return <Home goto={setScreen} />;
  }
};

export default Content;
