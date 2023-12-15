import Navbar from "@components/Navbar";
import React from "react";

import Styles from "./Screen.module.scss";

const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="Frame">
        <div className={Styles.dragArea}> {children}</div>
      </main>
    </>
  );
};

export default Screen;
