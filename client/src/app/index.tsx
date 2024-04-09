import './design/globals.scss';

import {
  Screen,
  DragArea,
  WindowsArea,
  WorkArea,
} from '@components/Screen/ScreenArea';
import Navbar from '@components/Navbar/Navbar';

function App() {
  return (
    <>
      <Screen>
        <Navbar />
        <WorkArea>
          <DragArea />
          <WindowsArea />
        </WorkArea>
      </Screen>
    </>
  );
}

export default App;
