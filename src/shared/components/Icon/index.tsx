import { CSS } from '@dnd-kit/utilities';

import { useDraggable } from '@dnd-kit/core';
import useDoubleClick from '@hooks/useDoubleClick';
import { usewindowStore, WindowState } from '@stores/windowStore';

import Style from './Icon.module.scss';

interface IconProps {
  children: React.ReactNode;
  title: string;
  id: string;
  app: WindowState;
}

const Icon = ({ children, title, id, app }: IconProps) => {
  const { spawnProcess } = usewindowStore();

  const clickHandle = useDoubleClick(
    () => null,
    () => {
      spawnProcess(app);
    },
  );

  const handleEnter = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      spawnProcess(app);
    }
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <>
      <div
        style={style}
        className={Style.icon}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        onClick={clickHandle}
        onKeyDown={handleEnter}
        role="button"
        tabIndex={0}
      >
        <div>{children}</div>
        <div className={Style.title}>{title}</div>
        <div className={Style.overlay} />
      </div>
    </>
  );
};

export default Icon;
