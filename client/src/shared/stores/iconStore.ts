import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { appList } from '@utils/global';

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

//INFO: The pos_id range from 0-0 to 6-17 (row-col)
export const useIconStore = create<IconsState & IconsActions>()(
  immer(set => ({
    apps: Object.keys(appList).length,
    icons: Object.values(appList).map(app => ({
      pos_id: app.start_pos,
      appName: app.appName,
    })),
    moveIcon: (appName: string, newPos: string) =>
      set(state => {
        // Anti collision algorithm
        const moveRecursive = (icon: IconState, position: string) => {
          const [x, y] = position.split('-').map(Number);
          const nextY = (y + 1) % 7;
          const nextX = nextY === 0 ? (x + 1) % 18 : x;

          const nextPos = `${nextX}-${nextY}`;

          const nextIcon = state.icons.find(ic => ic.pos_id === nextPos);

          if (nextIcon) {
            moveRecursive(nextIcon, nextPos);
          }

          icon.pos_id = nextPos;
        };

        const iconToMove = state.icons.find(icon => icon.appName === appName);
        if (iconToMove) {
          const iconAtNewPos = state.icons.find(icon => icon.pos_id === newPos);
          if (iconAtNewPos) {
            moveRecursive(iconAtNewPos, newPos);
          }
          iconToMove.pos_id = newPos;
        }
      }),
  })),
);
