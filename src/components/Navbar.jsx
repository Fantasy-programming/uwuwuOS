import React from "react";
import Style from "./Navbar.module.css";
import Utility from "./utility.module.css";

function Navbar() {
  const navStyles = `${Utility["flex-between"]} ${Style.navbar}`;
  return (
    <div className={navStyles}>
      <div>start</div>
      <div>/home/fun/ - qutebrowser</div>
      <div>Sat Oct 16 11:28 AM</div>
    </div>
  );
}

export default Navbar;
