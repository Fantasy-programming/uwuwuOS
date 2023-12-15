import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

import Navbar from "@components/Navbar";
import IconArea from "./DragArea";

const Screen = ({ children }: { children: React.ReactNode }) => {
  const [parent, setParent] = useState(`0-0`);

  function handleDragEnd({ over }: any) {
    setParent(over ? over.id : `0-0`);
  }

  return (
    <>
      <Navbar />
      <main className="Frame">
        <DndContext onDragEnd={handleDragEnd}>
          <IconArea x={18} y={7} value={parent} />
        </DndContext>
        {children}
      </main>
    </>
  );
};

export default Screen;
