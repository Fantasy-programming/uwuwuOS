import { ReactNode } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { usewindowStore } from '@stores/windowStore';
import { useIconStore } from '@stores/iconStore';
import { useGetSensors } from '@hooks/useGetSensors';

import Window from '@components/Window/Window';
import Grid from './_components/Grid';

/** Screen Wrapper */
const Screen = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

/** Work Area */
const WorkArea = ({ children }: { children: ReactNode }) => {
  return <div className="WorkArea"> {children} </div>;
};

/** Windows Area - Where all the windows are rendered */
const WindowsArea = () => {
  const windows = usewindowStore(state => state.windows);

  return (
    <>
      {windows.map(window => {
        return (
          <Window
            key={window.id}
            name={window.name}
            appName={window.appName}
            id={window.id}
            width={window.width}
            height={window.height}
            minimized={window.minimized}
            maximized={window.maximized}
            focused={window.focused}
          />
        );
      })}
    </>
  );
};

const rows = Array.from({ length: 18 }, (_, i) => i);
const cols = Array.from({ length: 7 }, (_, i) => i);

/* Drag Area - Where all the icons are rendered */
const DragArea = () => {
  const sensors = useGetSensors();
  const moveIcon = useIconStore(state => state.moveIcon);

  function handleDragEnd({ over, active }: DragEndEvent) {
    console.log(over, active);
    if (!over) return;
    moveIcon(active.id.toString(), over.id.toString());
  }

  return (
    <main className="Frame">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <Grid rows={rows} cols={cols} />
      </DndContext>
    </main>
  );
};

Screen.displayName = 'Screen';
WorkArea.displayName = 'WorkArea';
WindowsArea.displayName = 'WindowsArea';
DragArea.displayName = 'DragArea';

export { Screen, WindowsArea, DragArea, WorkArea };
