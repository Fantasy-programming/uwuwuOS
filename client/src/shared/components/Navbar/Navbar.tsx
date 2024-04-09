import { usewindowStore } from '@/shared/stores/windowStore';

import Style from './Navbar.module.scss';
import Controls from './Navbar-Controls';
import Context from './Navbar-Context';

const Navbar = () => {
  const windows = usewindowStore(state => state.windows);
  const focusedWindow = windows.find(window => window.focused === true);

  return (
    <div className={Style.navbar}>
      <Controls current={focusedWindow} />
      <Context current={focusedWindow} />
      <NavTime />
    </div>
  );
};

const NavTime = () => {
  return <div>Sat Oct 16 11:28 AM</div>;
};

export default Navbar;
