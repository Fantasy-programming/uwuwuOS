import { Rnd } from "react-rnd";
import { useState } from "react";
import Style from "./Window.module.scss";
import { Handle } from "../Handle/Handle";
import useApp from "@hooks/useApp";

import { type WindowState } from "@stores/windowStore";

const Window = ({
  name,
  appName,
  id,
  pos_x = 100,
  pos_y = 100,
  width = "500px",
  height = "500px",
}: WindowState) => {
  const [window, setWindow] = useState({
    x: pos_x,
    y: pos_y,
    width: width,
    height: height,
  });

  const Content = useApp({ name: appName });

  return (
    <Rnd
      className={Style.window}
      bounds={".Frame"}
      size={{ width: window.width, height: window.height }}
      position={{ x: window.x, y: window.y }}
      dragHandleClassName={"windows__handle"}
      onDragStop={(_e, d) => {
        setWindow({ ...window, x: d.x, y: d.y });
      }}
      onResize={(_e, _direction, ref, _delta, position) => {
        setWindow({
          ...window,
          width: ref.style.width,
          height: ref.style.height,
          ...position,
        });
      }}
    >
      <Handle name={name} id={id} />
      <Content />
    </Rnd>
  );
};

export default Window;
