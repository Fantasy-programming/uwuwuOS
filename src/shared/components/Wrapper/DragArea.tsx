import { useMemo, useState } from "react";
import { useDroppable, DndContext, DragEndEvent } from "@dnd-kit/core";
import { useGetSensors } from "@hooks/useGetSensors";

import PlayIcon from "@/Project/welcome";
import Style from "./DragArea.module.scss";

interface DragAreaProps {
  children: React.ReactNode;
}

interface PlaceProps {
  children?: React.ReactNode;
  id: string;
}

interface GridProps {
  rows: number[];
  cols: number[];
  parent: string | number;
}

const DragArea = ({ children }: DragAreaProps) => {
  const [parent, setParent] = useState<string | number>("0-0");
  const sensors = useGetSensors();

  function handleDragEnd({ over }: DragEndEvent) {
    setParent(over ? over.id : "0-0");
  }

  const rows = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);
  const cols = useMemo(() => Array.from({ length: 7 }, (_, i) => i), []);

  return (
    <main className="Frame">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <Grid parent={parent} rows={rows} cols={cols} />
        {children}
      </DndContext>
    </main>
  );
};

const Grid = ({ parent, rows, cols }: GridProps) => {
  return (
    <div className={Style.dragArea}>
      {rows.map((_, rowIndex) => (
        <div key={`row-${rowIndex}`}>
          {cols.map((_, colIndex) => (
            <Place
              key={`${rowIndex}-${colIndex}`}
              id={`${rowIndex}-${colIndex}`}
            >
              {parent === `${rowIndex}-${colIndex}` && <PlayIcon />}
            </Place>
          ))}
        </div>
      ))}
    </div>
  );
};

const Place = ({ children, id }: PlaceProps) => {
  const { setNodeRef } = useDroppable({ id: id });

  return (
    <div ref={setNodeRef} className={Style.place}>
      {children}
    </div>
  );
};

export default DragArea;
