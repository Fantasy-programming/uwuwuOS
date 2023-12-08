import Style from "./Handle.module.scss";
import HandleBtn from "./HandleBtn";

export const Handle = () => {
    return (
        <div className={`${Style.handle} windows__handle`}>
  <div className={`${Style.handle__control}`}>
                <HandleBtn color="red" />
                <HandleBtn color="yellow" />
                <HandleBtn color="green" />

                <div className={Style.handle__button}></div>
                <div className={Style.handle__button}></div>
            </div>
            <div className={Style.handle__title}>
                <p>My Computer</p>
            </div>
        </div>
    );
};
