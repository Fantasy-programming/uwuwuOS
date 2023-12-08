import Navbar from "@/components/Navbar";
import React from "react";

const Screen = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className="Frame">
        {children}
      </main>

    </>
  )
}

export default Screen