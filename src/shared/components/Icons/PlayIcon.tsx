import Play from "./Play";
import Style from "./Icon.module.scss";
import { useRef } from "react";
import { usewindowStore } from "@stores/windowStore";
import { Rnd } from "react-rnd";
import useDoubleClick from "@hooks/useDoubleClick";

const PlayIcon = () => {
  const { spawnProcess } = usewindowStore();
  const iconRef = useRef<HTMLDivElement>(null);

  const process = {
    id: crypto.randomUUID(),
    name: "test",
    appName: "tester",
  };

  useDoubleClick({
    onSingleClick: () => {
      console.log("single click");
    },
    onDoubleClick: () => {
      console.log("double click");
      spawnProcess(process);
    },
    ref: iconRef,
    latency: 250,
  });

  return (
    <Rnd>
      <div className={Style.icon} ref={iconRef}>
        <Play width={48} height={48} />
      </div>
    </Rnd>
  );
};

export default PlayIcon;
