import Style from './index.module.scss'
import Controls from './Navbar-Controls'
import Context from './Navbar-Context'
import Time from './Navbar-Time'

const Navbar = () => {
  const navStyles = ` ${Style.navbar}`
  return (
    <div className={navStyles}>
      <Controls />
      <Context />
      <Time />
    </div>
  )
}

export default Navbar
