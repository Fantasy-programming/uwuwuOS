enum Screen {
  GAME = 'game',
  SETTINGS = 'settings',
  LEADERBOARDS = 'leaderboards',
  HOME = 'home',
}

export type ScreenType = keyof typeof Screen;

export interface PageProps {
  goto: (screen: ScreenType) => void;
}

// GAme

export interface Segment {
  x: number;
  y: number;
}
