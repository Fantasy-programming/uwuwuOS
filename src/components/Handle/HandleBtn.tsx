import classNames from 'classnames/bind';
import Styles from "./HandleBtn.module.scss";

enum HandleBtnColor {
    red = "red",
    yellow = "yellow",
    green = "green",
}

type HandleBtnProps = {
    color?:  "red" | "yellow" | "green",
    onClick?: () => void,
}


const cx = classNames.bind(Styles);

const HandleBtn = ({color = "red", onClick}: HandleBtnProps) => {

    const btnClass = cx(Styles.handle__button, {
        [Styles.close__button]: color === HandleBtnColor.red,
        [Styles.minimize__button]: color === HandleBtnColor.yellow,
        [Styles.maximize__button]: color === HandleBtnColor.green,
    })

  return (
    <div className={btnClass} onClick={onClick}></div>
  )
}

export default HandleBtn