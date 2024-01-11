import { usewindowStore } from '@/shared/stores/windowStore'

import Style from './index.module.scss'
import Controls from './Navbar-Controls'
import Context from './Navbar-Context'
import Time from './Navbar-Time'

const Navbar = () => {
  const windows = usewindowStore(state => state.windows)
  const focusedWindow = windows.find(window => window.focused === true)

  const navStyles = ` ${Style.navbar}`

  return (
    <div className={navStyles}>
      <Controls current={focusedWindow} />
      <Context current={focusedWindow} />
      <Time />
    </div>
  );
};

export default Navbar;
