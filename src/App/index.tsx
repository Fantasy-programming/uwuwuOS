// Global Styles
import "./design/normalize.scss";
import "./design/globals.scss";

import Screen from "@components/Wrapper/Screen";
import Window from "@components/Window/Window";

import { usewindowStore } from "@stores/windowStore";

function App() {
  const windows = usewindowStore((state) => state.windows);

  return (
    <>
      <Screen>
        {windows.map((window) => {
          return (
            <Window
              key={window.id}
              name={window.name}
              appName={window.appName}
              id={window.id}
              width={window.width}
              height={window.height}
            />
          );
        })}
      </Screen>
    </>
  );
}

export default App;
