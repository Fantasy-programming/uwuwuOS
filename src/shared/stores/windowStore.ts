import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// TODO: Implement focus state (current windows)
// TODO: Implement a way to do (minimized / maximized / normal)

export interface WindowState {
  id: string;
  name: string;
  appName: string;
  pos_x?: number;
  pos_y?: number;
  width?: string;
  height?: string;
}

interface WindowsState {
  processes: number;
  windows: WindowState[];
}

interface WindowsActions {
  spawnProcess: (info: WindowState) => void;
  killProcess: (id: string) => void;
}

export const usewindowStore = create<WindowsState & WindowsActions>()(
  immer(set => ({
    processes: 0,
    windows: [],
    spawnProcess: (info: WindowState) =>
      set(state => {
        state.processes + 1;
        state.windows.push(info);
      }),
    killProcess: (id: string) =>
      set(state => {
        state.processes - 1;
        state.windows = state.windows.filter(window => window.id !== id);
      }),
  })),
);
