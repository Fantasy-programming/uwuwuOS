import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AppConfig } from '../types/types';

export interface WindowState {
  id: string;
  name: string;
  appName: string;
  focused: boolean;
  minimized?: boolean;
  maximized?: boolean;
  pos_x?: number;
  pos_y?: number;
  width?: string;
  height?: string;
  min_width?: string;
  min_height?: string;
  max_width?: string;
  max_height?: string;
  resizable?: boolean;
}

export type WindowStateWithoutId = Omit<WindowState, 'id'>;

interface WindowsState {
  processes: number;
  windows: WindowState[];
}

interface WindowsActions {
  spawnProcess: (info: AppConfig) => void;
  killProcess: (id: string) => void;
  switchFocused: (id: string) => void;
  switchMinimized: (id: string) => void;
  switchMaximized: (id: string) => void;
}

export const usewindowStore = create<WindowsState & WindowsActions>()(
  immer(set => ({
    processes: 0,
    windows: [],
    spawnProcess: info => {
      const id = crypto.randomUUID();

      return set(state => {
        state.processes + 1;
        state.windows.push({ ...info, id, focused: true });
      });
    },
    killProcess: (id: string) =>
      set(state => {
        state.processes - 1;
        state.windows = state.windows.filter(window => window.id !== id);
      }),
    switchMinimized: (id: string) =>
      set(state => {
        state.windows = state.windows.map(window =>
          window.id === id
            ? { ...window, minimized: !window.minimized }
            : window,
        );
      }),
    switchMaximized: (id: string) =>
      set(state => {
        state.windows = state.windows.map(window =>
          window.id === id
            ? { ...window, maximized: !window.maximized }
            : window,
        );
      }),
    switchFocused: (id: string) =>
      set(state => {
        state.windows = state.windows.map(window =>
          window.id === id
            ? { ...window, focused: true }
            : { ...window, focused: false },
        );
      }),
  })),
);
