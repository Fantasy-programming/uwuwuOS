import "./design/normalize.scss";
import "./design/globals.scss";
import "./App.scss";

import Screen from "@components/Wrapper/Screen";
import { usewindowStore } from "@stores/windowStore";

import Window from "@components/Window/Window";
import PlayIcon from "@components/Icons/PlayIcon";

function App() {
  const windows = usewindowStore((state) => state.windows);

  return (
    <>
      <Screen>
        <PlayIcon />
        {windows.map((window) => {
          return (
            <Window
              key={window.id}
              name={window.name}
              appName={window.appName}
              id={window.id}
            />
          );
        })}
      </Screen>
    </>
  );
}

export default App;
