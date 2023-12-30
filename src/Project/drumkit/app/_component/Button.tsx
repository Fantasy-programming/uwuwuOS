import Style from '../Drumkit.module.scss'

interface ButtonProps {
  children: React.ReactNode
  bg: string
  sound: string
}

const Button: React.FC<ButtonProps> = ({ children, bg, sound }) => {
  const play = (audioSrc: string) => {
    new Audio(audioSrc).play()
  }

  return (
    <button
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
      type="button"
      className={Style.drum}
      onClick={() => play(sound)}
    >
      {children}
    </button>
  )
}

export default Button
