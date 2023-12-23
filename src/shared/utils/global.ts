import Welcome from "@project/welcome";
import WelcomeApp from "@project/welcome/app";

import Snake from "@project/snake";
import SnakeApp from "@project/snake/app";

type Map = {
  [key: string]: () => JSX.Element;
};

//INFO: The pos_id range from 0-0 to 17-6 with the first number being the row and the second the column

export const applist = [
  {
    appName: "Welcome",
    pos_id: "0-0",
  },
  {
    appName: "Snake",
    pos_id: "1-0",
  },
];

export const iconMap: Map = {
  Welcome: Welcome,
  Snake: Snake,
};

export const appMap: Map = {
  Welcome: WelcomeApp,
  Snake: SnakeApp,
};
