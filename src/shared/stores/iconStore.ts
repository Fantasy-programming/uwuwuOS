import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { applist } from "@utils/global";

// INFO: Icons are static for now

export interface IconState {
  pos_id: string;
  appName: string;
}

interface IconsState {
  apps: number;
  icons: IconState[];
}

interface IconsActions {
  moveIcon: (appName: string, newPos: string) => void;
}

export const useIconStore = create<IconsState & IconsActions>()(
  immer((set) => ({
    apps: 0,
    icons: applist,
    moveIcon: (appName: string, newPos: string) =>
      set((state) => {
        state.icons = state.icons.map((icon) => {
          if (icon.appName === appName) {
            icon.pos_id = newPos;
          }
          return icon;
        });
      }),
  })),
);
