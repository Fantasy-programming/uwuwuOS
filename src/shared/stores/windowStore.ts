import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// TODO: Implement focus state (current windows)
// TODO: Implement a way to do (minimized / maximized / normal)

export interface WindowState {
  id: string
  name: string
  appName: string
  focused: boolean
  minimized: boolean
  maximized: boolean
  pos_x?: number
  pos_y?: number
  width?: string
  height?: string
}

interface WindowsState {
  processes: number;
  windows: WindowState[];
}

interface WindowsActions {
  spawnProcess: (info: WindowState) => void
  killProcess: (id: string) => void
  switchFocused: (id: string) => void
  switchMinimized: (id: string) => void
  switchMaximized: (id: string) => void
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
    switchMinimized: (id: string) =>
      set(state => {
        state.windows = state.windows.map(window =>
          window.id === id
            ? { ...window, minimized: !window.minimized }
            : window,
        )
      }),
    switchMaximized: (id: string) =>
      set(state => {
        state.windows = state.windows.map(window =>
          window.id === id
            ? { ...window, maximized: !window.maximized }
            : window,
        )
      }),
    switchFocused: (id: string) =>
      set(state => {
        state.windows = state.windows.map(window =>
          window.id === id
            ? { ...window, focused: true }
            : { ...window, focused: false },
        )
      }),
  })),
);
