import { Rnd } from "react-rnd";
import { useState } from "react";
import Style from "./Window.module.scss";
import { Handle } from "../Handle/Handle";

const Window = () => {

    const [window, setWindow] = useState({
        x: 100,
        y: 100,
        width: "500px",
        height: "300px",
    });


  return (
        <Rnd
    className={Style.window}
    bounds={".Frame"}
    size={{ width: window.width,  height: window.height }}
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
    }
    }
>
    <Handle/>
    <div style={{display: "flex"}}>
        sfkasdjfkajfkajflkajkflajskfjaklf;
    </div>
</Rnd>
  )
}

export default Window