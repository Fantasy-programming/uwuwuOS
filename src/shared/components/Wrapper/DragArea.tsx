import { useMemo } from "react";
import { useDroppable } from "@dnd-kit/core";
import PlayIcon from "@/Project/welcome";

import Style from "./Screen.module.scss";

const DragArea = ({
  x,
  y,
  value,
}: {
  x: number;
  y: number;
  value: string | null;
}) => {
  // Create an array for rows and columns
  // TODO: MEMOIZE THIS
  const rows = useMemo(() => Array.from({ length: x }, (_, i) => i), [x]);
  const cols = useMemo(() => Array.from({ length: y }, (_, i) => i), [y]);

  return (
    <div className={Style.dragArea}>
      {rows.map((_, rowIndex) => (
        <div key={rowIndex}>
          {cols.map((_, colIndex) => (
            <Place
              key={`${rowIndex}-${colIndex}`}
              id={`${rowIndex}-${colIndex}`}
            >
              {value === `${rowIndex}-${colIndex}` ? <PlayIcon /> : null}
            </Place>
          ))}
        </div>
      ))}
    </div>
  );
};

const Place = ({
  children,
  id,
}: {
  children?: React.ReactNode;
  id: string;
}) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default DragArea;
