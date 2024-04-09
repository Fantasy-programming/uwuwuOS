import { Fragment, FC } from 'react';
import { useDroppable } from '@dnd-kit/core';

import useIcon from '@hooks/useIcon';
import Style from './Grid.module.scss';

interface GridProps {
  rows: number[];
  cols: number[];
}

const Grid: FC<GridProps> = ({ rows, cols }) => {
  return (
    <div className={Style.dragArea}>
      {cols.map((_, colIndex) => (
        <Fragment key={`row-${colIndex}`}>
          {rows.map((_, rowIndex) => {
            return (
              <Place
                key={`${rowIndex}-${colIndex}`}
                position={`${rowIndex}-${colIndex}`}
              />
            );
          })}
        </Fragment>
      ))}
    </div>
  );
};

const Place: FC<{ position: string }> = ({ position }) => {
  const IconComponent = useIcon(position);
  const { setNodeRef } = useDroppable({ id: position });

  return (
    <div ref={setNodeRef} className={Style.place}>
      {IconComponent ?? null}
    </div>
  );
};

Grid.displayName = 'DragAreaGrid';
Place.displayName = 'DragAreaPlace';

export default Grid;
