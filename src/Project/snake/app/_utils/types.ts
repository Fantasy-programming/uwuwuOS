enum Screen {
  GAME = 'game',
  SETTINGS = 'settings',
  LEADERBOARDS = 'leaderboards',
  HOME = 'home',
  MULTIPLAYER = 'multiplayer',
}

export type ScreenType = keyof typeof Screen;

export interface PageProps {
  goto: (screen: ScreenType) => void;
}

export interface HomeProps extends PageProps {
  setSpeed: (speed: number) => void;
  settings: GameSettings;
}

export interface GameProps extends PageProps {
  speed: number;
  settings: GameSettings;
}

export interface SettingsProps extends PageProps {
  settings: GameSettings;
  updateSettings: React.Dispatch<React.SetStateAction<GameSettings>>;
}

// GAME

export interface Segment {
  x: number;
  y: number;
}

export interface GameSettings {
  music: boolean;
  sound: boolean;
  volume: number;
  theme: Theme;
}

export type Theme = 'basic' | 'retro';
