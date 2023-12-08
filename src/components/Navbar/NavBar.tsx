import Style from "./styles.module.scss";
// import Utility from "../utility.module.css";

function Navbar() {
  const navStyles = ` ${Style.navbar}`;
  return (
    <div className={navStyles}>
      <div>start</div>
      <div>/home/fun/ - qutebrowser</div>
      <div>Sat Oct 16 11:28 AM</div>
    </div>
  );
}

export default Navbar;
