import { clsx } from 'clsx'
import Styles from './HandleBtn.module.scss'

enum HandleBtnColor {
  red = 'red',
  yellow = 'yellow',
  green = 'green',
}

type HandleBtnProps = {
  color?: 'red' | 'yellow' | 'green'
  onClick?: () => void
}

const HandleBtn = ({ color = 'red', onClick }: HandleBtnProps) => {
  const btnClass = clsx(Styles.handle__button, {
    [Styles.close__button]: color === HandleBtnColor.red,
    [Styles.minimize__button]: color === HandleBtnColor.yellow,
    [Styles.maximize__button]: color === HandleBtnColor.green,
  })

  return <button className={btnClass} onClick={onClick}></button>
}

export default HandleBtn
