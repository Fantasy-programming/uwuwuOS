import "./App.css";
import Navbar from "./components/Navbar";
import { Rnd } from "react-rnd";

function App() {
  return (
    <>
      <Navbar />
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
      >
        Rnd
      </Rnd>
    </>
  );
}

export default App;
