import { usewindowStore } from "@stores/windowStore";

import HandleBtn from "./HandleBtn";

import Style from "./Handle.module.scss";

export const Handle = ({ name, id }: { name: string; id: string }) => {
  const { killProcess } = usewindowStore();

  return (
    <div className={`${Style.handle} windows__handle`}>
      <div className={`${Style.handle__control}`}>
        <HandleBtn
          color="red"
          onClick={() => {
            killProcess(id);
          }}
        />
        <HandleBtn color="yellow" />
        <HandleBtn color="green" />
      </div>
      <div className={Style.handle__title}>
        <p>{name}</p>
      </div>
    </div>
  );
};
