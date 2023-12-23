import { CSS } from "@dnd-kit/utilities";

import { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";

import useDoubleClick from "@hooks/useDoubleClick";
import { usewindowStore, WindowState } from "@stores/windowStore";

import Style from "./Icon.module.scss";

interface IconProps {
  children: React.ReactNode;
  title: string;
  id: string;
  app: WindowState;
}

const Icon = ({ children, title, id, app }: IconProps) => {
  const { spawnProcess } = usewindowStore();
  const iconRef = useRef<HTMLDivElement>(null);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  useDoubleClick({
    onDoubleClick: () => {
      spawnProcess(app);
    },
    ref: iconRef,
    latency: 250,
  });

  return (
    <>
      <div
        style={style}
        className={Style.icon}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <div ref={iconRef} data-no-dnd="true">
          {children}
        </div>
        <div className={Style.title}>{title}</div>
        <div className={Style.overlay} />
      </div>
    </>
  );
};

export default Icon;
