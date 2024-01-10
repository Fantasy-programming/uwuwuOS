import { memo } from 'react';
import { Segment } from '../../_utils/types';
import Style from '../Game.module.scss';

const Snakebody = memo(({ segments }: { segments: Segment[] }) => {
  return (
    <>
      {segments.map((segment, i) => (
        <div
          key={`${i}`}
          className={Style.snake}
          style={{ gridRowStart: segment.y, gridColumnStart: segment.x }}
        />
      ))}
    </>
  );
});

export default Snakebody;
