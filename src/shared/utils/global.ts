import Welcome from "@project/welcome";
import WelcomeApp from "@project/welcome/app";

import Snake from "@project/snake";
import SnakeApp from "@project/snake/app";

import Drumkit from "@project/drumkit";
import DrumkitApp from "@project/drumkit/app";

type Map = {
  [key: string]: () => JSX.Element;
};

//INFO: The pos_id range from 0-0 to 6-17 with the first number being the row and the second the column

export const applist = [
  {
    appName: "Welcome",
    pos_id: "0-0",
  },
  {
    appName: "Snake",
    pos_id: "1-0",
  },
  {
    appName: "Drumkit",
    pos_id: "2-0",
  },
];

export const iconMap: Map = {
  Welcome: Welcome,
  Snake: Snake,
  Drumkit: Drumkit,
};

export const appMap: Map = {
  Welcome: WelcomeApp,
  Snake: SnakeApp,
  Drumkit: DrumkitApp,
};
