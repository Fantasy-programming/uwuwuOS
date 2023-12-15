import { CSS } from "@dnd-kit/utilities";

import { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";

import useDoubleClick from "@hooks/useDoubleClick";
import { usewindowStore } from "@stores/windowStore";

import Style from "./Icon.module.scss";

const Icon = (props) => {
  const { spawnProcess } = usewindowStore();
  const iconRef = useRef<HTMLDivElement>(null);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const process = {
    id: crypto.randomUUID(),
    name: "Welcome",
    appName: "Welcome",
  };

  useDoubleClick({
    onDoubleClick: () => {
      spawnProcess(process);
    },
    ref: iconRef,
    latency: 250,
  });

  return (
    <>
      <div style={style} className={Style.icon}>
        <div ref={setNodeRef} {...attributes} {...listeners}>
          {props.children}
        </div>
        <div ref={iconRef} className={Style.title}>
          {props.title}
        </div>
        <div className={Style.overlay} />
      </div>
    </>
  );
};

export default Icon;
